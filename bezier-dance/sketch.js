function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  stroke(230, 230, 230);
}

function draw() {
  background(30,30,30);
  noFill();
  bezier(mouseY, 250, 0, mouseX, mouseX, 0, 100, 0);
  // bezier(250, 250, 0, 100 * sin( random(TWO_PI) ), 100 * sin( random(TWO_PI) ), 0, 100, 0, 0, 0, mouseY, 0);
}
