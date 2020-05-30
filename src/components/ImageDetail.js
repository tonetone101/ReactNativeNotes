import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

// title is a prop from ImageScreen component
const ImageDetail = ({ title }) => {
  return <Text>Show Image of {title}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
  },
});

export default ImageDetail;
