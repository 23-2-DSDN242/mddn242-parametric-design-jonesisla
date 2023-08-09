const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "size": 80,
  "offsetx": 0,
  "offsety": -10,
  "start" : 180,
  "stop" : 360
}

const letterB = {
  "size": 57,
  "offsetx": 5,
  "offsety": 30,
  "start" : 270,
  "stop" : 360+90,

  "1size": 57,
  "1offsetx": 5,
  "1offsety": -30,
  "1start" : 270,
  "1stop" : 360+90
}

const letterC = {
  "size": 100,
  "offsetx": -10,
  "offsety": 0,
  "start" : 90,
  "stop" : 270
}

const backgroundColor  = "#caf0f8";
const strokeColor      = "#03045e";

const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size1 = letterData["size"];
  let pos1x = posx + letterData["offsetx"];
  let pos1y = posy + letterData["offsety"];
  let start1 = radians(letterData["start"]);
  let stop1 = radians(letterData["stop"]);

  let size2= letterData["1size"];
  let pos2x = posx + letterData["1offsetx"];
  let pos2y = posy + letterData["1offsety"];
  let start2 = radians(letterData["1start"]);
  let stop2 = radians(letterData["1stop"]);

  // draw two circles
  fill(darkBlue);
  ellipse(posx, posy, 150, 150);
  fill(lightBlue);
  arc(pos1x, pos1y, size1, size1, start1, stop1);
  arc(pos2x, pos2y, size2, size2, start2, stop2);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
