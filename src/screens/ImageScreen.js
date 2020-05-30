import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";
//Image detail is child of Image screen
import ImageDetail from "../components/ImageDetail";
import { isRequired } from "react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType";

const ImageScreen = () => {
  return (
    <View>
      {/* sending down props called title*/}
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
      />
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
  },
});

export default ImageScreen;
