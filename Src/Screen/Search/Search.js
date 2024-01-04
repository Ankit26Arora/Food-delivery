import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import food from '../../Theme/FoodProduct';
import drinks from '../../Theme/Drink';
import snacks from '../../Theme/snack';
import SerchComponent from '../../Component/Search';
import Appimages from '../../Theme/Appimages';
import Appconstant from '../../Theme/Appconstant';
import Style from './Style';
import {useNavigation} from '@react-navigation/native';
import Button from '../../Component/Button/index.js';

const Search = ({route}) => {
  const navigation = useNavigation();
  const {search} = route.params;
  const combinedData = [...food, ...drinks, ...snacks];
  const [searchResults, setSearchResults] = useState([]);
  const handle = item => {
    navigation.navigate('Detail', {item: item});
  };
  useEffect(() => {
    const filteredData = combinedData.filter(item => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });
    setSearchResults(filteredData);
  }, [search]);

  const renderFoodItem = ({item, index}) => (
    <View>
      <TouchableOpacity
        onPress={() => {
          handle(item);
        }}>
        <View
          style={[
            Style.show,
            {marginTop: index % 2 === 0 ? 60 : 110},
            {marginLeft: index % 2 === 0 ? 20 : 20},
          ]}>
          <Image style={Style.image} source={item.image[0]} />
          <Text style={Style.item}>{item.name}</Text>
          <Text style={Style.price}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  const productCount = searchResults.length;

  return (
    <View>
      <SerchComponent search={search} />
      {productCount > 0 ? (
        <View style={Style.container}>
          <View style={{alignItems: 'center'}}>
            <Text style={Style.text}>Found {productCount} results</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <FlatList
              contentContainerStyle={{paddingBottom: 150}}
              data={searchResults}
              renderItem={renderFoodItem}
              keyExtractor={item => item.name}
              numColumns={2}
            />
          </View>
        </View>
      ) : (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 200,
          }}>
          <Image style={{height: 122, width: 122}} source={Appimages.Search} />
          <Text style={{fontSize: 27, color: 'black'}}>Item not found</Text>
          <Text style={{color: 'black', fontSize: 17}}>{Appconstant.Item}</Text>
          <View style={{marginTop: 280, marginRight: 20}}>
            <Button title={'Start Ordering'} />
          </View>
        </View>
      )}
    </View>
  );
};

export default Search;
