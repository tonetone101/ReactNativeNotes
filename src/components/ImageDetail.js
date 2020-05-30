import React from "react";
import {
  Text,
  StyleSheet,
  Image,
  Button,
  View,
  TouchableOpacity,
} from "react-native";
import { isRequired } from "react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType";

// title is a prop from ImageScreen component
const ImageDetail = ({ title }) => {
  return (
    <View>
      <Image source={require("../../assets/beach.jpg")} />
      <Text>Show Image of {title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
  },
});

export default ImageDetail;
