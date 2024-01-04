import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const Button = ({ title, onPress }) => {
  return (
    <View style={{alignItems:'center'}}>
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor: title === 'Get Started' ? 'white' : '#FA4A0C' },
      ]}
    >
      <Text
        style={[
          styles.text,
          { color: title === 'Get Started' ? '#FA4A0C' : 'white' },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems:'center'
  },
  text: {
    textAlign: 'center',
    color: '#FF460A',
    fontSize: 17,
  },
});

export default Button;