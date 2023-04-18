function setup() {
  createCanvas(960, 540);
  addX = -3;
  Bubbles = [];

  for (let bubblesDrawn = 0; bubblesDrawn < 50; bubblesDrawn++) {
    let thisX = random(width);
    let thisY = random(height);
    Bubbles[bubblesDrawn] = new Bubble(thisX, thisY);

    breeders = [];
    for (let breederDefined = 0; breederDefined < 25; breederDefined++) {
      let thisX = random(width);
      let thisY = random(height);
      breeders.push(new Breeder(thisX, thisY));

      catchers = [];
      for (let catcherDefined = 0; catcherDefined < 2; catcherDefined++) {
        let thisX = random(width);
        let = random(height);
        catchers.push(new Catcher(thisX, thisY));
      }
    }
  }
}

function draw() {
  background("black");
  for (let BubblesShown = 0; BubblesShown < 50; BubblesShown++) {
    Bubbles[BubblesShown].move();
    Bubbles[BubblesShown].show();
  }
  for (let catcherShown = 0; catcherShown < 2; catcherShown++) {
    catchers[catcherShown].move();
    catchers[catcherShown].show();
  }
  for (let breederShown = 0; breederShown < 25; breederShown++) {
    breeders[breederShown].move();
    breeders[breederShown].show();
  }
}
class Bubble {
  constructor(x, y) {
    this.x = random(960);
    this.y = random(540);
  }
  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
  show() {
    push();
    fill("yellow");
    ellipse(this.x, this.y, 12);
    pop();
  }
}
class Catcher {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.addX = addX;
  }
  move() {
    this.x = this.x + this.addX;
    this.y = this.y;
    // Reverse if it hits a wall.
    let isTooFarLeft = this.x < 0;
    let isTooFarRight = this.x > width;
    if (isTooFarLeft || isTooFarRight) {
      this.addX = -this.addX;
      this.y = random(height);
    }
  }
  show() {
    push();
    translate(this.x, this.y);
    fill("gray");
    ellipse(50, 50, 100);
    fill("lightgray");
    ellipse(50, 50, 50);
    fill("cyan");
    ellipse(50, 15, 12);
    ellipse(75, 25, 12);
    ellipse(15, 50, 12);
    ellipse(50, 85, 12);
    ellipse(25, 75, 12);
    ellipse(25, 25, 12);
    ellipse(75, 75, 12);
    ellipse(85, 50, 12);
    pop();
  }
}
class Breeder {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.addX = addX;
  }
  move() {
    this.x = this.x + this.addX;
    this.y = this.y;
    let isTooFarLeft = this.x < 0;
    let isTooFarRight = this.x > width;
    if (isTooFarLeft || isTooFarRight) {
      this.addX = -this.addX;
      this.y = random(height);
    }
  }
  show() {
    push();
    translate(this.x, this.y);
    fill("gray");
    ellipse(100, 25, 50);
    fill("lightgray");
    rect(0, 0, 75, 50);
    rect(125, 0, 75, 50);
    fill("red");
    ellipse(100, 25, 10);
    pop();
  }
}
