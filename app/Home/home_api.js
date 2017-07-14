import * as actionCreator from './home_actions'
//This is where you access navigate helper methods
import { NavigationActions } from 'react-navigation'


export function fetchTest() {
  return (dispatch) => {
    dispatch(actionCreator.getTestPending())
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
        dispatch(actionCreator.getTestSuccess(responseJson))
        dispatch(NavigationActions.navigate({ routeName: 'Content'}))
      })
      .catch((error) => {
        dispatch(actionCreator.getTestFailure(error))
      });
  }
}
