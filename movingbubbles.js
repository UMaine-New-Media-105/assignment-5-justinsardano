let bubble1;
let bubble2;
let bubble3;
let bubble4;
let bubble5;

function setup() {
  createCanvas(960, 540);
  bubble1= new Bubble()
    bubble2= new Bubble()
    bubble3= new Bubble()
    bubble4= new Bubble()
    bubble5= new Bubble()
}

function draw() {
  background(0);
 bubble1.move()
  bubble1.show()
  bubble2.move()
  bubble2.show()
   bubble3.move()
  bubble3.show()
   bubble4.move()
  bubble4.show()
   bubble5.move()
  bubble5.show()
  
  
}
class Bubble{
  constructor(){
    this.x=200
    this.y=150
  }
  move(){
    this.x=this.x+random(-5,5)
    this.y=this.y+random(-5,5)
  }
  show(){
    stroke(255)
    strokeWeight(4)
    noFill()
    ellipse(this.x, this.y,24)
  }
}
function addBubble(x,y,size) {
  translate(x,y)
  scale(size)
 strokeWeight(4)
  noFill()
  ellipse(20,20,50)
}
