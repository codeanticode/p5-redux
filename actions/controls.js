// RADIUS CONTROL ACTIONS
let UPDATE_RADIUS = "UPDATE_RADIUS";
let RESET_RADIUS = "RESET_RADIUS";

function updateRadius(value) {
  return {
    type: UPDATE_RADIUS,
    payload: {
      value,
    },
  };
}

function resetRadius() {
  return {
    type: RESET_RADIUS,
  };
}

// BACKGROUND CONTROL ACTIONS
let UPDATE_BACKGROUND = "UPDATE_BACKGROUND";
let RESET_BACKGROUND = "RESET_BACKGROUND";

function updateBackground(value) {
  return {
    type: UPDATE_BACKGROUND,
    payload: {
      value,
    },
  };
}

function resetBackground() {
  return {
    type: RESET_BACKGROUND,
  };
}
