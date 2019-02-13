import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  RegisteredStyle,
} from 'react-native';
import { fontSize, color } from '@biime/src/styles';

interface IProps {
  title: string | React.ReactNode;
  description?: string;
  onPress?: () => void;
  style?: RegisteredStyle<ViewStyle> | ViewStyle;
}
const FieldRow = (props: IProps) => {
  const Content = (
    <>
      {typeof props.title === 'string' ? (
        <Text style={styles.title}>{props.title}</Text>
      ) : (
        props.title
      )}
      <Text style={styles.description}>{props.description}</Text>
    </>
  );

  if (props.onPress) {
    return (
      <TouchableOpacity
        style={[styles.container, props.style]}
        onPress={props.onPress}
      >
        {Content}
      </TouchableOpacity>
    );
  }

  return <View style={[styles.container, props.style]}>{Content}</View>;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderColor: color.separator,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgb(188, 187, 193)',
    paddingBottom: 4,
    paddingTop: 12.5,
  },
  title: {
    width: '100%',
    color: 'rgba(0,0,0,0.5)',
    fontSize: fontSize.xs,
    paddingBottom: 8,
  },
  description: {
    color: '#000',
    fontSize: fontSize.s,
  },
});

export default FieldRow;
