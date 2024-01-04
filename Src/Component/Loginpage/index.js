import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Button from '../Button/index.js';
import Appconstant from '../../Theme/Appconstant.js';
import Icon from 'react-native-vector-icons/Ionicons';
import EyeButton from '../eyeButton/index.js';

const LoginPage = () => {
  const [iscPasswordVisible, setispasswordvisible] = useState(false);
  const [pass, setpass] = useState();

  const navigation = useNavigation();
  
  const handlebutton = () => {
    console.log("sucess")
    navigation.navigate('Bottomtab');
    
  }

  const togglecPasswordVisibility = () => {
    setispasswordvisible(!iscPasswordVisible);
  };

  return (
    <View style={{marginTop: 40}}>
      <View style={{paddingLeft: 50, paddingRight: 50}}>
        <Text>{Appconstant.email}</Text>
        <TextInput
          placeholder={Appconstant.Email}
          placeholderTextColor="black"
          style={{
            borderBottomWidth: 1,
            fontSize: 20,
            color: 'black',
          }}
        />
        <Text style={{paddingTop: 20}}>{Appconstant.pass}</Text>
        <View>
          <TextInput
            placeholder={Appconstant.Password}
            placeholderTextColor="black"
            secureTextEntry={!iscPasswordVisible}
            value={pass}
            style={{
              borderBottomWidth: 1,
              fontSize: 20,
              color: 'black',
            }}
          />
          <EyeButton
            isPasswordVisible={iscPasswordVisible}
            togglePasswordVisibility={togglecPasswordVisibility}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Text style={{paddingTop: 20, color: '#FA4A0C', fontSize: 17}}>
              {Appconstant.Forget}
            </Text>
          </TouchableOpacity>
          
        </View>
      </View>
      <View style={{paddingTop: 70}}>
        <Button title="Login" onPress={handlebutton} />
      </View>
    </View>
  );
};

export default LoginPage;
