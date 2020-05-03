// import libraries
import React from "react";
import { Text, StyleSheet, View } from "react-native";

//create component function
const ComponentsScreen = () => {
  const name = "Antonio Keo";
  const intro = <Text style={styles.textStyle}>My name is {name}</Text>;
  const otherGreeting = (
    <Text style={styles.text}>Getting started with React Native</Text>
  );

  return (
    // View element allows us to group other elements together
    <View>
      {otherGreeting}
      {intro}
    </View>
  );
};

// create a stylesheet to add style to component
const styles = StyleSheet.create({
  text: {
    fontSize: 45,
  },
  textStyle: {
    fontSize: 20,
  },
});

//export the component to be usable in other parts of the project
export default ComponentsScreen;
