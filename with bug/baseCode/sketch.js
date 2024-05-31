let gradientWave;


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

const waves = [];
function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight, WEBGL);
  let skyXPos = -windowWidth/2;
  let skyYPos = -windowHeight/2;
  let skyWidth = windowWidth;
  let skyHeight = windowHeight/2+120
  let amplitude = 50;
  let yPercent1 = 0.2;
  let yPercent2 = 0.5;
  let color0 = color(30, 70, 140, 100); // Navy
  let color1 = color(100, 150, 105); // Green
  let color2 = color(230, 180, 50, 100); // Yellow
  let color3 = color(160, 80, 50, 100); // Red
  water = new Water();
  gradientSky = new GradientWave(skyXPos, skyYPos, skyWidth+200, skyHeight, amplitude, yPercent1, yPercent2, color0, color1, color2, color3);
  gradientSea = new GradientWave(skyXPos, 150, skyWidth+200, skyHeight, amplitude, yPercent1, yPercent2, color3, color2, color1, color0);
  backgroundShadow = new BackgroundShadow(400, -120, 122);
  building = new Building(0, 120, 0, 0, 0);
  for (let i = 0; i < 99; i++) {
    waves.push(new WaveBrush(0, 148, width/2, 200));
  }
}

function draw() {
  background("#FFFFFF")
  gradientSky.display();
  gradientSea.display();
  building.display();
  backgroundShadow.display();
  Seagull.display();
  water.display();
  for (let wave of waves) {
    wave.edges();
    wave.flock(waves, 1, 0, 1);
    wave.update();
    wave.display();
  }
  
}