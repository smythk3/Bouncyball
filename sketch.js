var x = 12.5;
var speed;
speed = 5;

var y = 10;



function setup() {
  createCanvas(800,500);
  
  
}

function draw() {
  background(255);
  // we need a ball
  //the ball needs a colour
  fill(125);
  ellipse(x, y, 25, 25 );
  // the ball needs to move
  // this means we need to increment x
  
  x = x + speed;
  y = y + speed;
  
  if(y > 480 || y < 12.5) {
    
    speed = -speed
  }
  
  
  if(x > 790 || x < 12.5) {
    
   speed = -speed;
  }
  
  
  
  //if the x value goes over 800, change the variable x
  
  
}