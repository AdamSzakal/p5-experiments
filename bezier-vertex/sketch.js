var angle = 0;
var n = 12;
var r = 200;
var xpts = [];
var ypts = [];
var curvature = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  stroke(230);
  noFill();

  startVal = createSlider(0, 12, 1);
  startVal.position(10,10);
  endVal = createSlider(0, 12, 1);
  endVal.position(10,50);
}

function draw() {
  background(30);
  translate(windowWidth/2, windowHeight/2);

  strokeWeight(10);

  // Create points and add to array
  for (var i=0; i < n; i++) {
    point(r * cos(angle), r * sin(angle));

    xpts.push(r * cos(angle));
    ypts.push(r * sin(angle));

    angle += TWO_PI / 12.0;
  }
  
  strokeWeight(1);


  // TODO: Denna skiten nedan
  if (startVal.value() - endVal.value() > 6 && startVal.value() ) {
    curvature = 0;
  } else if (startVal.value() - endVal.value() == 6) {
    curvature = .5;
  } else {
    curvature = 1;
  }

  curveBetween(xpts[startVal.value()], ypts[startVal.value()], xpts[endVal.value()], ypts[endVal.value()], 0.3, 0.3 , curvature);
}


function curveBetween(x1, y1, x2, y2, d, h, flip) {
  //find two control points off this line
  var original = p5.Vector.sub(createVector(x2, y2), createVector(x1, y1));
  var inline = original.copy().normalize().mult(original.mag() * d);
  var rotated = inline.copy().rotate(radians(90)+flip*radians(180)).normalize().mult(original.mag() * h);
  var p1 = p5.Vector.add(p5.Vector.add(inline, rotated), createVector(x1, y1));
  //line(x1, y1, p1.x, p1.y); //show control line
  rotated.mult(-1);
  var p2 = p5.Vector.add(p5.Vector.add(inline, rotated).mult(-1), createVector(x2, y2));
  //line(x2, y2, p2.x, p2.y); //show control line
  bezier(x1, y1, p1.x, p1.y, p2.x, p2.y, x2, y2)
}
