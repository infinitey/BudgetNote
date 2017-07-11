'use strict'
import React from 'react'
import { StackNavigator } from 'react-navigation'

// Screens
import Home from  './containers/Home'


const routeConfiguration = {
  Home: {screen: Home,
    navigationOptions: ({ navigation, screenProps }) => ({
      title: 'Main Menu',
      headerMode: 'screen',
    }),
  },

}


export const NavigatorHome = StackNavigator(routeConfiguration)
