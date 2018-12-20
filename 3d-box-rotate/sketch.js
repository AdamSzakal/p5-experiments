function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(60);
  noFill();
  noSmooth();
}

function draw() {
  background(30);
  stroke(230, 230, 230, 5);

  // directionalLight(250, 250, 250, -100, -100, 0.25);
  // ambientMaterial(100,24,255);
  
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.001);
  rotateZ(frameCount * 0.001);

  // rotateY(mouseX * 0.001);
  // rotateX(mouseY * 0.001*-1);

  box(250);
}
