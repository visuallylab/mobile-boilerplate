import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface IProps {
  onCheck: () => void;
  isChecked?: boolean;
  size?: number;
}

const SIZE = 20;

const CheckBox = (props: IProps) => (
  <TouchableOpacity onPress={props.onCheck}>
    {props.isChecked ? (
      <Icon size={props.size || SIZE} name="check-box" />
    ) : (
      <Icon size={props.size || SIZE} name="check-box-outline-blank" />
    )}
  </TouchableOpacity>
);

export default CheckBox;
