import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Style from './Style';
import Appimages from '../../Theme/Appimages';
import Appconstant from '../../Theme/Appconstant';

import {useNavigation} from '@react-navigation/native';
import Love from '../../Component/favlogo';
import food from '../../Theme/FoodProduct';
import snacks from '../../Theme/snack';
import drinks from '../../Theme/Drink';

const Product = () => {
  const [currentPage, setCurrentPage] = useState('Food');
  const [search, setsearch] = useState();
  const navigation = useNavigation();
  const handle = item => {
    navigation.navigate('Detail', {item: item});
    console.log("data is found",item)
  };
  const handleSearch = () => {
    navigation.navigate('Search', {search: search});
    console.log('data is Search=>', search);
  };

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItems, setSelectedItems] = useState(food);

  const handleCategoryClick = category => {
    setSelectedCategory(category);
    switch (category) {
      case 'Snacks':
        setSelectedItems(snacks);
        setCurrentPage('Snack');

        break;
      case 'Drinks':
        setSelectedItems(drinks);
        setCurrentPage('Drink');

        break;
      case 'Food':
        setSelectedItems(food);
        setCurrentPage('Food');

        break;
      default:
        setSelectedItems(food);
        setCurrentPage('Food');
        break;

      
    }
  };

  console.log("selectedItems", selectedItems)

  return (
    <View style={{flex: 1, backgroundColor: '#F2F2F2'}}>
      <View style={{marginTop: 40, flexDirection: 'row',justifyContent:'space-between',width:'80%'}}>
        <View>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Image
            style={{height: 15, width: 22, marginTop: 20, marginLeft: 55}}
            source={Appimages.Menu}
          />

        </TouchableOpacity>
        </View>
        <View style={{}}>
        <Love onPress={() => handleAddToFavourite(item)} />
        </View>
      </View>
      <Text style={Style.text}>{Appconstant.Delicious}</Text>
      <View
        style={{
          marginTop: 20,
          fontSize: 17,
          marginLeft: 40,
          flexDirection: 'row',
          backgroundColor: '#EFEEEE',
          borderRadius: 30,
          width: 300,
        }}>
        <Icon
          name="search1"
          size={25}
          style={{
            marginTop: 17,
            marginLeft: 30,
          }}
        />
        <TextInput
          placeholder="Search"
          placeholderTextColor="black"
          style={Style.Textinput}
          value={search}
          onChangeText={setsearch}
          onSubmitEditing={() => {
            handleSearch(search);
          }}
        />
      </View>
      <View>
        <ScrollView horizontal style={{height: 30, zIndex: -1, marginTop: 10}}>
          <View style={Style.Scrollablemenu}>
            <TouchableOpacity onPress={() => handleCategoryClick('Food')}>
              <Text style={Style.menu}>{Appconstant.Foods}</Text>
              {currentPage === 'Food' && <View style={Style.underline}></View>}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleCategoryClick('Drinks')}>
              <Text style={Style.menu}>{Appconstant.drink}</Text>
              {currentPage === 'Drink' && <View style={Style.underline}></View>}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleCategoryClick('Snacks')}>
              <Text style={Style.menu}>{Appconstant.snacks}</Text>
              {currentPage === 'Snack' && <View style={Style.underline}></View>}
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={[Style.menu, {marginRight: 50}]}>
                {Appconstant.souce}
              </Text>
              {currentPage === 'Souce' && <View style={Style.underline}></View>}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <View>
        <TouchableOpacity>
          <Text
            style={{
              color: '#FA4A0C',
              fontSize: 17,
              textAlign: 'right',
              marginRight: 20,
              marginTop: 20,
            }}>
            See more
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={{marginTop: '10%'}}
        data={selectedItems}
        horizontal={true}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <TouchableOpacity onPress={()=>{
            handle(item)
          }}>
          <View style={{alignItems: 'center'}}>
            {item.image && item.image[0] && (
              <View style={{alignItems: 'center'}}></View>
            )}

            <View style={Style.specify}>
              <View style={Style.description}>
                <Text style={Style.name}>{item.name}</Text>
                <Text style={Style.price}>{item.price}</Text>
              </View>
            </View>
            <Image source={item.image[0]} style={Style.image} />
          </View>
          </TouchableOpacity>
        )}
      />
      {currentPage === 'Drink'}
      {currentPage === 'Snack'}
      {currentPage === 'Souce'}
      {currentPage === 'Food'}
    </View>
  );
};

export default Product;
