import React from 'react';
import { View, StyleSheet, Text, Modal } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { color, fontSize } from '@projectName/src/styles';
import TouchableButton from '@projectName/src/components/TouchableButton';

interface IProps {
  title: string;
  content: React.ReactNode;
  leftButtonText?: string;
  rightButtonText?: string;
  onLeftButtonPress?: () => void;
  onRightButtonPress?: () => void;
}

const ConfirmModal: React.FunctionComponent<IProps> = ({
  title,
  content,
  leftButtonText,
  rightButtonText,
  onLeftButtonPress,
  onRightButtonPress,
}) => (
  <Modal animationType="slide" transparent={true}>
    <View style={myStyles.modalContainer}>
      <View style={myStyles.card}>
        <Icon
          size={52}
          color={color.charcoalGrey}
          name="info"
          style={myStyles.icon}
        />
        <Text style={myStyles.title}>{title}</Text>
        <Text style={myStyles.desc}>{content}</Text>
        <View style={myStyles.buttonGroup}>
          {leftButtonText && onLeftButtonPress && (
            <TouchableButton
              style={myStyles.btn}
              text={leftButtonText}
              onClick={onLeftButtonPress}
            />
          )}
          {rightButtonText && onRightButtonPress && (
            <TouchableButton
              style={[myStyles.btn, myStyles.btnPrimary]}
              textStyle={myStyles.btnPrimaryText}
              type="primary"
              text={rightButtonText}
              onClick={onRightButtonPress}
            />
          )}
        </View>
      </View>
    </View>
  </Modal>
);

const myStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 36,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  card: {
    backgroundColor: color.tealish,
    paddingTop: 36,
    borderRadius: 8,
    overflow: 'hidden',
  },
  buttonGroup: {
    flexDirection: 'row',
  },
  btn: {
    flex: 1,
    marginBottom: -1,
    marginVertical: 0,
    marginHorizontal: 0,
    backgroundColor: color.whiteThree,
    borderRadius: 0,
  },
  btnPrimary: {
    borderLeftWidth: 0.5,
    borderLeftColor: color.separator,
  },
  btnPrimaryText: {
    color: color.tealish,
  },
  title: {
    textAlign: 'center',
    fontSize: fontSize.m,
    marginBottom: 4,
    fontWeight: '700',
  },
  desc: {
    fontSize: fontSize.s,
    marginBottom: 32,
    marginHorizontal: 16,
    textAlign: 'center',
  },
  icon: {
    marginHorizontal: 'auto',
    width: '100%',
    alignItems: 'center',
    marginBottom: 8,
  },
});

export default ConfirmModal;
