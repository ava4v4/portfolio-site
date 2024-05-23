const s = ( sketch ) => {

let x, y; 
let xspeed = 0;
let yspeed = 6; 
let xdirection = 1; 
let ydirection = 1; 
let d = 100; 
let count = 100; 
let redcount = 240; 
let bluecount = 100; 
let greencount = 100; 
let honeydew = sketch.color(58,197,224);
let rosemist = sketch.color(188,218,238);
let seashell = sketch.color(255,246,252);
let honeyToRose = true;
let roseToSeashell = false;
let seashellToHoney = false;
let gradcount = 0;
let fillcolor = honeydew;
let incr = .5;

sketch.setup = () => {
  sketch.createCanvas(sketch.windowWidth, sketch.windowHeight - 100);
  x = sketch.width/2;
  y = sketch.height/2;
  w = sketch.width + 200;
  dx = (sketch.TWO_PI / period) * xspacing;
  yvalues = new Array(sketch.floor(w / xspacing));
  sketch.clear();
}
//240,255,240
//255,228,225
//255,245,238
sketch.draw = () => {
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


let xspacing = 40; // Distance between each horizontal location
let w = 600; // Width of entire wave
let theta = 1; // Start angle at 0
let amplitude = sketch.windowHeight - 100; // Height of wave
let period = 100.0; // How many pixels before the wave repeats
let dx = 12.0; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave
let colorUp=true;


function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 1;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 1; i < yvalues.length; i++) {
    yvalues[i] = sketch.sin(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  sketch.noStroke();
    // if (count == 255 && colorUp){
    //   colorUp=false;
    // } 
    // if (count == 0 && !colorUp){
    //     colorUp=true;
    // } 
    // if (colorUp) {
    //     count+=1;
    // } else {
    //     count-=1;
    // }
  if (honeyToRose) {
    gradcount += incr;
    fillcolor = sketch.lerpColor(honeydew, rosemist, gradcount);
    if (gradcount > 1) {
      honeyToRose = false;
      roseToSeashell = true;
      gradcount = 0;
    }
  }
  if (roseToSeashell) {
    gradcount += incr;
    fillcolor = sketch.lerpColor(rosemist, seashell, gradcount);
    if (gradcount > 1) {
      roseToSeashell = false;
      seashellToHoney = true;
      gradcount = 0;
    }
  }
  if (seashellToHoney) {
    gradcount += incr;
    fillcolor = sketch.lerpColor(seashell, honeydew, gradcount);
    if (gradcount > 1) {
      seashellToHoney = false;
      honeyToRose = true;
      gradcount = 0;
    }
  }
  sketch.fill(fillcolor);
  //sketch.fill(count + 1, count + 1, count + 1);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    sketch.ellipse(x * xspacing, sketch.height / 2 + yvalues[x], 26, 16);
  }
}

};

let myp5 = new p5(s, 'dots');
// let myp52 = new p5(s, 'content');