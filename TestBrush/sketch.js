

//////////////////////////////////////////////////
// Object for creation and real-time resize of canvas
// Good function to create canvas and resize functions. I use this in all examples.
const C = {
  loaded: false,
  prop() { return this.height / this.width },
  isLandscape() { return window.innerHeight <= window.innerWidth * this.prop() },
  resize() {
    if (this.isLandscape()) {
      console.log("yes")
      document.getElementById(this.css).style.height = "100%";
      document.getElementById(this.css).style.removeProperty('width');
    } else {
      document.getElementById(this.css).style.removeProperty('height');
      document.getElementById(this.css).style.width = "100%";
    }
  },
  setSize(w, h, p, css) {
    this.width = w, this.height = h, this.pD = p, this.css = css;
  },
  createCanvas() {
    this.main = createCanvas(this.width, this.height, WEBGL), pixelDensity(this.pD), this.main.id(this.css), this.resize();
  }
};
C.setSize(1500, 2000, 1, 'mainCanvas')

function windowResized() {
  C.resize();
}

const waves = [];

function setup() {
  frameRate(48);
  C.createCanvas()
  angleMode(DEGREES)
  background("#00000")
  this.building = new Building(0,0,0,0,0);
  for (let i = 0; i < 33; i++) {
    waves.push(new WaveBrush(0, 80, width/2, 500));
  }


  // We define the brushes for the hatches, and the brushes for the strokes
  let hatch_brushes = ["marker1"]
  let stroke_brushes = ["2H", "HB", "charcoal"]

}

function draw() {
  background("#FFFFFF")
  building.display();
  for (let wave of waves) {
    wave.edges();
    wave.flock(waves, 1, 0, 1);
    wave.update();
    wave.display();
  }
}