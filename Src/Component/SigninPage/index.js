import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import Style from './Style';
import Button from '../Button/index.js';
import Appconstant from '../../Theme/Appconstant';
import EyeButton from '../eyeButton/index.js';

const Signin = () => {
  const [pass, setPass] = useState('');
  const [cpass, setcPass] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isCPasswordVisible, setCPasswordVisible] = useState(false);

  const handlePassChange = (text) => {
    setPass(text);
  };

  const handleCpassChange = (text) => {
    setcPass(text);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const toggleCPasswordVisibility = () => {
    setCPasswordVisible(!isCPasswordVisible);
  };

  return (
    <View>
      <View style={Style.container}>
        {/* Name */}
        <Text style={Style.email}>{Appconstant.Name}</Text>
        <TextInput
          placeholder={Appconstant.NameField}
          placeholderTextColor="black"
          style={{
            borderBottomWidth: 1,
            fontSize: 17,
            color: 'black',
          }}
        />
        {/* Email */}
        <Text style={Style.email}>{Appconstant.email}</Text>
        <TextInput
          placeholder={Appconstant.Email}
          placeholderTextColor="black"
          style={{
            borderBottomWidth: 1,
            fontSize: 17,
            color: 'black',
          }}
        />
        {/* Password */}
        <Text style={Style.email}>{Appconstant.pass}</Text>
        <View>
          <TextInput
            placeholder={Appconstant.Password}
            placeholderTextColor="black"
            secureTextEntry={!isPasswordVisible}
            value={pass}
            style={{
              borderBottomWidth: 1,
              fontSize: 17,
              color: 'black',
            }}
            onChangeText={handlePassChange}
          />
          <EyeButton
            isPasswordVisible={isPasswordVisible}
            togglePasswordVisibility={togglePasswordVisibility}
          />
        </View>
        {/* Confirm Password */}
        <Text style={Style.email}>{Appconstant.Cpass}</Text>
        <View>
          <TextInput
            placeholder={Appconstant.Cpassword}
            placeholderTextColor="black"
            secureTextEntry={!isCPasswordVisible}
            value={cpass}
            style={{
              borderBottomWidth: 1,
              fontSize: 17,
              color: 'black',
            }}
            onChangeText={handleCpassChange}
          />
          <EyeButton
            isPasswordVisible={isCPasswordVisible}
            togglePasswordVisibility={toggleCPasswordVisibility}
          />
        </View>
      </View>
      <Button title="Sign in" />
    </View>
  );
};

export default Signin;
