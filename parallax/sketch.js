var angle = 0;
var px_amp = 2;
var damp = 0.5;

function preload() {
  fontRegular = loadFont('walsheim.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight * .6 , WEBGL).parent('canvas-container');
  frameRate(30);
  stroke(230);
  angleMode(DEGREES);
  noStroke();
  textFont(fontRegular);
}

function draw() {
  background(30,30,30);
  // var c = color(230);

  ambientLight(50);
  // directionalLight(c, windowWidth/2, windowHeight/2, -300);
  orbitControl();

  translate(rotationY * damp, rotationX * damp)
  // translate(-mouseX * damp, -mouseY * damp)
  plane(300, 500).fill(230);

  translate(rotationY * damp * 2 - 100, rotationX * damp * 2, 50);
  // translate(-mouseX * damp * 2 - 100, -mouseY * damp * 2);
  fill(240, 64, 20);
  plane(250, 250);

  translate(rotationY * damp * 3 - 100, rotationX * damp * 3, 50);
  fill(230);
  textSize(80);
  text('Xофманн', -windowWidth/5, -windowHeight/16);
}
