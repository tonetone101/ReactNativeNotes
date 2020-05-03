import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";
//Image detail is child of Image screen
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail />
      <ImageDetail />
      <ImageDetail />
      <ImageDetail />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
  },
});

export default ImageScreen;
