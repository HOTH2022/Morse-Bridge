import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Vibration,
  TouchableOpacity
} from "react-native";
import { useState, useEffect, useRef } from "react";
import Morsey from "morsey";

// import MorseCode from "./assets/morseCode";

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS,
    7 * ONE_SECOND_IN_MS
];
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
  const [showText, setShowText] = useState(true);
  const [color, setColor] = useState('black');
  useEffect((time) => {
    // Change the state every second or the time given by User.
    const interval = setInterval(() => {
      setShowText((showText) => !showText);
    }, time);
    return () => clearInterval(interval);
  }, []);
  const Circle = () => {
    return <View style={styles.circle} />;
  };
  
  StyleSheet.create({
    circle: {
      width: 100,
      height: 100,
      borderRadius: 100 / 2,
      backgroundColor: "black",
    },
  });
  const handleButton = () => {
    const process_text = morse.encode(text);
    var morseL = function() {
      setColor('red');
      setTimeout(function(){
        setColor('black');
      }, 1200);
    }
    var morseS = function() {
      setColor('red');
      setTimeout(function(){
        setColor('black');
      }, 400);
    }
    var morseN = function() {
      
    }
    var i = 0;
    var time = 0;
    function myLoop() {
      setTimeout(function() {
        if (process_text[i] === '-') {
          morseL();
          time = 1400;
        } else if (process_text[i] === '·') {
          morseS();
          time = 800;
        } else if (process_text[i] === ' ') {
          morseN();
          time = 1200;
        };
    
        i++;
        
        if (i < process_text.length) {
          myLoop();
        }
      }, time);
    }
    
    setTimeout(myLoop, 1000);
  };
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
       <TouchableOpacity
        onPress={handleButton}
        style={{width: 100,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          borderRadius: 100,
          backgroundColor: color,}}>
        <Text style={{color: 'white'}}>I'm a button</Text>
      </TouchableOpacity>
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
