import { View, TextInput ,Text} from 'react-native';
import React, { useState } from 'react';
import Back from '../Back/index.js';
import {useNavigation} from '@react-navigation/native'
const SerchComponent = ({ search }) => {
  const navigation = useNavigation();



  return (
    <View style={Style.container}>
      <Back />
      <Text style={Style.text}>{search }</Text>
    </View>
  );
};

const Style = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingTop: 10,


  },
  text:{
    color:'black',
    marginLeft:20,
    fontSize:25
  }

};

export default SerchComponent;
