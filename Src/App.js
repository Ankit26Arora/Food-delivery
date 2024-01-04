import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Toast, {ToastProvider} from 'react-native-toast-notifications';

import {
  Account,
  Cart,
  Help,
  Profile,
  AddressForm,
  Payment,
  Checkout,
  Drawer,
  Menupage,
  Login,
  Signin,
  BottomTab,
  Detail,
  Search,
  Onbordingscreen,
  SerchComponent,
  Offer,
} from './Screen';
const stack = createNativeStackNavigator();
const App = () => {
  return (
    <View style={{flex: 1}}>
      <ToastProvider>
        <NavigationContainer>
          <stack.Navigator screenOptions={{headerShown: false}}>
            <stack.Screen name="First" component={Onbordingscreen} />
            <stack.Screen name="Login" component={Login} />
            <stack.Screen name="Signin" component={Signin} />
            <stack.Screen name="Bottomtab" component={BottomTab} />
            <stack.Screen name="Drawer" component={Drawer} />
            <stack.Screen name="Detail" component={Detail} />
            <stack.Screen name="Search" component={Search} />
            <stack.Screen name="Serchcomponent" component={SerchComponent} />
            <stack.Screen name="Cart" component={Cart} />
            <stack.Screen name="Account" component={Account} />
            <stack.Screen name="Menupage" component={Menupage} />
            <stack.Screen name="Checkout" component={Checkout} />
            <stack.Screen name="Addressform" component={AddressForm} />
            <stack.Screen name="Payment" component={Payment} />
            <stack.Screen name="Profile" component={Profile} />
            <stack.Screen name="Help" component={Help} />
            <stack.Screen name="Offer" component={Offer} />

          </stack.Navigator>
        </NavigationContainer>
      </ToastProvider>
    </View>
  );
};

export default App;
