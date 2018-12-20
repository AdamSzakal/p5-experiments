
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(60);
  stroke(230);
  fill(230);
}

function draw() {
  background(30);

  for (var i = 0; i < 6; i++) {
    rotate(PI / 3);
    ellipse(mouseX, 100, 50, 50);
    line(0, 0, mouseX, 100);
  }
}
