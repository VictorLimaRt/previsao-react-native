import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/routes';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (

    <NavigationContainer>
         <StatusBar hidden={true} />
         <Routes />
    </NavigationContainer>
   
  );
}

