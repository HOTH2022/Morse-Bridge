import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { useState, useEffect, useRef } from "react";

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
<<<<<<< HEAD
 
=======
  const endTime = useRef(new Date());
  const [elapsedTime, setElapsedTime] = useState();
  const [lastClickEnd, setlastClickEnd] = useState();
  const [textToTranslate, settextToTranslate] = useState("");

  const start = () => {
    startTime.current = new Date();
    const timeDifference = (startTime.current - lastClickEnd) / 1000;
    // console.log(timeDifference);
    const output = timeDifference > 0.3 ? " " : null;
    // console.log(output);
    settextToTranslate((textToTranslate) => [...textToTranslate, output]);
    setlastClickEnd(null);
  };

  const end = () => {
    endTime.current = new Date();
    const et = (endTime.current - startTime.current) / 1000; // get the seconds
    setElapsedTime(et);
    setlastClickEnd(endTime.current);
    const expr = et > 0.3 ? "-" : ".";
    console.log(expr);
    console.log(et); // You cannot log elapsedTime here, because again, useState is async
    settextToTranslate((textToTranslate) => [...textToTranslate, expr]);
  };

>>>>>>> b1df58b7aceb9dcd1b7716334965b7a203f3958f
  return (
    <View style={styles.container}>
      <TouchableHighlight onPressIn={start} onPressOut={end}>
        <View style={styles.box} />
      </TouchableHighlight>
      <Text>{textToTranslate}</Text>
    </View>
  );
}
