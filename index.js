var sketch = function(p) {
  var canvas = null;
  var radius = 70;
  var color = '#ff00ff';

  p.setup = function() {
    canvas = p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = function() {
    p.background(color);
    p.ellipse(p.mouseX, p.mouseY, radius, radius);
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }
};

let sincentro = new p5(sketch, "sincentro");