import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';

import styles, { color } from '@projectName/src/styles';
import TouchableButton from '@projectName/components/TouchableButton';

class LoginScreen extends Component {
  state = {
    phoneNumber: '',
  };

  onChangeInput = (phoneNumber: string) => {
    this.setState({ phoneNumber });
  };

  onClickLogin = () => {};

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior="height"
          style={[styles.containerBgDark, myStyles.container]}
        >
          <Image
            source={require('https://dummyimage.com/100.png')}
            style={styles.BiilabsLogo}
          />
          <View style={myStyles.wrapper}>
            <View style={myStyles.header}>
              <Image
                style={styles.AppLogo}
                source={require('https://dummyimage.com/100.png')}
              />
              <Text style={myStyles.text}>All Digital Assets in Hand</Text>
            </View>
            <View>
              <TextInput
                placeholder="phone number"
                style={[styles.textInput, myStyles.textInput]}
                value={this.state.phoneNumber}
                onChangeText={this.onChangeInput}
                textContentType="telephoneNumber"
              />
            </View>
            <TouchableButton
              type="bgBlack"
              text="Login"
              onClick={this.onClickLogin}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const myStyles = StyleSheet.create({
  container: {
    backgroundColor: color.tealish,
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  wrapper: {
    marginBottom: 60,
  },
  header: {
    alignItems: 'center',
    marginBottom: 60,
  },
  text: {
    color: 'white',
  },
  title: {
    width: 108,
    marginBottom: -32,
  },
  textInput: {
    backgroundColor: '#fff',
    borderWidth: 0,
    marginBottom: 0,
  },
  touchIDView: {
    marginTop: 20,
    alignItems: 'center',
  },
  touchIDPrompts: {
    marginBottom: 8,
    color: color.whiteThree,
  },
  image: {
    marginTop: 8,
    width: 60,
    height: 60,
  },
  icon: {
    alignSelf: 'center',
  },
});

export default LoginScreen;
