import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Style from './Style';
import LoginPage from '../../Component/Loginpage/index.js';
import Signin from '../../Component/SigninPage';
import Appimages from '../../Theme/Appimages';
import Appconstant from '../../Theme/Appconstant';

const Login = () => {
  const [currentPage, setCurrentPage] = useState('login');

  const handleLoginClick = () => {
    setCurrentPage('login');
  };

  const handleSigninClick = () => {
    setCurrentPage('signin');
  };

  return (
    <View>
      <View style={Style.container}>
        <Image
          style={Style.image}
          source={Appimages.cap}
        />
        <View
          style={{
            marginTop: 'auto',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={handleLoginClick}>
            <Text style={[Style.text]}>{Appconstant.Login}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSigninClick}>
            <Text style={Style.text1}>{Appconstant.Sign}</Text>
          </TouchableOpacity>
        </View>
        <View style={Style.border}>
          <View style={[currentPage === 'login' && Style.loginPage]}></View>
          <View style={[currentPage === 'signin' && Style.loginPage1]}></View>

        </View>
      </View>
      {currentPage === 'signin' && <Signin />}
      {currentPage === 'login' && <LoginPage />}

    </View>
  );
};

export default Login;
