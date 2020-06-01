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
        imageScore={"9"}
      />
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
        imageScore={"7"}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
        imageScore={"5"}
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
