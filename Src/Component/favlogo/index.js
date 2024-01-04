import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Love = () => {
  const cartItems = useSelector(state => state.cart.items.length); 
  const navigation = useNavigation();

  const openAddToCart = () => {
    navigation.navigate('Cart');
  };

  return (
    <View style={{ alignItems: 'flex-end' }}>
      {cartItems > 0 ? (
        <View style={{ position: 'absolute', backgroundColor: 'red', borderRadius: 10, top: -5, right: -5, padding: 3 }}>
          <Text style={{ color: 'white', fontSize: 10 }}>{cartItems}</Text>
        </View>
      ) : null}
      <TouchableOpacity onPress={openAddToCart}>
        <Icon
          style={{ height: 30, width: 30, marginLeft: 200 }}
          name={cartItems > 0 ? 'cart-sharp' : 'cart-outline'}
          size={30}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Love;
