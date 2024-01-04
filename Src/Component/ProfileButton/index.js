import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';
import React from 'react';
import Appimages from '../../Theme/Appimages';

const ProfileButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={[
        styles.button,
      ]}
    >
      <Text
        style={[
          styles.text,
        ]}
      >
        {title}
      </Text>
      <Image source={Appimages.go} style={{height:24,width:24,marginRight:'3%'}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 60,
    borderRadius: 20,
    backgroundColor:'white',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:'10%'

  },
  text: {
    fontSize: 17,
    color:'black',  
    marginLeft:'3%',
    fontWeight:'bold'


  },
});

export default ProfileButton;