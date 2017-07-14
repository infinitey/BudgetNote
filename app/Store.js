'use strict'

// Redux
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

// Navigation
import { NavigatorHome } from './Home/HomeNavConfig'
import { homeReducer } from './Home/home_reducers'

// Middleware
const middleware = () => {
  return applyMiddleware(createLogger(), thunk)
}

//createStore
export default createStore(
  combineReducers({
    home: (state, action) =>
    {
      const newState = NavigatorHome.router.getStateForAction(action, state);

      // return state if newState is null or undefined.
      return newState || state;
    },
    homeReducer,
  }),
  middleware(),
)
