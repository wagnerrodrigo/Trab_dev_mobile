import React from 'react';
import { View } from 'react-native';


import LoginScreen from './src/pages/LoginScreen';

import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Notifica app" component={LoginScreen} 
          option={{
            title: "Notifica",
            headerStyle: {
              backgroundColor: "#2a2438",
              borderBottonColor: "#5c5470",
              borderBottomWidth: 1,
            },
            headerTitleStyle: {
              color: "#dbd8e3",
              fontSize: 30
            }, }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
