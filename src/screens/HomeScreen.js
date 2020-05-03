import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";
import ComponentsScreen from "./ComponentsScreen";
import ListScreen from "./ListScreen";

// Props come from app component
const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Homescreen!</Text>
      {/* Button element */}
      <Button
        // sends us to ComponentsScreen
        onPress={() => props.navigation.navigate("Components")}
        title="Go to Components Demo"
      />

      <TouchableOpacity
        //sends us to listScreen
        onPress={() => props.navigation.navigate("List")}
      >
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
