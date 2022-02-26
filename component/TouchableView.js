import { View, Text, TouchableHighlight } from "react-native";
import React from "react";

const TouchableView = ({ onPress, onPressIn, onPressOut }) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <View>
        <Text>TouchableView</Text>
      </View>
    </TouchableHighlight>
  );
};

export default TouchableView;
