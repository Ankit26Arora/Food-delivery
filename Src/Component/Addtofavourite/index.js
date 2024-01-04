import { View, Image, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import Appimages from '../../Theme/Appimages';

const Addto = ({ onPress }) => {


  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={{ height: 24, width: 24 }}
          source={Appimages.Heart}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Addto;