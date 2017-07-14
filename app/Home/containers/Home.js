'use strict'
import React, { Component }  from 'react'

import HomeView from '../views/HomeView'
import { connect } from 'react-redux';

import { fetchTest } from '../home_api'

class Home extends Component {

  requestTest() {
      this.props.fetchTest();

  }

  render(){
    return(
      <HomeView
        onPress={this.requestTest.bind(this)}
        result={this.props.result}
      />
    )
  }
}

function mapStateToProps (state) {
  return {
    isGettingTest: state.homeReducer.isGettingTest,
    result: state.homeReducer.textObj
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchTest: (emailAddress, password) => dispatch(fetchTest()),
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(Home)
