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

// title amd imageSource is a prop from ImageScreen component
const ImageDetail = ({ title, imageSource, imageScore }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image score - {imageScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
  },
});

export default ImageDetail;
