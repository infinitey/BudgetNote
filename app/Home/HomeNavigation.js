'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorHome } from './HomeNavConfig'

// Redux
import { connect } from 'react-redux'

class HomeNavigation extends React.Component {

  render(){
    //grabs navigationState (its own state) and dispatch from store
    //addNavigationHelpers creates its own actions and reducers with the state and dispatch
    //doing so, all the components handled by NavigatorHome will have access to navigation
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

//so that navigator is able to access its own state through props
const mapStateToProps = (state) => {
 return {
  navigationState: state.home
  }
}

export default connect(mapStateToProps)(HomeNavigation)
