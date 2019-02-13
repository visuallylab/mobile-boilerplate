import React, { Component } from 'react';
import Config from 'react-native-config';

import RootNavigator from '@biime/navigators/RootNavigator';

import { updatePushToken } from '@biime/actions';
import PushService from '@biime/services/PushService';
import NavigationService from '@biime/services/NavigationService';
import { Store } from 'redux';

interface IProps {
  store: Store;
}
export default class App extends Component<IProps> {
  componentDidMount() {
    PushService.init(Config.ONESIGNAL_APP_ID);
    PushService.bindHandler(this);
    PushService.configure();
  }

  componentWillUnmount() {
    PushService.unbindHandler(this);
  }

  onReceived = (notification: any) => {
    if (notification.isAppInFocus) {
      this.navigateToScreen(notification);
    }
  };

  onOpened = (openResult: any) => {
    this.navigateToScreen(openResult.notification);
  };

  onIds = (device: any) => {
    this.props.store.dispatch(updatePushToken(device.userId));
  };

  navigateToScreen = (notification: any) => {
    const additionalData = notification.payload.additionalData;
    NavigationService.navigate('Confirmation', additionalData);
  };

  render() {
    return <RootNavigator ref={NavigationService.setNavigator} />;
  }
}
