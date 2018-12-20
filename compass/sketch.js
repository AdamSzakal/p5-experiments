var img;

let angle = 0;

function preload() {
  img = loadImage('needle.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  stroke(230);
  fill(230);
  angleMode(DEGREES);
  imageMode(CENTER);
}

function draw() {
  background(30);

  translate(windowWidth/2, windowHeight/2);
  rotate(rotationZ);
  text(rotationZ, -4, -100)
  image(img, 0, 0);
}
