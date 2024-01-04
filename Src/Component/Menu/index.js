import React from 'react';
import { TouchableOpacity, View, Dimensions, Text,Image } from 'react-native';
import { createAppContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Product from '../../Screen/Product';
import Drawer from '../Navigator/Drawer';




const DrawerNavigation = createDrawerNavigator();
const Menu = () => {
  return (
    <DrawerNavigation.Navigator
      initialRouteName="DashBoard"
      screenOptions={{
        headerShown: false,
        
        drawerStyle: {width:'80%'},
        headerShadowVisible:false,
        
        
      }}
      drawerContent={props => <Drawer {...props} />}>
        <DrawerNavigation.Screen name='Product' component={Product}/>
    </DrawerNavigation.Navigator>
  );
};

export default Menu;
