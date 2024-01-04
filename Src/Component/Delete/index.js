import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Appimages from '../../Theme/Appimages';
import Iconions from 'react-native-vector-icons/Ionicons'
const Delete = ({ onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
      <Iconions
                name="trash-outline"
                size={24}
              />
      </TouchableOpacity>
    </View>
  );
};

export default Delete;
