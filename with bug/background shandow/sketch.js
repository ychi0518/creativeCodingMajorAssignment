let bgShadow;

function setup() {
  createCanvas(620, 440);
  bgShadow = new BackgroundShadow();
}

function draw() {
  background(254, 252, 236);
  bgShadow.display();
}
