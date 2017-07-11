'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorHome } from './HomeNavConfig'

// Redux
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
 return {
  navigationState: state.home
  }
}

class HomeNavigation extends React.Component {

  render(){
    const { navigationState, dispatch } = this.props
    return (
      <NavigatorHome
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState
          })
        }
      />

    )
  }
}
export default connect(mapStateToProps)(HomeNavigation)
