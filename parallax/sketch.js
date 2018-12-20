var angle = 0;
var amp = 2000;
var damp = 0.1;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(30);
  stroke(230);
  angleMode(DEGREES);
  noStroke();

}

function draw() {
  background(30,30,30);
  var c = color(230);
  ambientLight(50);
  directionalLight(c, windowWidth/2, windowHeight/2, -300);
  orbitControl();

  translate(rotationY * damp, rotationX * damp)
  // translate(-mouseX * damp, -mouseY * damp)
  plane(300, 500).fill(230);

  translate(rotationY * damp * 2 - 100, rotationX * damp * 2);
  // translate(-mouseX * damp * 2 - 100, -mouseY * damp * 2);
  plane(250, 250).fill(130);
}
