import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Back from '../../Component/Back/index.js';
import Style from './Style';
import Appimages from '../../Theme/Appimages';
import Addto from '../../Component/Addtofavourite/index.js';
import Button from '../../Component/Button/index.js';
import {SwipeListView} from 'react-native-swipe-list-view';
import Delete from '../../Component/Delete/index.js';
import Iconions from 'react-native-vector-icons/Ionicons';
import {addToFavorites} from '../../Component/Redux/Favouriteslice/Favourite';
import {removeItemFromCart} from '../../Component/Redux/CartSlice/CartSlice';
import {useToast} from 'react-native-toast-notifications';
import {useNavigation} from '@react-navigation/native';
import {
  incrementItemQuantity,
  decrementItemQuantity,
} from '../../Component/Redux/CartSlice/CartSlice';
const Cart = () => {

  const [visible, setvisible] = useState(false);
  const navigation = useNavigation();
  const cartItems = useSelector(state => state.cart.items);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  console.log('hello this is cart page', totalPrice);
  const toast = useToast();
  console.log('data in cartItems ==>', cartItems);
  const dispatch = useDispatch();

  const handleRemovetocart = itemid => {
    dispatch(removeItemFromCart(itemid));
    console.log('item is deleted success', itemid);
  };
  const handleAddToFavourite = item => {
    dispatch(addToFavorites(item));
    console.log('hello ankit', item.name);
  };

  const showtoast = () => {
    toast.show('Item added to favourite successfully', {
      type: 'success',

      placement: 'top',
      duration: 1000,
    });
  };
  const gotocheckout = () => {
    console.log('hello');
    navigation.navigate('Checkout');
  };
  const renderItem = ({item}) => (
    <View style={Style.cartproducts}>
      <Image style={Style.productImage} source={item.image[1]} />
      <View>
        <Text style={Style.ProductName}>{item.name}</Text>
        <Text style={Style.productPrice}>{item.price}</Text>
        <View style={Style.Add}>
          <TouchableOpacity
            style={Style.touch}
            onPress={() => dispatch(decrementItemQuantity(item.id))}>
            <Iconions name="remove-outline" size={24} color="white" />
          </TouchableOpacity>
          <View style={Style.touch}>
            <Text style={{color: 'white', fontSize: 20}}>{item.quantity}</Text>
          </View>
          <TouchableOpacity
            style={Style.touch}
            onPress={() => dispatch(incrementItemQuantity(item.id))}>
            <Iconions name="add-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <View style={Style.container}>
        <Back />
        <Text style={Style.cart}>Cart</Text>
      </View>
      <View>
        <Image style={Style.Swipeitem} source={Appimages.Swipe} />
      </View>
      <SwipeListView
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        rightOpenValue={-125}
        stopRightSwipe={-125}
        renderHiddenItem={({item}) => (
          <View style={Style.Right}>
            <View style={Style.Like}>
              <Addto
                onPress={() => {
                  handleAddToFavourite(item);
                  showtoast();
                }}
              />
            </View>
            <View style={Style.Like}>
              <Delete onPress={() => handleRemovetocart(item.id)} />
            </View>
          </View>
        )}
      />
     <View style={{alignItems: 'center'}}>
  {totalPrice > 0 ? (
    <View
      style={{
        position: 'absolute',
        bottom: 100,
        height: 40,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:'white',
        alignItems:'center'

      }}>
      <Text style={{fontSize: 17, fontWeight: 'bold', color: 'black'}}>
        Total
      </Text>
      <Text style={{fontSize: 27, fontWeight: 'bold', color: 'black'}}>
        {totalPrice}
      </Text>
    </View>
  ) : null}
</View>

      <View style={{alignItems: 'center'}}>
        <View style={{position: 'absolute', bottom: 10}}>
          <Button title={'Complete order'} onPress={() => gotocheckout()} />
        </View>
      </View>
    </View>
  );
};

export default Cart;
