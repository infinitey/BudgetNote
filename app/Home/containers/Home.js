'use strict'
import React, { Component }  from 'react'
import { connect } from 'react-redux';

import HomeView from '../views/HomeView'

import { fetchTest} from '../home_actions'

class Home extends Component {

  requestTest() {
      this.props.fetchTest();
  }

  render(){
    return(
      <HomeView
        onPress={this.requestTest.bind(this)}
      />
    )
  }
}

function mapStateToProps (state) {
  return {
    isGettingTest: state.homeReducer.isGettingTest,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchTest: (emailAddress, password) => dispatch(fetchTest()),
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(Home)
