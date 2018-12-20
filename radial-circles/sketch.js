
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(60);
  stroke(218,98,83, 20);
  fill(218,98,83);
}

function draw() {
  background(249,225,125);

  for (var i = 0; i < 6; i++) {
    rotate(PI / 3);
    ellipse(mouseX, 100, 50, 50);
    line(0, 0, mouseX, 100);
  }
}
