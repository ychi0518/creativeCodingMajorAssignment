let seagull1;
let seagull2;

function setup() {
  createCanvas(800, 600);
  seagull1 = new Seagull(100, 300, 1, color(0));          // Original seagull
  seagull2 = new Seagull(200, 350, 0.7, color(100)); // Smaller, lighter-colored seagull
}

function draw() {
  clear(); // Clear the canvas to avoid trailing effect
  seagull1.display();
  seagull1.move();
  seagull2.display();
  seagull2.move();
}