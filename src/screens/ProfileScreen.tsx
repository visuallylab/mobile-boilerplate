import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import styles, { color } from '@projectName/src/styles';
import FieldRow from '@projectName/components/FieldRow';

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={myStyles.layout}>
        <ScrollView style={myStyles.scrollView}>
          <View style={myStyles.infoContainer}>
            <View style={myStyles.sectionTitleWrapper}>
              <Text style={[styles.h2, myStyles.sectionTitle]}>Account</Text>
            </View>
            <View>
              <FieldRow
                title="User Name："
                description="Alexander"
                onPress={() => {}}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const myStyles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: color.whiteTwo,
  },
  scrollView: {
    backgroundColor: color.whiteTwo,
    paddingTop: 20,
    flex: 1,
  },
  infoContainer: {
    borderRadius: 5,
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  sectionTitleWrapper: {
    marginBottom: 20,
  },
  sectionTitle: {
    textAlign: 'left',
    margin: 0,
  },
});

export default ProfileScreen;
