import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { fontSize } from '@biime/src/styles';

interface IProps {
  title: string;
  children: React.ReactNode;
}

const Section = (props: IProps) => {
  return (
    <View style={myStyles.container}>
      <View style={myStyles.titleWrapper}>
        <Text style={myStyles.title}>{props.title}</Text>
      </View>
      <View style={myStyles.content}>{props.children}</View>
    </View>
  );
};

const myStyles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: '#fff',
    padding: 10,
  },
  titleWrapper: {
    borderBottomColor: '#777',
    borderBottomWidth: 1,
    paddingBottom: 3,
    marginBottom: 20,
    height: 25,
  },
  title: {
    fontSize: fontSize.m,
    textAlign: 'center',
  },
  content: {
    paddingHorizontal: 10,
    minHeight: 150,
  },
});

export default Section;
