import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Product from '../../../Screen/Product';
import Favorite from '../../../Screen/Favorite';
import Account from '../../../Screen/Account';
import History from '../../../Screen/History';
import Icon from 'react-native-vector-icons/FontAwesome';
import Menu from '../../Menu';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{ headerShown: false ,
          tabBarActiveTintColor: '#FA4A0C',
          tabBarShowLabel:false,
          tabBarStyle: {
            backgroundColor: '#F2F2F2', 
            height: 55,
          },          

        }}
        

      >
        {/* Product */}
        <Tab.Screen
          name="Menu"
          component={Menu}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name="home"
                color={focused ? color : 'gray'}
                size={size}
              />
            ),
          }}
          
        />
        

        {/* Favorite */}
        <Tab.Screen
          name="Favorite"
          component={Favorite}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name="heart"
                color={focused ? color : 'gray'}
                size={size}
              />
            ),
          }}
        />

        {/* Account */}
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name="person"
                color={focused ? color : 'gray'}
                size={size}
              />
            ),
          }}
        />

        {/* History */}
        <Tab.Screen
          name="History"
          component={History}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Icon
                name="history"
                color={focused ? color : 'gray'}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    
  },
});

export default BottomTab;