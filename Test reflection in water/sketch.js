function setup() {
  createCanvas(800, 600);
  noLoop();
}

function draw() {
  drawReflection();
}

// reflection
function drawReflection() {
  let waterColorTop = color(255, 165, 0); // top color
  let waterColorBottom = color(135, 206, 235); // bottom color

  for (let y = height / 2; y < height; y++) {
    let inter = map(y, height / 2, height, 0, 1);
    let c = lerpColor(waterColorTop, waterColorBottom, inter);
    stroke(c);
    line(0, y, width, y);
  }

  // stroke
  for (let y = height / 2; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let wave = sin((x + frameCount) * 0.02) * 10;
      stroke(lerpColor(waterColorTop, waterColorBottom, random(0, 1)));
      point(x, y + wave);
    }
  }

  
}

