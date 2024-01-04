import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Back from '../../Component/Back/index.js';
import Style from './Style.js';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {RadioButton} from 'react-native-paper';
import Button from '../../Component/Button/index.js';
import { incrementItemQuantity,decrementItemQuantity } from '../../Component/Redux/CartSlice/CartSlice';

const Checkout = () => {
  const navigation = useNavigation();
  const [storedData, setStoredData] = useState(null);
  const [checked, setChecked] = React.useState('first');
  const totalPrice = useSelector(state => state.cart.totalPrice);
  console.log(totalPrice)
  const isFocused = useIsFocused();

  const gotopayment=(checked)=>{
    navigation.navigate('Payment',checked)
    console.log(checked)
  }

  const gotoadress = () => {
    navigation.navigate('Addressform');
  };
  const fetchData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('deliveryAddress');
      if (jsonValue !== null) {
        const data = JSON.parse(jsonValue);
        setStoredData(data);
        console.log('value of delivary address', data);
      }
    } catch (error) {
      console.error('Error retrieving address data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [isFocused]);

  return (
    <View style={{color: '#F2F2F2',flex:1}}>
      <View style={Style.Checkout}>
        <Back />
        <Text style={Style.label}>Checkout</Text>
      </View>
      <View>
        <Text style={Style.Payment}>Delivery</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
          justifyContent: 'space-between',
          width: '75%',
          alignItems: 'center',
          marginLeft: 33,
        }}>
        <Text style={{color: 'black', fontSize: 18}}>Address Detail</Text>
        <TouchableOpacity onPress={gotoadress}>
          <Text style={{color: '#FA4A0C', fontSize: 18}}>change</Text>
        </TouchableOpacity>
      </View>
      <View style={Style.container}>
        <View style={styles.container}>
          <Text style={styles.label}></Text>
          {storedData ? (
            <>
              <Text style={Style.name}>{storedData.name}</Text>
              <View style={Style.street}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 17,
                    marginTop: 10,
                    marginBottom: 10,
                  }}>
                  {storedData.address}
                </Text>
              </View>
              <Text style={{margin: 5, color: 'black', fontSize: 20}}>
                {storedData.Phone}
              </Text>
            </>
          ) : (
            <Text>No data found in AsyncStorage</Text>
          )}
        </View>
      </View>
      <View>
        <Text style={Style.delivery}>Delivery method</Text>
        <View style={Style.container}>
          <View style={{flexDirection:'row',marginTop:'10%'}}>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
            color="#F47B0A"
          />
          <Text style={{color:'black',fontSize:20,marginTop:10}}>Door delivery</Text>
          </View>
          <View style={{flexDirection:'row'}}>
          <RadioButton
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
            color="#F47B0A"          />
                    <Text style={{color:'black',fontSize:20,marginTop:10}}>Pick up</Text>

          </View>
        </View>
      </View>
      <View style={{position:'absolute',bottom:100,height:20,width:'80%',flexDirection:'row',justifyContent:'space-between',marginLeft:'9%'}}>
        <Text style={{fontSize:17,fontWeight:'bold',color:'black'}}>Total</Text>
        <Text style={{fontSize:27,fontWeight:'bold',color:'black'}}>{totalPrice}</Text>
      </View>
      <View style={{position:'absolute', bottom:10,marginLeft:'10%'}}>
        <Button title="Proceed to payment" onPress={()=>gotopayment(checked)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Checkout;
