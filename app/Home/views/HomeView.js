'use strict'
import React, { Component }  from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux';

export default class HomeView extends Component {
  render(){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <TouchableOpacity onPress={this.props.onPress}>
          <Text>Press me</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
