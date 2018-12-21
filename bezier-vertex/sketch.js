var angle = 0;
var n = 12;
var r = 200;
var xpts = [];
var ypts = [];
var pts = [];
var curvature = 0;
var hval = 140;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  stroke(230);
  noFill();
  colorMode(HSB, 255);

  startVal = createSlider(0, 11, 1);
  startVal.position(10,10);
  endVal = createSlider(0, 11, 3);
  endVal.position(10,50);

  // Create array of points
  for (var i=0; i < n; i++) {
    
    pts[i] = {
      x: r * cos(angle),
      y: r * sin(angle),
      c: color(random(255), 100, 255)
    }

    angle += TWO_PI / 12.0;
  }
}

function draw() {
  background(0, 0, 25);
  translate(windowWidth/2, windowHeight/2);

  // Draw the dots
  strokeWeight(40);
  for (var i=0; i<n; i++) {
    push();
    stroke(pts[i].c);
    point(pts[i].x, pts[i].y);
    pop();
  }

  // Draw curbe between points by creating a bezier curve
  push();
  stroke(255,0,255,25);
  

  // The curve
  strokeWeight(40);

  beginShape();
   vertex(pts[startVal.value()].x, pts[startVal.value()].y);
   quadraticVertex(0, 0, pts[endVal.value()].x, pts[endVal.value()].y); 
  endShape();

  //
  // bezier( pts[startVal.value()].x, pts[startVal.value()].y, pts[startVal.value()].x/1.75, pts[startVal.value()].y, pts[[endVal.value()]].x/1.75, pts[[endVal.value()]].y/1.75, pts[[endVal.value()]].x, pts[[endVal.value()]].y);

  pop();

}
