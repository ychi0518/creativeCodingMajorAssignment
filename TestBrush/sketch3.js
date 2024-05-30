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

//Class Building to constructed the main churchlike building in the centrepiece.

class Building{
  constructor(xPos, yPos, R, G, B){
    this.xPos = xPos;
    this.yPos = yPos;
    this.R = R;
    this.G = G;
    this.B = B;
  }
  
  display(){
    //set setting for brush
    translate(this.xPos, this.yPos);
    stroke(this.R, this.G, this.B);
    //Draw Base
    fill(this.R, this.G, this.B);
    beginShape()
    vertex(-800, 0);
    vertex(0, 0);
    vertex(0, -50);
    vertex(-10,-60);
    vertex(-35,-80);
    vertex(-60, -90);
    vertex(-170, -90);
    vertex(-200, -115);
    vertex(-200, -140);
    vertex(-195, -140);
    vertex(-200, -145);
    vertex(-225, -160);
    vertex(-250, -170);
    vertex(-260, -210);
    vertex(-260, -170);
    vertex(-280, -165);
    vertex(-340, -195);
    vertex(-390, -195);
    vertex(-390, -235);
    //Dome
    vertex(-400, -255);
    vertex(-430, -275);
    vertex(-430, -295);
    vertex(-440, -315);
    vertex(-450, -295);
    vertex(-450, -275);
    vertex(-470, -265);
    vertex(-480, -245);
    //Tower
    vertex(-480, -500);
    vertex(-500, -560);
    vertex(-510, -650);
    vertex(-520, -645);
    vertex(-530, -650);
    vertex(-535, -590);
    vertex(-537, -590);
    vertex(-540, -500);
    vertex(-545, -520);
    vertex(-550, -500);
    vertex(-555, -520);
    vertex(-560, -500);
    vertex(-560, -200);
    //Left Side Wall
    vertex(-590, -180);
    vertex(-600, -170);
    vertex(-630, -190);
    vertex(-640, -215);
    vertex(-640, -180);
    vertex(-700, -180);
    vertex(-730, -150);
    vertex(-730, -100);
    vertex(-900, -100);
    vertex(-935, -80);
    vertex(-950, -50);
    vertex(-950, 0);
    endShape(CLOSE);
  }

  update(){}


}

//////////////////////////////////////////////////
// The example really starts here

let palette = ["#7b4800", "#002185", "#003c32", "#fcd300", "#ff2702", "#6b9404"]

let building = new Building(400,0,50,10,23)

function setup() {
  C.createCanvas()
  angleMode(DEGREES)
  background("#fffceb")



  // We define the brushes for the hatches, and the brushes for the strokes
  let hatch_brushes = ["marker1"]
  let stroke_brushes = ["2H", "HB", "charcoal"]
    
}


function draw() {
  brush.fillAnimatedMode(true);
  frameRate(24);
  background("#fffceb")
  // translate(-width / 2, -height / 2)
  //   // We create a grid here
  //   let num_cols = 12
  //   let num_rows = 6
  //   let border = 300;
  //   let col_size = (width - border) / num_cols
  //   let row_size = (height - border) / num_rows
  // // We draw the rectangular grid here
  // for (let i = 0; i < num_rows; i++) {
  //   for (let j = 0; j < num_cols; j++) {
  //     brush.fill(random(palette), 100)
  //     brush.bleed(0.1,"in")
  //     brush.rect(border / 2 + col_size * j, border / 2 + row_size * i, col_size, row_size)
  //     brush.noStroke()
  //     brush.noFill()
  //     brush.noHatch()
  //   }
  // }
  building.display();

}



