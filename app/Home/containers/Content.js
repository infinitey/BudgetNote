'use strict'
import React, { Component }  from 'react'

import ContentView from '../views/ContentView'
import { connect } from 'react-redux';


class Content extends Component {

  back() {
      this.props.navigation.goBack()
  }

  render(){
    return(
      <ContentView
        onPress={this.back.bind(this)}
        result={this.props.result}
      />
    )
  }
}

function mapStateToProps (state) {
  return {
    result: state.homeReducer.testObj.disclaimer
  }
}



export default connect( mapStateToProps)(Content)
