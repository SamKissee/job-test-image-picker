import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },
  icon: {
    resizeMode: 'contain',
    justifyContent: 'center',
    height: 30,
  },
  inner: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
});

const Button = ({onPress, text = ''}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.inner}>
        <Text style={styles.buttonText}>{text.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  icon: PropTypes.number,
};

export default Button;
