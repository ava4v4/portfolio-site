let x, y; 
let xspeed = 7;
let yspeed = 5; 
let xdirection = 8; 
let ydirection = 5; 
let d = 50; 
let count = 100; 

function setup() {
  createCanvas(800, 400);
  x = width/2;
  y = height/2;
  background(100, 0, 255);
}

function draw() {
  count += 1; 
    if (count == 255){
      count = 0; 
    }
  
  x = x + xspeed*xdirection;
  y = y + yspeed*ydirection;
  
    if (x > width - d/2 || x < d/2) { 
      xdirection*= -1; 
    }
    if (y > height - d/34 || y < d/2) {
      ydirection*= -1; 
    }

  noStroke();
  fill(count, count -175, count + 300);
  ellipse(x, y, d, d);
 

}