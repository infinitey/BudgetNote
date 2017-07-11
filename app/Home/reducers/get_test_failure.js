export default function( state, action ) {
  return Object.assign({}, state, {
    isGettingTest: false,
    error: action.error
  });
}
