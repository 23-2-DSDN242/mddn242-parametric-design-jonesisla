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

  //basic arc
  let size1 = letterData["size"];
  let posx1 = 50 + letterData["offsetx"];
  let posy1 = 150 + letterData["offsety"];
  let start1 = (letterData["start"]);
  let stop1 = (letterData["stop"]);

  //basic arc no.2
  let size2= letterData["1size"];
  let posx2 = 50 + letterData["1offsetx"];
  let posy2 = 150 + letterData["1offsety"];
  let start2 = (letterData["1start"]);
  let stop2 = (letterData["1stop"]);

  //rectangle
  let posx3 = 50 + letterData["2offsetx"];
  let posy3 = 150 + letterData["2offsety"];
  let posw3 = 50 + letterData["2offsetw"];
  let posh3 = 150 + letterData["2offseth"];

  //rectangle n0.2
  let posx6 = 50 + letterData["5offsetx"];
  let posy6 = 150 + letterData["5offsety"];
  let posw6 = 50 + letterData["5offsetw"];
  let posh6 = 150 + letterData["5offseth"];

  //arc for cut outs
  let size4= letterData["3size"];
  let posx4 = 50 + letterData["3offsetx"];
  let posy4 = 150 + letterData["3offsety"];
  let start4 = (letterData["3start"]);
  let stop4 = (letterData["3stop"]);

  //arc for cut outs n0.2
  let size5= letterData["4size"];
  let posx5 = 50 + letterData["4offsetx"];
  let posy5 = 150 + letterData["4offsety"];
  let start5 = (letterData["4start"]);
  let stop5 = (letterData["4stop"]);

  //arc for cut outs n0.3
  let size7= letterData["6size"];
  let posx7 = 50 + letterData["6offsetx"];
  let posy7 = 150 + letterData["6offsety"];
  let start7 = (letterData["6start"]);
  let stop7 = (letterData["6stop"]);
  

  // dark blue arcs
  fill(darkBlue);
  ellipse(50, 150, 90, 90);
  //light blue arcs and rectangle
  fill(lightBlue);
  arc(posx2, posy2, size2, size2, start2, stop2);
  rect(posx3, posy3, posw3, posh3, 20);
  arc(posx1, posy1, size1, size1, start1, stop1);
  rect(posx6, posy6, posw6, posh6, 20);
  //cut out arcs
  fill("#caf0f8");
  arc(posx4, posy4, size4, size4, start4, stop4);
  //dark blue cut outs
  fill(darkBlue);
  noStroke();
  arc(posx5, posy5, size5, size5, start5, stop5);
  arc(posx7, posy7, size7, size7, start7, stop7);

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
