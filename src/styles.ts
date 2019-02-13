import { StyleSheet, Dimensions } from 'react-native';

export const window = Dimensions.get('window');
export const containerPaddingHorizontal = 8;
export const defaultHeaderHeight = 64;
export const defaultTopTabHeight = 48;
export const defaultBottomTabHeight = 48.5;

export const color = {
  primary: '#007AFF',
  white: '#ffffff',
  black: '#000000',
  separator: 'rgb(188, 187, 193)',
};

export const fontSize = {
  l: 36,
  m: 22,
  s: 17,
};

export const shadow = {
  regular: {
    shadowOpacity: 0.4,
    shadowRadius: 4,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    elevation: 8,
  },
  large: {
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    elevation: 16,
  },
};

export default StyleSheet.create({
  containerBgDark: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: containerPaddingHorizontal,
    backgroundColor: color.black,
  },
  containerBgWhite: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: containerPaddingHorizontal,
    backgroundColor: color.white,
  },
});
