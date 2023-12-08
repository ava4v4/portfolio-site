let x, y; 
let xspeed = 7;
let yspeed = 7; 
let xdirection = 1; 
let ydirection = 1; 
let d = 10; 
let count = 100; 

function setup() {
  var canvas = createCanvas(windowWidth, 55);
  canvas.parent("dots");
  x = width/4;
  y = height/8;
  w = width + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
  clear();
}

function draw() {
  calcWave();
  renderWave();
//   count += 1; 
//     if (count == 355){
//       count = 3; 
//     }
  
//   x = x + xspeed*xdirection;
//   y = y + yspeed*ydirection;
  
//     if (x > width - d/2 || x < d/2) { 
//       xdirection*= -1; 
//     }
//     if (y > height - d/34 || y < d/2) {
//       ydirection*= -1; 
//     }

//   noStroke();
//   fill(count, count -75, count + 300);
//   for (let x = 0; x < yvalues.length; x++) {
//     ellipse(x * xspacing, height / 2 + yvalues[x], 16, 16);
//   }
}


let xspacing = 16; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 10.0; // Height of wave
let period = 500.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave
let colorUp=true;


function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.04;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  noStroke();
    if (count == 300 && colorUp){
      colorUp=false;
    } 
    if (count == 0 && !colorUp){
        colorUp=true;
    } 
    if (colorUp) {
        count+=1;
    } else {
        count-=1;
    }
  fill(count, count + 100, count + 300);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, height / 2 + yvalues[x], 16, 16);
  }
}