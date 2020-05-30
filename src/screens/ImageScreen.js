import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";
//Image detail is child of Image screen
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      {/* sending down props called title*/}
      <ImageDetail title="Goku" />
      <ImageDetail title="Vegeta" />
      <ImageDetail title="Broly" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
  },
});

export default ImageScreen;
