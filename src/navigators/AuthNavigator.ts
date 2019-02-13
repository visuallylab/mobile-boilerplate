import { createStackNavigator, StackNavigatorConfig } from 'react-navigation';

import LoginScreen from '@projectName/screens/LoginScreen';

const routers = {
  Login: { screen: LoginScreen },
};

const config: StackNavigatorConfig = {
  initialRouteName: 'Login',
  headerMode: 'none',
};

const AuthNavigator = createStackNavigator(routers, config);

export default AuthNavigator;
