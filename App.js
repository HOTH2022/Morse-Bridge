import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { useState, useEffect, useRef } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: '#cc0000',
    width: 200,
    height: 200,
    borderRadius: 5,
  }
})




export default function App() {
  const startTime = useRef(new Date());
 const endTime = useRef(new Date());
 const [elapsedTime, setElapsedTime] = useState();
 const [words, setWords] = useState([0]);
 [last_end, setLastEnd] = useState(null);
 
 const start = () => {
   startTime.current = new Date();
   console.log(startTime.current);
   if (last_end){

   }
 }

 const end = () => {
   endTime.current = new Date();
   const et = ( endTime.current - startTime.current) / 1000 // get the seconds
   setElapsedTime(et);
   setWords(words => [...words, et]);
   console.log(len(words));
   console.log(et); // You cannot log elapsedTime here, because again, useState is async
   console.log(endTime.current);
  }
  return (
    <View style={styles.container}>
        <TouchableHighlight onPressIn = {start} onPressOut= {end}>
          <View style = {styles.box}/>
        </TouchableHighlight>
    </View>
  );
}



