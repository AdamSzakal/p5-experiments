var img;

let angle = 0;

function preload() {
  img = loadImage('needle.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  stroke(218,98,83);
  fill(218,98,83);
  angleMode(DEGREES);
  imageMode(CENTER);
}

function draw() {
  background(249,225,125);

  translate(windowWidth/2, windowHeight/2);
  rotate(rotationZ);
  text(rotationZ, -4, -100)
  image(img, 0, 0);
}
