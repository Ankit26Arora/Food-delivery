import {View, Text, Image} from 'react-native';
import React from 'react';
import Style from './Style';

import {useNavigation} from '@react-navigation/native';
import Appimages from '../../Theme/Appimages';
import Button from '../../Component/Button/index.js';
import Appconstant from '../../Theme/Appconstant';

const First = () => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={Style.container}>
      <View style={Style.round}>
        <Image style={{height: 60, width: 60}} source={Appimages.cap} />
      </View>
      <Text style={Style.text}>{Appconstant.Food}</Text>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{
            height: 320,
            width: 200,
            resizeMode: 'contain',
            transform: [{rotate: '0deg'}],
            marginTop: 100,
            marginLeft: 'auto',
          }}
          source={Appimages.Toy}
        />
        <Image
          style={{
            height: 420,
            width: 250,
            resizeMode: 'contain',
            transform: [{rotate: '0deg'}],
            position: 'absolute',
          }}
          source={Appimages.Toy2}
        />
      </View>
      <Button title="Get Started" onPress={handleNavigation} />
    </View>
  );
};

export default First;
