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

  //basic arc no.3
  let size8= letterData["7size"];
  let posx8 = 50 + letterData["7offsetx"];
  let posy8 = 150 + letterData["7offsety"];
  let start8 = (letterData["7start"]);
  let stop8 = (letterData["7stop"]);

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
  //light blue arc to cover the cut outs
  fill(lightBlue);
  arc(posx8, posy8, size8, size8, start8, stop8);

//end test



}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["start"] = map(percent, 0, 100, oldObj["start"], newObj["start"]);
  new_letter["stop"] = map(percent, 0, 100, oldObj["stop"], newObj["stop"]);

  new_letter["1size"]    = map(percent, 0, 100, oldObj["1size"], newObj["1size"]);
  new_letter["1offsetx"] = map(percent, 0, 100, oldObj["1offsetx"], newObj["1offsetx"]);
  new_letter["1offsety"] = map(percent, 0, 100, oldObj["1offsety"], newObj["1offsety"]);
  new_letter["1start"] = map(percent, 0, 100, oldObj["1start"], newObj["1start"]);
  new_letter["1stop"] = map(percent, 0, 100, oldObj["1stop"], newObj["1stop"]);

  new_letter["7size"]    = map(percent, 0, 100, oldObj["7size"], newObj["7size"]);
  new_letter["7offsetx"] = map(percent, 0, 100, oldObj["7offsetx"], newObj["7offsetx"]);
  new_letter["7offsety"] = map(percent, 0, 100, oldObj["7offsety"], newObj["7offsety"]);
  new_letter["7start"] = map(percent, 0, 100, oldObj["7start"], newObj["7start"]);
  new_letter["7stop"] = map(percent, 0, 100, oldObj["7stop"], newObj["7stop"]);

  new_letter["3size"]    = map(percent, 0, 100, oldObj["3size"], newObj["3size"]);
  new_letter["3offsetx"] = map(percent, 0, 100, oldObj["3offsetx"], newObj["3offsetx"]);
  new_letter["3offsety"] = map(percent, 0, 100, oldObj["3offsety"], newObj["3offsety"]);
  new_letter["3start"] = map(percent, 0, 100, oldObj["3start"], newObj["3start"]);
  new_letter["3stop"] = map(percent, 0, 100, oldObj["3stop"], newObj["3stop"]);

  new_letter["4size"]    = map(percent, 0, 100, oldObj["4size"], newObj["4size"]);
  new_letter["4offsetx"] = map(percent, 0, 100, oldObj["4offsetx"], newObj["4offsetx"]);
  new_letter["4offsety"] = map(percent, 0, 100, oldObj["4offsety"], newObj["4offsety"]);
  new_letter["4start"] = map(percent, 0, 100, oldObj["4start"], newObj["4start"]);
  new_letter["4stop"] = map(percent, 0, 100, oldObj["4stop"], newObj["4stop"]);
  
  new_letter["6size"]    = map(percent, 0, 100, oldObj["6size"], newObj["6size"]);
  new_letter["6offsetx"] = map(percent, 0, 100, oldObj["6offsetx"], newObj["6offsetx"]);
  new_letter["6offsety"] = map(percent, 0, 100, oldObj["6offsety"], newObj["6offsety"]);
  new_letter["6start"] = map(percent, 0, 100, oldObj["6start"], newObj["6start"]);
  new_letter["6stop"] = map(percent, 0, 100, oldObj["6stop"], newObj["6stop"]);

  new_letter["2offsetx"] = map(percent, 0, 100, oldObj["2offsetx"], newObj["2offsetx"]);
  new_letter["2offsety"] = map(percent, 0, 100, oldObj["2offsety"], newObj["2offsety"]);
  new_letter["2offsetw"] = map(percent, 0, 100, oldObj["2offsetw"], newObj["2offsetw"]);
  new_letter["2offseth"] = map(percent, 0, 100, oldObj["2offseth"], newObj["2offseth"]);

  new_letter["5offsetx"] = map(percent, 0, 100, oldObj["5offsetx"], newObj["5offsetx"]);
  new_letter["5offsety"] = map(percent, 0, 100, oldObj["5offsety"], newObj["5offsety"]);
  new_letter["5offsetw"] = map(percent, 0, 100, oldObj["5offsetw"], newObj["5offsetw"]);
  new_letter["5offseth"] = map(percent, 0, 100, oldObj["5offseth"], newObj["5offseth"]);
  return new_letter;
}



//Ritas Rotation Variables. 

// let new_letter = {};
// let old_cirRot = oldObj["cirRot"];
// let new_cirRot = newObj["cirRot"];
// if (old_cirRot > new_cirRot) {
//   new_cirRot = new_cirRot + 360;
// }
// new_letter["cirRot"] = map(percent, 0, 100, old_cirRot, new_cirRot);
// new_letter["slant1"] = map(percent, 0, 100, oldObj["slant1"], newObj["slant1"]);
// new_letter["rectTran0"] = map(percent, 0, 100, oldObj["rectTran0"], newObj["rectTran0"]);
// new_letter["slant2Type"] = map(percent, 0, 100, oldObj["slant2Type"], newObj["slant2Type"]);
// new_letter["rectTran1"] = map(percent, 0, 100, oldObj["rectTran1"], newObj["rectTran1"]);
// new_letter["rectTranX2"] = map(percent, 0, 100, oldObj["rectTranX2"], newObj["rectTranX2"]);
// new_letter["rectTranY2"] = map(percent, 0, 100, oldObj["rectTranY2"], newObj["rectTranY2"]);
// new_letter["cirRad"] = map(percent, 0, 100, oldObj["cirRad"], newObj["cirRad"]);
// new_letter["rectLen"] = map(percent, 0, 100, oldObj["rectLen"], newObj["rectLen"]);
// new_letter["rectGap"] = map(percent, 0, 100, oldObj["rectGap"], newObj["rectGap"]);
// new_letter["rectWidth"] = map(percent, 0, 100, oldObj["rectWidth"], newObj["rectWidth"]);
// new_letter["cirStroke"] = map(percent, 0, 100, oldObj["cirStroke"], newObj["cirStroke"]);
// new_letter["coverCir"] = map(percent, 0, 100, oldObj["coverCir"], newObj["coverCir"]);
// return new_letter;
// }




var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
