// Global variables
var radius;
var background;

// --- Subscribers --- //
var subscribeRadius = observe(
  // selection of the state
  function (state) {
    return state.radius;
  },
  // onChange trigger
  function (state) {
    radius = state.value;
  }
);

var subscribeBackground = observe(
  // selection of the state
  function (state) {
    return state.background;
  },
  // onChange trigger
  function (state) {
    background = state.value;
  }
);

// --- DOM Elements actions --- //
// Slider
var sliderInput = document.getElementById("radius-input");
sliderInput.oninput = function () {
  var sliderValue = this.value;
  store.dispatch(updateRadius(sliderValue));
};

// Background
var backgroundInput = document.getElementById("background-input");
backgroundInput.oninput = function () {
  var backgroundValue = this.value;
  store.dispatch(updateBackground(backgroundValue));
};

// Controls switcher
var controlsBTN = document.getElementById("controls-btn");
controlsBTN.onclick = function () {
  var controlsContainer = document.querySelector(".controls-container");
  controlsContainer.classList.toggle("active");
};

// --- Sketch --- //
var sketch = function (p) {
  var canvas = null;

  p.setup = function () {
    canvas = p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = function () {
    p.background(background);
    p.ellipse(p.mouseX, p.mouseY, radius, radius);
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

// --- Render --- //
let sincentro = new p5(sketch, "sincentro");
