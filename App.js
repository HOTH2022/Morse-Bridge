import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { useState, useEffect, useRef } from "react";
import Morsey from 'morsey';

// import MorseCode from "./assets/morseCode";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    backgroundColor: "#cc0000",
    width: 200,
    height: 200,
    borderRadius: 5,
  },
});

export default function App() {
  const startTime = useRef(new Date());
  const endTime = useRef(new Date());
  const [elapsedTime, setElapsedTime] = useState();
  const [lastClickEnd, setlastClickEnd] = useState();
  const [textToTranslate, settextToTranslate] = useState([]); //[] initialize for the array
  const morse = new Morsey({ wordspace: '|' });

  //const [translatedMorse, setTransltedMorse] = useState("");
  //const m = Object.create(MorseCode);


  const start = () => {
    startTime.current = new Date();
    const timeDifference = (startTime.current - lastClickEnd) / 1000;
    // console.log(timeDifference);
    const output = timeDifference > 0.3 ? " " : null;
    // console.log(output);
    settextToTranslate(textToTranslate => [...textToTranslate, output]);
    // // SVGAnimatedString(origin + ".");
    // // setTransltedMorse((translatedMorse) => MorseCode.encode(translatedMorse));
    // console.log(m.encode('test message'));
    // console.log(m.decode('.- -... -.-.'));

    // with optional 'options'
    
    console.log(morse.encode('sample text'));
    // => ··· ·- -- ·--· ·-·· · | - · -··- -
    
    console.log(morse.decode('··· ·- -- ·--· ·-·· · | - · -··- -'));
    // => SAMPLE TEXT

  };
  
  const end = () => {
    endTime.current = new Date();
    const et = (endTime.current - startTime.current) / 1000; // get the seconds
    setElapsedTime(et);
    setlastClickEnd(endTime.current);
    const expr = et > 0.3 ? "-" : "·";
    console.log(expr);
    console.log(et); // You cannot log elapsedTime here, because again, useState is async
    settextToTranslate((textToTranslate) => [...textToTranslate, expr]);
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight onPressIn={start} onPressOut={end}>
        <View style={styles.box} />
      </TouchableHighlight>
      <Text>{textToTranslate}</Text>
      <Text>{textToTranslate.join('')}</Text>
      <Text>{morse.decode(textToTranslate.join(''))}</Text>


    </View>
  );
}



// /*
//   // Create an Object to encode/decode morse code with
//     m = Object.create(MorseCode);

//   // Encoding text into morse code
//     m.encode('test message') or m.morse('test message')

//   // Decoding the morse code into plain text
//     m.decode('.- -... -.-.') or m.morse('.- -... -.-.', true)

//   // Without creating an object, just call it straight from the Object
//     MorseCode.encode('test message');
//     MorseCode.decode('.- -... -.-.');

//   // Run a test to make sure the functions are working correctly
//     MorseCode.test();
// */

// const MorseCode = {

//   encode: (data) => {
//     return MorseCode.morse.call(this, data);
//   },

//   decode: (data) => {
//     return MorseCode.morse.call(this, data, true);
//   },

//   morse: (data, decode=false) => {

//     this.map = {
//         a: '.-',      b: '-...',    c: '-.-.',    d: '-..',
//         e: '.',       f: '..-.',    g: '--.',     h: '....',
//         i: '..',      j: '.---',    k: '-.-',     l: '.-..',
//         m: '--',      n: '-.',      o: '---',     p: '.--.',
//         q: '--.-',    r: '.-.',     s: '...',     t: '-',
//         u: '..-',     v: '...-',    w: '.--',     x: '-..-',
//         y: '-.--',    z: '--..',    1: '.----',   2: '..---',
//         3: '...--',   4: '....-',   5: '.....',   6: '-....',
//         7: '--...',   8: '---..',   9: '----.',   0: '-----',

//         '.': '.-.-.-',    ',': '--..--',    '?': '..--..',
//         "'": '.----.',    '/': '-..-.',     '(': '-.--.',
//         ')': '-.--.-',    '&': '.-...',     ':': '---...',
//         ';': '-.-.-.',    '=': '-...-',     '+': '.-.-.',
//         '-': '-....-',    '_': '..--.-',    '"': '.-..-.',
//         '$': '...-..-',   '!': '-.-.--',    '@': '.--.-.',
//         ' ': '/',
//     };

//     if(decode) {
//       this.map = (
//         () => {
//           var tmp = {};
//           var k;
//           for(k in this.map) {
//             if(!this.map.hasOwnProperty(k)) continue;
//             tmp[this.map[k]] = k;
//           }
//           return tmp;
//         }
//       )();

//       return data.split(' ').filter( (v) => {
//         return this.map.hasOwnProperty(v.toLowerCase());
//       }).map( (v) => {
//         return this.map[v.toLowerCase()].toUpperCase();
//       }).join('');

//     } else {
//       return data.split('').filter( (v) => {
//         return this.map.hasOwnProperty(v.toLowerCase());
//       }).map( (v) => {
//         return this.map[v.toLowerCase()].toUpperCase();
//       }).join(' ').replace(/,\/,/g, '/');
//     }
//   },

//   test: () => {
//     console.log('Testing the encoding function with string:');
//     console.log('just a test');
//     mc = MorseCode.encode.call(this, 'just a test');
//     console.log('Encoding returned: ' + mc);
//     console.log('Testing the decoding function with morse code string:');
//     console.log(mc);
//     pt = MorseCode.decode.call(this, mc);
//     console.log('Decoding returned: ' + pt)

//   }
// };
