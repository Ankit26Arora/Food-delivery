import React, {useEffect} from 'react';
import {View, Image, Text, ScrollView, SafeAreaView} from 'react-native';
import Appimages from '../../Theme/Appimages';
import Style from './Style';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToCart} from '../../Component/Redux/CartSlice/CartSlice';
import Addto from '../../Component/Addtofavourite/index.js';
import {addToFavorites} from '../../Component/Redux/Favouriteslice/Favourite';
import Swiper from 'react-native-swiper';
import Back from '../../Component/Back/index.js';
import Button from '../../Component/Button/index.js';
import {ToastProvider, useToast} from 'react-native-toast-notifications';
const Detail = ({route}) => {
  const navigation = useNavigation();
  // const isfav = useSelector(state => state.favorite.items.find(favitem => favitem.name === item.name));


  const {item} = route.params;
  const toast = useToast();
  const handletoast=()=>{
    toast.show('Item added to cart successfully', {
      type: 'success',
     
      placement: 'bottom', 
      duration:1000
    });
  }
  const handle = () => {
    console.log("helloooooo")
    toast.show('Item added to Favourite successfully', {
      type: 'success',
      placement: 'top',
      duration: 1000
    });
  };
  
  console.log(item.name);
  const {name, price, image, description} = item;

  const dispatch = useDispatch();

  const handleAddToCart = item => {
    dispatch(addItemToCart(item));
    console.log('Success', item);
    navigation.navigate('Cart');


  };

  const handleAddToFavourite = item => {
    dispatch(addToFavorites(item));
    console.log('hello', item);
  }; 


  useEffect(() => {
    console.log(item);
  }, []);

  return (
      <SafeAreaView style={{flex: 1}}>
        <View style={Style.header}>
          <Back />
          <Addto  onPress={() => {
    handleAddToFavourite(item);
    handle(); 
  }} />
        </View>
        <ScrollView
          style={{flexGrow: 1, paddingVertical: 20, paddingHorizontal: 10}}>
          <View style={Style.swiperContainer}>
            <Swiper style={Style.swiper} activeDotColor="#FA4A0C" autoplay>
              {image.map((img, index) => (
                <View key={index} style={Style.slide}>
                  <Image style={Style.image} source={img} />
                </View>
              ))}
            </Swiper>
          </View>

          <View style={{alignItems: 'center'}}>
            <Text style={Style.name}>{name}</Text>
            <Text style={Style.price}>{price}</Text>
          </View>
          <View style={{marginLeft: 30, marginTop: 20}}>
            <Text style={Style.des}>Delivery</Text>
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                width: '90%',
                marginTop: 10,
              }}>
              Delivered between monday aug and thursday 20 from 8pm to 91:32 pm
            </Text>
            <Text style={[Style.dese]}>Description</Text>
            <Text style={Style.description}>{description}</Text>
            <Text style={[Style.dese]}>Return Policy</Text>
            <Text style={Style.description}>
              All our foods are double checked before leaving our stores so by
              any case you found a broken food please contact our hotline
              immediately.
            </Text>
          </View>
          <View style={{marginTop: 10, marginBottom: 30}}>
          <Button
  title="Add to cart"
  onPress={() => {
    handleAddToCart(item);
    handletoast(); 
  }}
/>
          </View>
        </ScrollView>
      </SafeAreaView>
  );
};

export default Detail;
