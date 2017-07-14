'use strict'
import React from 'react'
import { StackNavigator } from 'react-navigation'

// Screens
import Home from  './containers/Home'
import Content from './containers/Content'


const routeConfiguration = {
  Home: {screen: Home,
    navigationOptions: ({ navigation, screenProps }) => ({
      title: 'Main Menu',
      headerMode: 'screen',
    }),
  },
  Content: {screen: Content,
    navigationOptions: ({ navigation, screenProps }) => ({
      title: 'Result',
      headerMode: 'screen',
    }),
  },
  //Add more screens here...
}


export const NavigatorHome = StackNavigator(routeConfiguration)
