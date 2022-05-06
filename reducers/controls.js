// RADIUS REDUCER
let initiaRadiusState = { value: 70 };

function radiusControlReducer(state = initiaRadiusState, action) {
  switch (action.type) {
    case UPDATE_RADIUS:
      return { ...state, value: action.payload.value };
    case RESET_RADIUS:
      return { ...state, value: initiaRadiusState.value };
    default:
      return state;
  }
}

// BACKGROUND REDUCER
let initialBackgroundState = { value: "#ff00ff" };

function backgroundControlReducer(state = initialBackgroundState, action) {
  switch (action.type) {
    case UPDATE_BACKGROUND:
      return { ...state, value: action.payload.value };
    case RESET_BACKGROUND:
      return { ...state, value: initialBackgroundState.value };
    default:
      return state;
  }
}

const controlsReducer = Redux.combineReducers({
  radius: radiusControlReducer,
  background: backgroundControlReducer,
});
