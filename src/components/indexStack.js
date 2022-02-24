import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Index from '../screens/index'
import Results from '../screens/results'

import { Icon } from 'react-native-elements/dist/icons/Icon';
import Navigation from '../navigation/navigation';

const Stack = createStackNavigator();

export default function indexStack() {
   
  return (
      <Stack.Navigator>
          <Stack.Screen name='Index' component={Index} options={{title: "InicioS"}}/>
          <Stack.Screen name='Results' component={Results} options={{title: "Results"}}/> 
      </Stack.Navigator>
  )
}