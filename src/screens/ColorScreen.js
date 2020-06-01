import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";

const ColorScreen = () => {
  // state with empty array as default
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button
        title="Add a color"
        onPress={() => {
          // take a look at the colors array state and add the randomrgb color
          setColors([...colors, randomRgb()]);
        }}
      />
      {/* to build a list of elements, use FlatList from react-native*/}
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          //item = random rgb value we generated
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  // to get rgb values
  // to give us a random number between 0 and 255
  // Math.random gives us a random between 0 and 1
  // we then multiply it by 256
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
