import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Back from '../Back/index.js';
import Style from './Style.js';
import {useNavigation} from '@react-navigation/native';
import ProfileButton from '../ProfileButton/index.js';
import Button from '../Button/index.js';
const Profile = () => {
  const navigation = useNavigation();
  const [addressData, setAddressData] = useState(null);
  const gotoaddress = () => {
    navigation.navigate('Addressform');
  };
  const gotocart=()=>{
    navigation.navigate('Cart')
  }
  const gotohelp=()=>{
    navigation.navigate("Help")
  }
  useEffect(() => {
    const fetchAddressData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('deliveryAddress');
        if (jsonValue !== null) {
          const data = JSON.parse(jsonValue);
          setAddressData(data);
          console.log(data);
        }
      } catch (error) {
        console.error('Error retrieving address data:', error);
      }
    };
    fetchAddressData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={Style.container}>
        <Back />
        <View>
          <Text style={Style.Text}>My Profile</Text>
        </View>

        <View
          style={{
            marginTop: '1%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={Style.personal}>Personal details</Text>
          <TouchableOpacity onPress={gotoaddress}>
            <Text style={{color: '#FA4A0C', fontSize: 15}}>change </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: '6%',
            justifyContent:'space-between',
            backgroundColor: 'white',
          }}>
          <View
            style={{
              marginTop: '4%',
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor: 'white',
              width: '80%',
              marginBottom: '4%',
            }}>
            {addressData ? (
              <>
                {addressData.imageUri && (
                  <Image
                    source={{uri: addressData.imageUri}}
                    style={styles.image}
                  />
                )}
                <View style={{marginLeft: '3%'}}>
                  <Text style={Style.name}>{addressData.name}</Text>
                  <Text style={Style.name}>{addressData.email}</Text>

                  <Text style={Style.address}>{addressData.address}</Text>
                  <Text style={Style.address}> {addressData.Phone}</Text>
                </View>
              </>
            ) : (
              <Text>No data found in AsyncStorage</Text>
            )}
          </View>
        </View>
        <ProfileButton title="Orders" onPress={gotocart}/>
        <ProfileButton title="Pending reviews" />

        <ProfileButton title="Faq" onPress={gotohelp}  />

        <ProfileButton title="Help" onPress={gotohelp} />
        
      </View>
      <View style={{marginTop:'20%'}} >
          <Button title="Update"  />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default Profile;
