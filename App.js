import React from 'react';
import { View } from 'react-native';
import LoginScreen from './src/pages/LoginScreen';
import ContentScreen from './src/pages/ContentScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ContentScreen"
          component={ContentScreen}
          options={{
            title: "My App",
            headerStyle: {
              backgroundColor: "#856084",
              borderBottomColor: "#fff",
              borderBottomWidth: 1,
            },
            headerTitleStyle: {
              color: "#fff",
              fontSize: 30,
            },
          }}
        />

        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: "My App",
            headerStyle: {
              backgroundColor: "#856084",
              borderBottomColor: "#fff",
              borderBottomWidth: 1,
            },
            headerTitleStyle: {
              color: "#fff",
              fontSize: 30,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

