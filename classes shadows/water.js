class Water{
    constructor(){
        this.yoff = 0;
    }
    display(){
        fill(50,0,50,122);
        // We are going to draw a polygon out of the wave points
        beginShape();
        noStroke();
        let xoff = 0; // Option #1: 2D Noise
        // let xoff = yoff; // Option #2: 1D Noise
      
        // Iterate over horizontal pixels
        for (let x = -width/2; x <= width/2; x += 10) {
          // Calculate a y value according to noise, map to
      
          // Option #1: 2D Noise
          let y = map(noise(xoff, this.yoff), 0, 1, 90, 95);
      
          // Option #2: 1D Noise
          // let y = map(noise(xoff), 0, 1, 200,300);
      
          // Set the vertex
          vertex(x, y);
          // Increment x dimension for noise
          xoff += 0.05;
        }
        // increment y dimension for noise
        this.yoff += 0.01;
        vertex(width, height);
        vertex(-width, height);
        endShape(CLOSE);
    }
   
}