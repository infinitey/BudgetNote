export const GET_TEST_PENDING = 'GET_TEST_PENDING'
export const GET_TEST_SUCCESS = 'GET_TEST_SUCCESS'
export const GET_TEST_FAILURE = 'GET_TEST_FAILURE'

import { fetchCall } from '../config/fetch'

export function fetchTest() {
  return (dispatch) => {
    dispatch(getTestPending())
    fetch('https://api.ocbc.com:8243/Lifegoals_Retirement/1.0?currentAge=23&retirementAge=45&yearsAfterRetirement=5', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer bcab3f1edd3eb705c5aebf7cdd3f8f52'
      }
  })
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch(getTestSuccess(responseJson))
      })
      .catch((error) => {
        dispatch(getTestFailure(error))
      });
  }
}


export const getTestPending = () => {
  return {
    type: GET_TEST_PENDING,
  }
}

export const getTestSuccess = (outlet) => {
  return {
    type: GET_TEST_SUCCESS,
    outlet,
  }
}

export const getTestFailure = () => {
  return {
    type: GET_TEST_FAILURE,
  }
}
