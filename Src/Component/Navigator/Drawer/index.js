import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Appimages from '../../../Theme/Appimages';
import {useNavigation} from '@react-navigation/native';
import Profile from '../../Profile';
import {Cart, Offer} from '../../../Screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ToastProvider, useToast} from 'react-native-toast-notifications';

const Drawer = () => {
  const toast = useToast();

  const navigation = useNavigation();
  const gotologin = () => {
    navigation.navigate('Login');
  };
  const handletoast = () => {
    toast.show('Sign out', {
      type: 'warning',

      placement: 'top',
      duration: 1000,
    });
  };
  return (
    <View
      style={styles.container}
      options={{
        BottomTab: false,
      }}>
      <View style={{}}>
        <View>
          <MenuItem
            text="Profile"
            imageSource={Appimages.Profile}
            destinationScreen={Profile}
            navigation={navigation}
          />
          <MenuItem
            text="Orders"
            imageSource={Appimages.Order}
            destinationScreen={Cart}
            navigation={navigation}
          />
          <MenuItem
            text="Offer and promo"
            imageSource={Appimages.Offer}
            destinationScreen={Offer}
            navigation={navigation}
          />
          <MenuItem text="Privacy policy" imageSource={Appimages.Privacy} />
          <MenuItem text="Security" imageSource={Appimages.Security} />
        </View>
        <View style={{flexDirection: 'row', marginTop: 200}}>
          <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => {
    gotologin();
    handletoast(); 
  }}>
            <Text style={styles.sign}>Sign-out</Text>
            <Ionicons name="arrow-forward-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const MenuItem = ({text, imageSource, destinationScreen, navigation}) => {
  const handlePress = () => {
    navigation.navigate(destinationScreen);
  };
  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.menu}>
          <Image style={styles.image} source={imageSource} />
          <Text style={styles.drawerItem}>{text}</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: 'white',
              height: 0.9,
              width: '70%',
            }}></View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#FA4A0C',
    alignContent: 'center',
    justifyContent: 'center',
  },
  drawerItem: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  },
  menu: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 15,
  },
  image: {
    height: 30,
    width: 30,
  },
  sign: {
    color: 'white',
    fontSize: 20,
    marginLeft: 20,
  },
  view: {
    color: 'white',
    height: 1,
    width: 80,
  },
});

export default Drawer;
