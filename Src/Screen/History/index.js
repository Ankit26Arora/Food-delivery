import { View, Text } from 'react-native';
import React, { useEffect } from 'react'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

const Index = () => { 
  useEffect(() => {
    const retrieveData = async () => {
      try {
        const existingData = await AsyncStorage.getItem('otherData');
        if (existingData) {
          const dataArray = JSON.parse(existingData);
          console.log('Retrieved data:', dataArray);
        } else {
          console.log('No data found');
        }
      } catch (error) {
        console.error('Error retrieving data:', error);
      }
    };

    retrieveData(); 
  }, []); 

  return (
    <View>
      <Text>index</Text>
    </View>
  );
};

export default Index; 
