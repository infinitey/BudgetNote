//theory you can declare type as anything even an int
//for good practices, it's important to assign types as constant first
//as it will help in debugging.
export const GET_TEST_PENDING = 'GET_TEST_PENDING'
export const GET_TEST_SUCCESS = 'GET_TEST_SUCCESS'
export const GET_TEST_FAILURE = 'GET_TEST_FAILURE'

//this is an action creator: simply a function that returns an action object
export const getTestPending = () => {
  return {
    type: GET_TEST_PENDING,
  }
}

//this is an action creator: simply a function that returns an action object
export const getTestSuccess = (testObj) => {
  return {
    type: GET_TEST_SUCCESS,
    testObj,
  }
}

//this is an action creator: simply a function that returns an action object
export const getTestFailure = () => {
  return {
    type: GET_TEST_FAILURE,
  }
}
