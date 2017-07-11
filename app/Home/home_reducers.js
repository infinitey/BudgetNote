import {
  GET_TEST_PENDING,
  GET_TEST_SUCCESS,
  GET_TEST_FAILURE,
} from './home_actions'

import getTestPending from './reducers/get_test_pending'
import getTestSuccess from './reducers/get_test_success'
import getTestFailure from './reducers/get_test_failure'

const homeInitialState = {
  isGettingTest: false,
  test: '',
}

export const homeReducer = (state = homeInitialState, action) => {
  switch (action.type) {
    case GET_TEST_PENDING:
     return getTestPending( state, action )
    case GET_TEST_SUCCESS:
     return getTestSuccess( state, action )
    case GET_TEST_FAILURE:
     return getTestFailure( state, action )
    default:
     return state
  }
}
