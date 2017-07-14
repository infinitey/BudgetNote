//reducer function always takes in state (previous state) and action
//the action contain necessary information to make a change to the store 
export default function( state, action ) {
  return Object.assign({}, state, {
    isGettingTest: false,
  });
}
