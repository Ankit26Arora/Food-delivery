import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SwipeListView} from 'react-native-swipe-list-view';
import Style from './Style';
import Delete from '../../Component/Delete/index.js';
import {removeItemFromFavourite} from '../../Component/Redux/Favouriteslice/Favourite';
const FavoriteScreen = () => {
  const data = useSelector(state => state.favorite.items);

  const dispatch = useDispatch();
  console.log(data, 'datadata');
  const handleRemovetofavourite = itemid => {
    dispatch(removeItemFromFavourite(itemid));
    console.log('item is deleted success', itemid);
  };

  const renderFoodItem = ({item}) => (
    <View style={{alignItems: 'center'}}>
      <View style={Style.items}>
        <Image style={Style.productImage} source={item.image[1]} />

        <Text style={Style.item}>{item.name}</Text>
      </View>
    </View>
  );
  return (
    <View>
      <View style={Style.heading}>
        <Text style={Style.Text}>Favorite items</Text>
        <View style={{backgroundColor: '#F5F5F8', alignItems: 'center'}}></View>
      </View>
      <SwipeListView
        data={data}
        renderItem={renderFoodItem}
        keyExtractor={item => item.id}
        leftOpenValue={70}
        stopLeftSwipe={70}
        renderHiddenItem={({item}) => (
          <View style={Style.removefav}>
            <View style={Style.button}></View>
            <View style={Style.Like}>
              <Delete onPress={() => handleRemovetofavourite(item.id)} />
            </View>
          </View>
        )}

      />
    </View>
  );
};

export default FavoriteScreen;
