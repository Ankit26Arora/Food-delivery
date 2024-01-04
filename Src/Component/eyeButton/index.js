import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const EyeButton = ({ isPasswordVisible, togglePasswordVisibility, handlePassChange }) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.9}
        style={{ position: 'absolute', marginLeft: '85%', marginTop: -40 }}
        onPress={() => {
          togglePasswordVisibility();
          handlePassChange
        }}
      >
        {!isPasswordVisible ? (
          <Icon name="eye-off" size={25} color="#FA4A0C" />
        ) : (
          <Icon name="eye" size={25} color="#FA4A0C" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default EyeButton;
