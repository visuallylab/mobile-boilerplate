import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import AuthNavigator from '@projectName/navigators/AuthNavigator';
import AppNavigator from '@projectName/navigators/AppNavigator';

const routers = {
  App: { screen: AppNavigator },
  Auth: { screen: AuthNavigator },
};

const config = {
  initialRouteName: 'Auth',
};

const RootNavigator = createAppContainer(
  createSwitchNavigator(routers, config),
);

export default RootNavigator;
