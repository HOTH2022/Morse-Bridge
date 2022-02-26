import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import Morsey from "morsey";

// import MorseCode from "./assets/morseCode";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    marginTop: "0%",
    backgroundColor: "#000",
    width: 400,
    height: "100%",
    borderRadius: 5,
    justifyContent: "center",
  },
  Placeholder: {
    alignSelf: "center",
    textAlign: "center",
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
  },
  translated: {
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: "center",
    textAlign: "center",
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
  },
});

export default function App() {
  const startTime = useRef(new Date());
  const endTime = useRef(new Date());
  const [elapsedTime, setElapsedTime] = useState();
  const [lastClickEnd, setlastClickEnd] = useState();
  const [textToTranslate, settextToTranslate] = useState([]); //[] initialize for the array
  const morse = new Morsey({ wordspace: "|" });
  const [text, onChangeText] = useState("Useless Text");

  const start = () => {
    startTime.current = new Date();
    const timeDifference = (startTime.current - lastClickEnd) / 1000;
    const output = timeDifference > 0.8 ? " " : null;
    settextToTranslate((textToTranslate) => [...textToTranslate, output]);

    // with optional 'options'

    console.log(morse.encode("sample text"));
    // => ··· ·- -- ·--· ·-·· · | - · -··- -

    console.log(morse.decode("··· ·- -- ·--· ·-·· · | - · -··- -"));
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
      {/* Screen: Input to Morse */}
      <TextInput
        style={styles.translated}
        onChangeText={onChangeText}
        value={text}
      />
      <Text style={styles.translated}>{morse.encode(text)}</Text>

      {/* Screen: Morse to Input */}
      {/* <TouchableHighlight onPressIn={start} onPressOut={end}>
        <View style={styles.box}>
          <Text style={styles.translated}>{textToTranslate}</Text>
          <Text style={styles.Placeholder}>
            {textToTranslate.length ? null : "Tap To Send Morse"}
          </Text>
          <Text style={styles.translated}>
            {morse.decode(textToTranslate.join(""))}
          </Text>
        </View>
      </TouchableHighlight> */}
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
