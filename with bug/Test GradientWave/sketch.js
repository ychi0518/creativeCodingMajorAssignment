let gradientWave;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let skyXPos = 0;
  let skyYPos = 0
  let skyWidth = windowWidth
  let skyHeight = windowHeight/2
  let amplitude = 50;
  let yPercent1 = 0.2;
  let yPercent2 = 0.5;
  let color0 = color(30, 70, 140, 100); // Navy
  let color1 = color(100, 150, 105); // Green
  let color2 = color(230, 180, 50, 100); // Yellow
  let color3 = color(160, 80, 50, 100); // Red
  gradientSky = new GradientWave(skyXPos, skyYPos, skyWidth, skyHeight, amplitude, yPercent1, yPercent2, color0, color1, color2, color3);
}

function draw() {
  background(220);
  gradientSky.display();
}
