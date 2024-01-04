let camera;
let xScale;
let yScale;
let modeX = 100;
let modeX_speed = 0.5;

function setup() {
    var canvas2 = createCanvas(windowWidth, 55);
    canvas2.parent("content");
  createCanvas(windowWidth, windowHeight);
  noStroke();

  // camera setup
  camera = createCapture(VIDEO);
  camera.size(40, 30);
  camera.hide();

  // scale setup
  xScale = width / camera.width;
  yScale = height / camera.height;
}

function draw() {
  background(50);

  camera.loadPixels();

  modeX = modeX + modeX_speed;
  if (modeX > 300) {
    modeX_speed = -modeX_speed;
  } else if (modeX < 100) {
    modeX_speed = -modeX_speed;
  }

  // loop tho pixels
  for (let row = 0; row < camera.height; row++) {
    for (let col = camera.width; col >= 0; col--) {

      // get rgb values for each pixel
      let i = (col + row * camera.width) * 4;
      let r = camera.pixels[i + 0];
      let g = camera.pixels[i + 1];
      let b = camera.pixels[i + 2];
      let h = hue(color(r, g, b));
      let s = saturation(color(r, g, b));
      let l = brightness(color(r, g, b));

//      colorMode(HSB, 255);

      fill(r, g, b);
      ellipse((camera.width - col - 1) * xScale, row * yScale, xScale * h/255, yScale * h / 255);
    }
  }
  camera.updatePixels();
}