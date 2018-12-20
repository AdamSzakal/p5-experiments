var angle = 0;
var px_amp = 2;
var damp = 0.5;

function preload() {
  fontRegular = loadFont('walsheim.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight * .8 , WEBGL).parent('canvas-container');
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
  // orbitControl();

  // translate(rotationY * damp, rotationX * damp + 20)
  // translate(-mouseX * damp, -mouseY * damp)
  plane(windowWidth / 1.5, windowHeight/1.5);
  fill(230);

  translate(rotationY * damp * 2 - 25, rotationX * damp * 2, 50);
  // translate(-mouseX * damp * 2 - 100, -mouseY * damp * 2);
  fill(240, 64, 20);
  plane(windowWidth / 1.65, windowHeight / 3);

  translate(rotationY * damp * 3 - 10, rotationX * damp * 3, 20);
  fill(230);
  textSize(32);
  text('Xофманн', -windowWidth/5, -windowHeight/16);
}
