export default function( state, action ) {
  return Object.assign({}, state, {
    isGettingTest: false,
    test: action.test
  });
}
