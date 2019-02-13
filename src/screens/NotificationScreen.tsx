import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { color, fontSize } from '@projectName/src/styles';

const ListItem = () => (
  <View style={myStyles.notificationContainer}>
    <Icon style={myStyles.icon} name="info-circle" size={32} />
    <View style={myStyles.infoContainer}>
      <Text style={myStyles.title}>notification text</Text>
    </View>
  </View>
);

class NotificationScreen extends React.Component {
  render() {
    return (
      <View style={{ paddingVertical: 10, backgroundColor: '#fff' }}>
        <FlatList
          style={myStyles.wrapper}
          data={[{}, {}]}
          renderItem={ListItem}
        />
      </View>
    );
  }
}

const myStyles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 6.25,
  },
  icon: {
    marginRight: 12,
    marginTop: -2,
  },
  infoContainer: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderColor: color.separator,
  },
  title: {
    fontSize: fontSize.s,
    lineHeight: 20,
  },
  actionWrapper: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 12,
  },
  createdAt: {
    fontSize: fontSize.xs,
    flex: 1,
    color: '#888',
    marginTop: 8,
    marginBottom: 12,
  },
  button: {
    flex: 1,
    height: 40,
    paddingVertical: 0,
    marginVertical: 0,
  },
  marginLeft: {
    marginLeft: 13,
  },
});

export default NotificationScreen;
