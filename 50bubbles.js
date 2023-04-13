//let Bubbles;
function setup() {
  createCanvas(960, 540);
  Bubbles = [];
  for (let bubblesDrawn = 0; bubblesDrawn < 50; bubblesDrawn++) {
    let thisX = random(width);
    let thisY = random(height);
    Bubbles[bubblesDrawn] = new Bubble(thisX, thisY);
  }
}

function draw() {
  background(0);
  for (let BubblesShown = 0; BubblesShown < 50; BubblesShown++) {
    Bubbles[BubblesShown].move();
    Bubbles[BubblesShown].show();
  }
}
class Bubble {
  constructor() {
    this.x = 200;
    this.y = 150;
  }
  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 24);
  }
}
