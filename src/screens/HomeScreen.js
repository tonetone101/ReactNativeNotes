import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";
import ComponentsScreen from "./ComponentsScreen";
import ListScreen from "./ListScreen";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Homescreen</Text>
      {/* Button element */}
      <Button
        onPress={() => console.log("button pressed")}
        title="Go to Components Demo"
      />

      <TouchableOpacity onPress={() => console.log("list pressed")}>
        <Text>Go to list Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
