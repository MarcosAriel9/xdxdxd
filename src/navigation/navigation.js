import React from 'react'
import { NavigationContainer, TabActions } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
//import Profile from '../screens/profile'
import Results from '../screens/index'
//import Smart from '../screens/smart'
//import SmartGo from '../screens/smartGo'
import IndexStack from '../components/indexStack'



const Tab = createDrawerNavigator()

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="IndexStack"
        
      >
        <Tab.Screen
          name="Index"
          component={IndexStack}
          options={{title:'Bienvenido', drawerIcon:()=><Icon type='material-community' size={22} name={'view-grid-outline'}/>}}
        />
        
        
      </Tab.Navigator>
    </NavigationContainer>
  )
}
