import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import { color, shadow } from '@projectName/src/styles';
import NotificationScreen from '@projectName/screens/NotificationScreen';
import ProfileScreen from '@projectName/screens/ProfileScreen';

const renderTabIcon = name => ({ tintColor }) => (
  <Icon size={33} color={tintColor} name={name} />
);

const ProfileStack = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: () => ({
      title: 'My Profile',
    }),
  },
});

const NotificationStack = createStackNavigator({
  Notification: {
    screen: NotificationScreen,
    navigationOptions: () => ({
      title: 'Notification',
    }),
  },
});

const routers = {
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarIcon: renderTabIcon('user'),
    },
  },
  Notification: {
    screen: NotificationStack,
    navigationOptions: {
      tabBarIcon: renderTabIcon('notification'),
    },
  },
};

const tabNavigatorConfig = {
  tabBarOptions: {
    showLabel: false,
    activeTintColor: color.tealish,
    style: {
      ...shadow.regular,
    },
  },
};

const AppNavigator = createBottomTabNavigator(routers, tabNavigatorConfig);

export default AppNavigator;
