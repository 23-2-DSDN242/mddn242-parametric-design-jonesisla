/* these are optional special variables which will change the system */
var systemBackgroundColor = "#caf0f8";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";
const strokeColor  = "#03045e";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // determine parameters for second circle
  // let size2 = letterData["size"];
  // let pos2x = 50  + letterData["offsetx"];
  // let pos2y = 150 + letterData["offsety"];


  // // draw two circles
  // fill(darkBlue);
  // ellipse(50, 150, 75, 75);
  // fill(lightBlue);
  // ellipse(pos2x, pos2y, size2, size2);
angleMode(DEGREES);

  //test
  let size1 = letterData["size"];
  let posx1 = 50 + letterData["offsetx"];
  let posy1 = 150 + letterData["offsety"];
  let start1 = (letterData["start"]);
  let stop1 = (letterData["stop"]);

  let size2= letterData["1size"];
  let posx2 = 50 + letterData["1offsetx"];
  let posy2 = 150 + letterData["1offsety"];
  let start2 = (letterData["1start"]);
  let stop2 = (letterData["1stop"]);

  let posx3 = 50 + letterData["2offsetx"];
  let posy3 = 150 + letterData["2offsety"];
  let posx30 = 50 + letterData["20offsetx"];
  let posy30 = 150 + letterData["20offsety"];
  

  // draw two circles
  fill(darkBlue);
  ellipse(50, 150, 90, 90);
  fill(lightBlue);
  arc(posx1, posy1, size1, size1, start1, stop1);
  arc(posx2, posy2, size2, size2, start2, stop2);
  line(posx3, posx30, posy3, posy30);

//end test



}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
