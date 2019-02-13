import React from 'react';
import {
  Text,
  TouchableOpacity,
  ActivityIndicator,
  GestureResponderEvent,
  StyleSheet,
  View,
} from 'react-native';
import { color, fontSize } from '@biime/src/styles';

type BtnType =
  | 'default'
  | 'primary'
  | 'inverted'
  | 'bgBlack'
  | 'bgWhite'
  | 'disable'
  | 'text';
interface IProps {
  onClick: (event: GestureResponderEvent) => void;
  text: string;
  style?: any;
  textStyle?: any;
  isLoading?: boolean;
  type?: BtnType;
}

const TouchableButton = ({
  onClick,
  text,
  isLoading,
  style,
  textStyle,
  type = 'default',
}: IProps) => {
  if (type === 'disable') {
    return (
      <View style={style}>
        <Text style={[textStyles.base, textStyles[type], textStyle]}>
          {text}
        </Text>
      </View>
    );
  }
  return (
    <TouchableOpacity
      onPress={onClick}
      style={[styles.button, styles[type], style]}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={[textStyles.base, textStyles[type], textStyle]}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
    paddingVertical: 12,
    height: 50,
  },
  default: {
    backgroundColor: '#FBE7CF',
  },
  primary: {
    backgroundColor: color.tealish,
  },
  inverted: {
    borderColor: '#999',
    borderWidth: 1,
    backgroundColor: 'transparent',
  },
  bgBlack: {
    backgroundColor: color.charcoalGrey,
  },
  bgWhite: {
    backgroundColor: color.whiteThree,
  },
  disable: {},
  text: {
    backgroundColor: 'transparent',
  },
});

const textStyles = StyleSheet.create({
  base: {
    fontSize: fontSize.m,
    fontWeight: '600',
    textAlign: 'center',
  },
  default: {
    color: '#EF9039',
  },
  primary: {
    color: '#fff',
  },
  inverted: {
    color: '#999',
    fontWeight: '400',
  },
  bgBlack: {
    color: 'white',
  },
  bgWhite: {
    color: 'black',
  },
  disable: {
    color: color.white,
  },
  text: {
    color: color.tealish,
  },
});

export default TouchableButton;
