const alphabet = {
  "default": {
    "size": 40,
    "offsetx": 0,
    "offsety": 0
  },
  "A": {
    //a arc
    "size": 60,
    "offsetx": 0,
    "offsety": 0,
    "start" : 90,
    "stop" : 270,
    //a stalk
    "2offsetx": 30,
    "2offsety": -50,
    "2offsetw": -30,
    "2offseth": -50,
  },
  "B": {
    //b arc
    "size": 60,
    "offsetx": 0,
    "offsety": 0,
    "start" : 270,
    "stop" : 90,
    //b stalk
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
    "stop" : 270,
    //c cut out
    "4size": 35,
    "4offsetx": 0,
    "4offsety": 0,
    "4start" : 90,
    "4stop" : 270
  },
  "D": {
    //d arc
    "size": 60,
    "offsetx": 0,
    "offsety": 0,
    "start" : 90,
    "stop" : 270,
    //d stalk
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
    "1size": 50,
    "1offsetx": 0,
    "1offsety": 10,
    "1start" : 360,
    "1stop" : 180,
    //e cut out
    "4size": 25,
    "4offsetx": 0,
    "4offsety": 10,
    "4start" : 360,
    "4stop" : 180,
  },
  "F": {
    //f top arc
    "size": 85,
    "offsetx": -3,
    "offsety": -60,
    "start" : 180,
    "stop" : 360,
    //f stalk
    "2offsetx": -45,
    "2offsety": -70,
    "2offsetw": -30,
    "2offseth": -30,
    //f top cut out
    "3size": 55,
    "3offsetx": 2,
    "3offsety": -57,
    "3start" : 180,
    "3stop" : 360,
    //f cross
    "5offsetx": -29,
    "5offsety": -30,
    "5offsetw": 10,
    "5offseth": -135,
  },
  "G": {
    //g
    "1size": 60,
    "1offsetx": 0,
    "1offsety": 0,
    "1start" : 90,
    "1stop" : 270,
    //g stalk
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
    //h stalk
    "2offsetx": -50,
    "2offsety": -100,
    "2offsetw": -30,
    "2offseth": 0,
    //h arc
    "1size": 75,
    "1offsetx": 3,
    "1offsety": -10,
    "1start" : 180,
    "1stop" : 360,
    //h cut out
    "4size": 50,
    "4offsetx": 0,
    "4offsety": -5,
    "4start" : 180,
    "4stop" : 360,
    //h baby stalk
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
    //i dot
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
    //j dot
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
    //k stalk
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
    "2offsety": -100,
    "2offsetw": -30,
    "2offseth": 0,
  },
  "M": {
    //m stalk
    "2offsetx": -50,
    "2offsety": -50,
    "2offsetw": -30,
    "2offseth": -50,
    //m arc
    "1size": 75,
    "1offsetx": 3,
    "1offsety": -10,
    "1start" : 180,
    "1stop" : 360,
    //m cut out
    "4size": 50,
    "4offsetx": 0,
    "4offsety": -5,
    "4start" : 180,
    "4stop" : 360,
    //m baby stalk
    "5offsetx": 24,
    "5offsety": -25,
    "5offsetw": -30,
    "5offseth": -75,
    //m middle
    "7size": 90,
    "7offsetx": 0,
    "7offsety": 15,
    "7start" : 250,
    "7stop" : 290,
  },
  "N": {
    //n stalk
    "2offsetx": -50,
    "2offsety": -50,
    "2offsetw": -30,
    "2offseth": -50,
    //n arc
    "1size": 75,
    "1offsetx": 3,
    "1offsety": -10,
    "1start" : 180,
    "1stop" : 360,
    //n cut out
    "4size": 50,
    "4offsetx": 0,
    "4offsety": -5,
    "4start" : 180,
    "4stop" : 360,
    //n baby stalk
    "5offsetx": 24,
    "5offsety": -25,
    "5offsetw": -30,
    "5offseth": -75,
  },
  "O": {
    //o
    "size": 70,
    "offsetx": 0,
    "offsety": 0,
    "start" : 0,
    "stop" : 360,
    //o cut out
    "4size": 35,
    "4offsetx": 0,
    "4offsety": 0,
    "4start" : 0,
    "4stop" : 360,
    
    
  },
  "P": {
    //p arc
    "size": 60,
    "offsetx": 0,
    "offsety": 0,
    "start" : 270,
    "stop" : 90,
    //p stalk
    "2offsetx": -50,
    "2offsety": -50,
    "2offsetw": -30,
    "2offseth": 0
  },
  "Q": {
    //q arc
    "size": 60,
    "offsetx": 0,
    "offsety": 0,
    "start" : 90,
    "stop" : 270,
    //q stalk
    "2offsetx": 30,
    "2offsety": -50,
    "2offsetw": -30,
    "2offseth": 0
  },
  "R": {
    //r stalk
    "2offsetx": -50,
    "2offsety": -50,
    "2offsetw": -30,
    "2offseth": -50,
    //r arc
    "1size": 75,
    "1offsetx": 3,
    "1offsety": -10,
    "1start" : 180,
    "1stop" : 360,
    //r cut out
    "4size": 50,
    "4offsetx": 0,
    "4offsety": -5,
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
    //t cross
    "2offsetx": -29,
    "2offsety": -50,
    "2offsetw": 10,
    "2offseth": -135,
    //t
    "5offsetx": -10,
    "5offsety": -100,
    "5offsetw": -30,
    "5offseth": 0,
  },
  "U": {
    //u stalk
    "2offsetx": -45,
    "2offsety": -50,
    "2offsetw": -30,
    "2offseth": -75,
    //u arc
    "1size": 75,
    "1offsetx": 0,
    "1offsety": 10,
    "1start" : 360,
    "1stop" : 180,
    //u cut out
    "4size": 50,
    "4offsetx": 0,
    "4offsety": 5,
    "4start" : 360,
    "4stop" : 180,
    //u baby stalk
    "5offsetx": 25,
    "5offsety": -50,
    "5offsetw": -30,
    "5offseth": -50,
  },
  "V": {
    //v
    "size": 70,
    "offsetx": 0,
    "offsety": 0,
    "start" : 300,
    "stop" : 240,
  },
  "W": {
    //w stalk
    "2offsetx": -45,
    "2offsety": -50,
    "2offsetw": -30,
    "2offseth": -75,
    //w arc
    "1size": 75,
    "1offsetx": 0,
    "1offsety": 10,
    "1start" : 360,
    "1stop" : 180,
    //w cut out
    "4size": 50,
    "4offsetx": 0,
    "4offsety": 5,
    "4start" : 360,
    "4stop" : 180,
    //w baby stalk
    "5offsetx": 25,
    "5offsety": -50,
    "5offsetw": -30,
    "5offseth": -75,
    //w middle
    "7size": 90,
    "7offsetx": 0,
    "7offsety": -15,
    "7start" : 70,
    "7stop" : 110,
  },
  "X": {
    //x right
    "size": 90,
    "offsetx": 0,
    "offsety": 0,
    "start" : 310,
    "stop" : 45,
    //x right cut out
    "4size": 45,
    "4offsetx": 23,
    "4offsety": 0,
    "4start" : 310,
    "4stop" : 45,
    //x left
    "1size": 90,
    "1offsetx": 0,
    "1offsety": 0,
    "1start" : 130,
    "1stop" : 225,
    //x left cut out
    "6size": 45,
    "6offsetx": -23,
    "6offsety": 0,
    "6start" : 130,
    "6stop" : 225,
  },
  "Y": {
    //y stalk
    "5offsetx": -8,
    "5offsety": -7,
    "5offsetw": -33,
    "5offseth": -100,
    //y left
    "1size": 70,
    "1offsetx": 10,
    "1offsety": -5,
    "1start" : 300,
    "1stop" : 335,
    //y right
    "size": 70,
    "offsetx": -10,
    "offsety": -5,
    "start" : 200,
    "stop" : 235,
  },
  "Z": {
    //z right
    "size": 80,
    "offsetx": -10,
    "offsety": 25,
    "start" : 285,
    "stop" : 0,
    //z right cut out
    "4size": 45,
    "4offsetx": 3,
    "4offsety": 17,
    "4start" : 285,
    "4stop" : 0,
    //z left
    "1size": 80,
    "1offsetx": 15,
    "1offsety": -30,
    "1start" : 105,
    "1stop" : 180,
    //z left cut out
    "6size": 45,
    "6offsetx": 0,
    "6offsety": -20,
    "6start" : 105,
    "6stop" : 180,
  },
  "0": {
     //0 bottom
     "size": 50,
     "offsetx": 0,
     "offsety": 0,
     "start" : 0,
     "stop" : 180,
     //0 bottom cut out
     "4size": 25,
     "4offsetx": 0,
     "4offsety": 0,
     "4start" : 0,
     "4stop" : 180,
     //0 top
     "1size": 50,
     "1offsetx": 0,
     "1offsety": 0,
     "1start" : 180,
     "1stop" : 0,
     //0 top cut out
     "6size": 25,
     "6offsetx": 0,
     "6offsety": 0,
     "6start" : 180,
     "6stop" : 0,
  },
  "1": {
    //1
    "5offsetx": -8,
    "5offsety": -35,
    "5offsetw": -35,
    "5offseth": -80,
  },
  "2": {
    //2 right
    "size": 80,
    "offsetx": -10,
    "offsety": 25,
    "start" : 285,
    "stop" : 0,
    //2 right cut out
    "4size": 45,
    "4offsetx": 3,
    "4offsety": 17,
    "4start" : 285,
    "4stop" : 0,
    //2 top
    "1size": 50,
    "1offsetx": -10,
    "1offsety": -5,
    "1start" : 180,
    "1stop" : 0,
    //2 top cut out
    "6size": 25,
    "6offsetx": -10,
    "6offsety": -4,
    "6start" : 180,
    "6stop" : 0,
  },
  "3": {
    //3 arc
    "size": 40,
    "offsetx": -5,
    "offsety": -10,
    "start" : 270,
    "stop" : 90,
    //3 arc
    "1size": 40,
    "1offsetx": -5,
    "1offsety": 15,
    "1start" : 270,
    "1stop" : 90,
    //3 right cut out
    "4size": 23,
    "4offsetx": -6,
    "4offsety": -10,
    "4start" : 270,
    "4stop" : 90,
    //3 left cut out
    "6size": 23,
    "6offsetx": -6,
    "6offsety": 10,
    "6start" : 270,
    "6stop" : 90,
  },
  "4": {
    //4 right
    "5offsetx": 3,
    "5offsety": -35,
    "5offsetw": -36,
    "5offseth": -80,
    //4 left
    "2offsetx": -23,
    "2offsety": -35,
    "2offsetw": -36,
    "2offseth": -100,
    //4 dash
    "size": 80,
    "offsetx": 15,
    "offsety": 0,
    "start" : 160,
    "stop" : 170,
  },
  "5": {
    //5 right
    "size": 80,
    "offsetx": -15,
    "offsety": -25,
    "start" : 360,
    "stop" : 65,
    //5 right cut out
    "4size": 45,
    "4offsetx": 2,
    "4offsety": -15,
    "4start" : 360,
    "4stop" : 65,
    //5 top
    "1size": 50,
    "1offsetx": -10,
    "1offsety": 5,
    "1start" : 0,
    "1stop" : 180,
    //5 top cut out
    "6size": 25,
    "6offsetx": -10,
    "6offsety": 4,
    "6start" : 0,
    "6stop" : 180,
  },
  "6": {
    //6 bottom
    "size": 40,
    "offsetx": 3,
    "offsety": 10,
    "start" : 0,
    "stop" : 360,
    //6 bottom cut out
    "4size": 20,
    "4offsetx": 3,
    "4offsety": 10,
    "4start" : 0,
    "4stop" : 360,
    //6 left
    "2offsetx": -18,
    "2offsety": -30,
    "2offsetw": -36,
    "2offseth": -100,
  },
  "7": {
    //7 right
    "5offsetx": 3,
    "5offsety": -35,
    "5offsetw": -36,
    "5offseth": -80,
    //7 cross
    "2offsetx": -29,
    "2offsety": -30,
    "2offsetw": -3,
    "2offseth": -135,
  },
  "8": {
    //8 bottom
    "size": 40,
    "offsetx": 0,
    "offsety": -15,
    "start" : 0,
    "stop" : 360,
    //8 bottom cut out
    "4size": 15,
    "4offsetx": 0,
    "4offsety": -15,
    "4start" : 0,
    "4stop" : 360,
    //8 top
    "1size": 40,
    "1offsetx": 0,
    "1offsety": 20,
    "1start" : 0,
    "1stop" : 360,
    //8 top cut out
    "6size": 15,
    "6offsetx": 0,
    "6offsety": 20,
    "6start" : 0,
    "6stop" : 360,
  },
  "9": {
    //9 bottom
    "size": 40,
    "offsetx": -3,
    "offsety": -10,
    "start" : 0,
    "stop" : 360,
    //9 bottom cut out
    "4size": 20,
    "4offsetx": -3,
    "4offsety": -10,
    "4start" : 0,
    "4stop" : 360,
    //9 left
    "2offsetx": 0,
    "2offsety": -20,
    "2offsetw": -36,
    "2offseth": -100,
  }

}