import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Appimages from '../../Theme/Appimages'
import {useNavigation} from '@react-navigation/native'
const Back = () => {
    const navigation=useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={()=>{
                navigation.goBack();
            }}>
            <Image
            style={{ 
                height:24,
                width:24
              }}
            source={Appimages.Left}
            />
            </TouchableOpacity>
    </View>

)
}
export default Back