const alphabet = {
  "default": {
    "size": 40,
    "offsetx": 0,
    "offsety": 0
  },
  "A": {
    //a
    "size": 60,
    "offsetx": 0,
    "offsety": 0,
    "start" : 180,
    "stop" : 360

  },
  "B": {
    // arc
    "size": 60,
    "offsetx": 0,
    "offsety": 0,
    "start" : 270,
    "stop" : 90,
    //stalk
    "2offsetx": -50,
    "2offsety": -100,
    "2offsetw": -30,
    "2offseth": 0
  },
  "C": {
    //c
    "size": 70,
    "offsetx": 0,
    "offsety": 0,
    "start" : 90,
    "stop" : 270
  },
  "D": {
    //d arc
    "size": 60,
    "offsetx": 0,
    "offsety": 0,
    "start" : 90,
    "stop" : 270,
    //stalk
    "2offsetx": 30,
    "2offsety": -100,
    "2offsetw": -30,
    "2offseth": 0
  },
  "E": {
    //e
    "size": 60,
    "offsetx": 0,
    "offsety": 0,
    "start" : 180,
    "stop" : 360,
    //e arc
    "1size": 42,
    "1offsetx": -5,
    "1offsety": 12,
    "1start" : 28.8,
    "1stop" : 176.4
  },
  "F": {
    //top arc
    "size": 85,
    "offsetx": -3,
    "offsety": -60,
    "start" : 180,
    "stop" : 360,
    //stalk
    "2offsetx": -45,
    "2offsety": -70,
    "2offsetw": -30,
    "2offseth": -30,
    //top cut out
    "3size": 55,
    "3offsetx": 2,
    "3offsety": -57,
    "3start" : 180,
    "3stop" : 360,
    //bottom arc
    "1size": 75,
    "1offsetx": 3,
    "1offsety": -10,
    "1start" : 180,
    "1stop" : 360,
    //bottom cut out
    "4size": 55,
    "4offsetx": 3,
    "4offsety": -9,
    "4start" : 180,
    "4stop" : 360,
  },
  "G": {
    //g
    "1size": 60,
    "1offsetx": 0,
    "1offsety": 0,
    "1start" : 90,
    "1stop" : 270,
    //stalk
    "2offsetx": 30,
    "2offsety": -50,
    "2offsetw": -30,
    "2offseth": 0,
    //g arc
    "size": 85,
    "offsetx": 8.5,
    "offsety": 80,
    "start" : 360,
    "stop" : 180,
    //g arc cut out
    "3size": 55,
    "3offsetx": 3,
    "3offsety": 80,
    "3start" : 360,
    "3stop" : 180,

  },
  "H": {
    //stalk
    "2offsetx": -50,
    "2offsety": -100,
    "2offsetw": -30,
    "2offseth": 0,
    //arc
    "1size": 75,
    "1offsetx": 3,
    "1offsety": -10,
    "1start" : 180,
    "1stop" : 360,
    //cut out
    "4size": 50,
    "4offsetx": 0,
    "4offsety": -5,
    "4start" : 180,
    "4stop" : 360,
    //baby stalk
    "5offsetx": 24,
    "5offsety": -25,
    "5offsetw": -30,
    "5offseth": -75,
  },
  "I": {
    //i stalk
    "5offsetx": -10,
    "5offsety": -15,
    "5offsetw": -30,
    "5offseth": -90,
    //dot
    "1size": 20,
    "1offsetx": 0,
    "1offsety": -30,
    "1start" : 0,
    "1stop" : 360,
  },
  "J": {
    //j stalk
    "2offsetx": -10,
    "2offsety": -15,
    "2offsetw": -30,
    "2offseth": -40,
    //dot
    "1size": 20,
    "1offsetx": 0,
    "1offsety": -30,
    "1start" : 0,
    "1stop" : 360,
    //j arc
    "size": 65,
    "offsetx": -23,
    "offsety": 79,
    "start" : 360,
    "stop" : 180,
    //j arc cut out
    "3size": 30,
    "3offsetx": -25,
    "3offsety": 75,
    "3start" : 360,
    "3stop" : 180,
  },
  "K": {
    //stalk
    "2offsetx": -45,
    "2offsety": -55,
    "2offsetw": -30,
    "2offseth": -45,
    //k top
    "1size": 70,
    "1offsetx": -15,
    "1offsety": -5,
    "1start" : 305,
    "1stop" : -15,
    //k bottom
    "size": 70,
    "offsetx": -15,
    "offsety": 5,
    "start" : 15,
    "stop" : -305,
  },
  "L": {
    //l stalk
    "2offsetx": -10,
    "2offsety": -50,
    "2offsetw": -30,
    "2offseth": -45,
  },
  "M": {
    "size": 50,
    "offsetx": 15,
    "offsety": 0
  },
  "N": {
    //n
    "size": 60,
    "offsetx": 0,
    "offsety": 10,
    "start" : 180,
    "stop" : 0,
    //n cut out
    "4size": 30,
    "4offsetx": 0,
    "4offsety": 11,
    "4start" : 180,
    "4stop" : 0,
  },
  "O": {
    //o bottom
    "size": 60,
    "offsetx": 0,
    "offsety": 0,
    "start" : 0,
    "stop" : 180,
    //0 bottom cut out
    "4size": 30,
    "4offsetx": 0,
    "4offsety": 0,
    "4start" : 0,
    "4stop" : 180,
    //o top
    "1size": 60,
    "1offsetx": 0,
    "1offsety": 0,
    "1start" : 180,
    "1stop" : 0,
    //o top cut out
    "6size": 30,
    "6offsetx": 0,
    "6offsety": 0,
    "6start" : 180,
    "6stop" : 0,
    
  },
  "P": {
    // arc
    "size": 60,
    "offsetx": 0,
    "offsety": 0,
    "start" : 270,
    "stop" : 90,
    //stalk
    "2offsetx": -50,
    "2offsety": -50,
    "2offsetw": -30,
    "2offseth": 0
  },
  "Q": {
    //d arc
    "size": 60,
    "offsetx": 0,
    "offsety": 0,
    "start" : 90,
    "stop" : 270,
    //stalk
    "2offsetx": 30,
    "2offsety": -50,
    "2offsetw": -30,
    "2offseth": 0
  },
  "R": {
    //r stalk
    "5offsetx": -25,
    "5offsety": -25,
    "5offsetw": -30,
    "5offseth": -90,
    //r arc
    "size": 60,
    "offsetx": 5,
    "offsety": -5,
    "start" : 180,
    "stop" : 360,
    //r arc cut out
    "4size": 30,
    "4offsetx": 10,
    "4offsety": -4,
    "4start" : 180,
    "4stop" : 360,
  },
  "S": {
    //s top
    "size": 50,
    "offsetx": 10,
    "offsety": -5,
    "start" : 180,
    "stop" : 0,
    //s top cut out
    "4size": 25,
    "4offsetx": 10,
    "4offsety": -4,
    "4start" : 180,
    "4stop" : 0,
    //s bottom
    "1size": 50,
    "1offsetx": -10,
    "1offsety": 5,
    "1start" : 0,
    "1stop" : 180,
    //s bottom cut out
    "6size": 25,
    "6offsetx": -10,
    "6offsety": 4,
    "6start" : 0,
    "6stop" : 180,
  },
  "T": {
    //cross
    "2offsetx": -29,
    "2offsety": -10,
    "2offsetw": 10,
    "2offseth": -135,
    //t
    "5offsetx": -10,
    "5offsety": -50,
    "5offsetw": -30,
    "5offseth": -50,
  },
  "U": {
    //u
    "size": 60,
    "offsetx": 0,
    "offsety": -5,
    "start" : 0,
    "stop" : 180,
    //u cut out
    "4size": 30,
    "4offsetx": 0,
    "4offsety": -6,
    "4start" : 0,
    "4stop" : 180,
  },
  "V": {
    //v
    "size": 50,
    "offsetx": 0,
    "offsety": 0,
    "start" : 300,
    "stop" : 240,
  },
  "W": {
    "size": 50,
    "offsetx": 15,
    "offsety": 0
  },
  "X": {
    "size": 50,
    "offsetx": 15,
    "offsety": 0
  },
  "Y": {
    "size": 50,
    "offsetx": 15,
    "offsety": 0
  },
  "Z": {
    "size": 50,
    "offsetx": 15,
    "offsety": 0
  },
  "0": {
    "size": 40,
    "offsetx": 0,
    "offsety": 17
  },
  "1": {
    "size": 40,
    "offsetx": 0,
    "offsety": 17
  },
  "2": {
    "size": 40,
    "offsetx": 0,
    "offsety": 17
  },
  "3": {
    "size": 40,
    "offsetx": 0,
    "offsety": 17
  },
  "4": {
    "size": 40,
    "offsetx": 0,
    "offsety": 17
  },
  "5": {
    "size": 40,
    "offsetx": 0,
    "offsety": 17
  },
  "6": {
    "size": 40,
    "offsetx": 0,
    "offsety": 17
  },
  "7": {
    "size": 40,
    "offsetx": 0,
    "offsety": 17
  },
  "8": {
    "size": 40,
    "offsetx": 0,
    "offsety": 17
  },
  "9": {
    "size": 40,
    "offsetx": 0,
    "offsety": 17
  }

}