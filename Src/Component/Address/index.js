import React, { useState } from 'react';
import { View, Text, TextInput,  StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import Button from '../Button';
const AddressForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [Phone, setPhone] = useState('');
  const [email,setemail]=useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const navigation = useNavigation();

  const selectImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setSelectedImage(image.path);
    });
  };

  const handleSaveAddress = async () => {
    try {
      const addressData = {
        name: name,
        address: address,
        Phone: Phone,
        email:email,
        imageUri: selectedImage, 
      };

      await AsyncStorage.setItem('deliveryAddress', JSON.stringify(addressData));
      navigation.goBack();

      console.log('Address data saved:', addressData);
    } catch (error) {
      console.error('Error saving address data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Address:</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
      />

      <Text style={styles.label}>Phone No.:</Text>
      <TextInput
        style={styles.input}
        value={Phone}
        onChangeText={setPhone}
      />
            <Text style={styles.label}>email.:</Text>

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setemail}
      />

      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />
      )}

        <Button title='Select Image' onPress={selectImage} />
      <View style={{ marginTop: 10 }}>
        <Button title="Save Address" onPress={handleSaveAddress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent:'center',
    backgroundColor:'#F5F5F8',
    flex:1
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    color:'#F47B04'
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderColor:'#F47B04'
  },
});

export default AddressForm;
