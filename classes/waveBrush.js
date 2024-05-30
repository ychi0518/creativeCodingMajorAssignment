class WaveBrush {
    constructor(xPos, yPos, width, height) {
      this.xPos = xPos;
      this.yPos = yPos;
      this.width = width;
      this.height = height;
      this.lifespan = random(144);
      this.limit = createVector(width, height);
      this.position = createVector(this.xPos - this.width + random(this.width * 2), this.yPos - this.height + random(this.height * 2));
      this.velocity = createVector(-5, 1);
      this.velocity.setMag(random(2, 4));
      this.acceleration = createVector();
      this.maxForce = 0.2;
      this.maxSpeed = 3;
    }
    edges() {
      if (this.position.x > this.width + this.xPos) {
        this.position.x = -this.width + this.xPos;
      } else if (this.position.x < -this.width + this.xPos) {
        this.position.x = this.width+this.xPos;
      }
      if (this.position.y > this.height + this.yPos) {
        this.position.y = -this.height + this.yPos;
      } else if (this.position.y < -this.height + this.yPos) {
        this.position.y = this.height + this.yPos;
      }
    }
  
    align(waves) {
      let perceptionRadius = 25;
      let steering = createVector();
      let total = 0;
      for (let other of waves) {
        let distance = dist(this.position.x, this.position.y, other.position.x, other.position.y);
        if (other != this && distance < perceptionRadius) {
          steering.add(other.velocity);
          total++;
        }
      }
      if (total > 0) {
        steering.div(total);
        steering.setMag(this.maxSpeed);
        steering.sub(this.velocity);
        steering.limit(this.maxForce);
      }
      return steering;
    }
  
    seperation(waves) {
      let perceptionRadius = 24;
      let steering = createVector();
      let total = 0;
      for (let other of waves) {
        let distance = dist(this.position.x, this.position.y, other.position.x, other.position.y);
        if (other != this && distance < perceptionRadius) {
          let difference = p5.Vector.sub(this.position, other.position);
          difference.div(distance * distance);
          steering.add(difference);
          total++;
        }
      }
      if (total > 0) {
        steering.div(total);
        steering.setMag(this.maxSpeed);
        steering.sub(this.velocity);
        steering.limit(this.maxForce);
      }
      return steering;
    }
    cohension(waves) {
      let perceptionRadius = 24;
      let steering = createVector();
      let total = 0;
      for (let other of waves) {
        let distance = dist(this.position.x, this.position.y, other.position.x, other.position.y);
        if (other != this && distance < perceptionRadius) {
          steering.add(other.position);
          total++;
        }
      }
      if (total > 0) {
        steering.div(total);
        steering.sub(this.position);
        steering.setMag(this.maxSpeed);
        steering.sub(this.velocity);
        steering.limit(this.maxForce);
      }
      return steering;
    }
    flock(waves, alignmentValue, cohensionValue, seperationValue) {
      let alignment = this.align(waves);
      let cohension = this.cohension(waves);
      let seperation = this.seperation(waves);
  
      alignment.mult(alignmentValue);
      cohension.mult(cohensionValue);
      seperation.mult(seperationValue);
  
      this.acceleration.add(alignment);
      this.acceleration.add(cohension);
      this.acceleration.add(seperation);
    }
    update() {
      this.position.add(this.velocity);
      this.velocity.add(this.acceleration);
      this.velocity.limit(this.maxSpeed);
      this.acceleration.mult(0);
      if (this.lifespan > 0) {
        this.lifespan -= 1;
      } else {
        this.lifespan = 144
        this.position = createVector(this.xPos - this.width + random(this.width * 2), this.yPos - this.height + random(this.height * 2));
        this.velocity = createVector(-5, 1);
      }
    }
  
    display() {
      push();
      translate(this.xPos, this.yPos);
      stroke(0);
      noFill();
      rect(this.xPos - this.width, this.yPos-this.height, this.width*2, this.height*2);
      brush.set("charcoal", "#4400FF", .4);
      let points = []
      if (this.lifespan > 72) {
        points = [
          [this.position.x - 25, this.position.y],
          [this.position.x, this.position.y + 10],
          [this.position.x + 25, this.position.y]
        ];
      }
      else if (this.lifespan > 48) {
        points = [
          [this.position.x - 25, this.position.y],
          [this.position.x, this.position.y + 5],
          [this.position.x + 25, this.position.y]
        ];
      }
        else if (this.lifespan > 24) {
        points = [
          [this.position.x - 25, this.position.y],
          [this.position.x, this.position.y - 5],
          [this.position.x + 25, this.position.y]
        ];
      }
      else if (this.lifespan > 0) {
        points = [
          [this.position.x - 25, this.position.y],
          [this.position.x, this.position.y],
          [this.position.x + 25, this.position.y]
        ];
      }
      brush.beginShape(.5);
      print(points);
      for(let point of points){
        brush.vertex(point[0], point[1]);
      }
      brush.endShape();
      pop();
    }
  }