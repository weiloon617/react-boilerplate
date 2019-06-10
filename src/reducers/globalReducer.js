const INITIAL_STATE = {
  testing: 'TEST',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TEST_GLOBAL': {
      return { ...state, testing: action.payload }
    }
    default:
      return { ...state }
  }
}
