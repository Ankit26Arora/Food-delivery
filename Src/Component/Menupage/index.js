import { View, Text } from 'react-native'
import React from 'react'
import useNavigation from '@react-navigation/native'
const Menupage = () => {
  const navigation = useNavigation();
  const open=()=>{
    navigation.openDrawer();
  }
  return (
    <View>
      <Text onPress={open}>Menupage</Text>
    </View>
  )
}

export default Menupage