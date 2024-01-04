import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
  Image,
} from 'react-native';
import Back from '../../Component/Back/index.js';
import Style from '../Checkout/Style.js';
import {RadioButton} from 'react-native-paper';
import Button from '../../Component/Button/index.js';
import Appimages from '../../Theme/Appimages.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native'
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ToastProvider, useToast} from 'react-native-toast-notifications';

const Payment = () => {
  const cartItems = useSelector(state => state.cart.items);
  console.log("data in payment",cartItems)
  const navigation=useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const toast = useToast();
  const handletoast=()=>{
    toast.show('Item Order successfully', {
      type: 'success',
     
      placement: 'top', 
      duration:1000
    });
  }
 
  const [checked, setChecked] = useState('first');
  const handleProceedToPayment = () => {
    if (checked === 'first') {
      setModalVisible(true);
    } else {
    }
  };
  const cancel=()=>{
    navigation.goBack();

  }
  const Proceed= async(cartItems)=>{
      try {
        const existingData = await AsyncStorage.getItem('otherData');
        const dataArray = existingData ? JSON.parse(existingData) : [];
  
        dataArray.push(cartItems);
        navigation.navigate("Product")
  
        await AsyncStorage.setItem('otherData', JSON.stringify(dataArray));
  
        console.log('Data saved:', dataArray);
      } catch (error) {
        console.error('Error saving data:', error);
      }
    };
  
  return (
    <View style={{height: '100%',}}>
      <View style={{flexDirection: 'row', margin: 20}}>
        <Back />
        <Text style={Style.label}>Checkout</Text>
      </View>
      <View>
        <Text style={Style.Payment}>Payment</Text>
      </View>
      <View style={{margin: '8%'}}>
        <Text style={{color: 'black', fontSize: 18}}>Payment</Text>
      </View>
      <View style={Style.container}>
        <View style={{flexDirection: 'row', marginTop: '10%'}}>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
            color="#F47B0A"
          />
          <View
            style={{
              height: 40,
              width: 40,
              backgroundColor: '#F47B0A',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={Appimages.Bank} style={{width: 16, height: 16}} />
          </View>
          <Text style={{color: 'black', fontSize: 20, marginTop: 10}}>
            Card
          </Text>
        </View>
        <View style={{alignItems: 'center', marginTop: '3%'}}>
          <View
            style={{height: 1, backgroundColor: 'black', width: '80%'}}></View>
        </View>
        <View style={{marginTop: '4%'}}>
          <View style={{flexDirection: 'row'}}>
            <RadioButton
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('second')}
              color="#F47B0A"
            />
            <View
              style={{
                height: 40,
                width: 40,
                backgroundColor: '#EB4796',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Ionicons name="wallet-outline" color="white" size={16} />
            </View>
            <Text style={{color: 'black', fontSize: 20, marginTop: 10}}>
              Cash on Delivery
            </Text>
          </View>
        </View>
      </View>
      <View style={{width:'100%',}}>
        <Modal 
        visible={modalVisible}
        animationType="fade"
        transparent={true}


        >
          {checked === 'first' && (
            <View style={Style.modal}>
              <View style={{height:'18%',backgroundColor:'#EDEDED',borderTopLeftRadius:30,borderTopRightRadius:30,justifyContent:'center',top:1,width:'100%'}}>
                <Text style={{color:'black',fontSize:30,marginLeft:'10%'}}>Plese note</Text>
              </View>
              <View style={{marginTop:20}}>
                <Text style={{marginLeft:'15%',fontSize:15}}>Delivery to Mainland</Text>
                <Text style={{marginLeft:'14%',color:'black',fontSize:17,borderBottomWidth:1,width:'70%',marginTop:15}}> N1000 - N2000</Text>
                <Text style={{marginLeft:'15%',fontSize:15,marginTop:20}}>Delivery to Mainland</Text>
                <Text style={{marginLeft:'14%',color:'black',fontSize:17}}> N1000 - N2000</Text>
              </View>
              <View style={{position:'absolute',height:'20%',width:'100%',bottom:40,alignItems:'center',flexDirection:'row',justifyContent:'space-evenly'}}>
                <TouchableOpacity onPress={cancel}>
                  <Text style={{fontSize:17,color:'black'}}>cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'red',width:'40%',height:'60%',justifyContent:'center',alignItems:'center'}} 
                  onPress={() => {
                    Proceed(cartItems);
                    handletoast(); 
                  }}
                >
                  <Text style={{color:'white',fontWeight:"bold",fontSize:17}}>Proceed</Text>
                </TouchableOpacity>

              </View>
            </View>
          )}
        </Modal>
      </View>
      <View style={{position: 'absolute', bottom: 10, marginLeft: '9%'}}>
        <Button title="Proceed to payment" onPress={handleProceedToPayment} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    marginTop: '5%',
  },
  payButton: {
    backgroundColor: 'green',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
  },
  payButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Payment;
