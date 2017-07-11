import React, { Component } from 'react'

import { Provider } from 'react-redux'
import store from './Store'

import HomeNavigation from './Home/HomeNavigation'
import Home from './Home/containers/Home'
import HomeView from './Home/views/HomeView'

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <HomeNavigation />
      </Provider>
    )
  }
}
