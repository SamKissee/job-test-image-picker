import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../../Components/Button';

export default function Home() {
  return (
    <View style={styles.wrapper}>
      <Text>Hello World</Text>
      <Button text={'Open Picker'} />
      <Text>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
