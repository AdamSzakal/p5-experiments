var x = 0;
var d = 0;
var angle = 0;
var margin = 24;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0, 0, 10, 5);
}

function draw() {

  // ellipse(margin + cos(angle) * width/3 + width/3, margin + sin(angle) * height/3 + height/3, d, d).noStroke();
  ellipse( abs(cos(angle)) * width, height/2, d, d).noStroke();

  d = 16 + 8 * sin(angle);
  x = width/3 * sin(angle);

  angle += random(TWO_PI);
}
