var angle = 0;
var amp = 2000;
var phase = 300;
var increment = 3;
var slider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  stroke(230);
  angleMode(DEGREES);
  noFill();

  slider = createSlider(0, 50, 25);
  slider.position(50,50);
}

function draw() {
  background(30,30,30);
  text("Number of beziers", 50, 30);
  
  angle += increment;

  for (var i = 0; i < slider.value() ; i++) {
    bezier(windowWidth/2 + 100, 50, cos(angle) * amp + i * phase , windowHeight, sin(angle) * amp + i * phase , windowWidth, windowWidth/2 - 100, 50);
  }
}
