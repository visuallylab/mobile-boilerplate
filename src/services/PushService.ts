import OneSignal, { oneSignalEvents } from 'react-native-onesignal';

const init = (appId: string) => {
  // https://documentation.onesignal.com/docs/react-native-sdk#section-gdpr-consent-functions
  // OneSignal.setRequiresUserPrivacyConsent(true);
  OneSignal.init(appId);
  OneSignal.inFocusDisplaying(0);
};

const addEventListener = (type: oneSignalEvents, listener: any) => {
  if (listener) {
    OneSignal.addEventListener(type, listener);
  }
};

const removeEventListener = (type: oneSignalEvents, listener: any) => {
  if (listener) {
    OneSignal.removeEventListener(type, listener);
  }
};

const bindHandler = (handler: any) => {
  addEventListener('received', handler.onReceived);
  addEventListener('opened', handler.onOpened);
  addEventListener('ids', handler.onIds);
};

const unbindHandler = (handler: any) => {
  removeEventListener('received', handler.onReceived);
  removeEventListener('opened', handler.onOpened);
  removeEventListener('ids', handler.onIds);
};

const configure = () => {
  OneSignal.configure();
};

export default {
  init,
  bindHandler,
  unbindHandler,
  configure,
};
