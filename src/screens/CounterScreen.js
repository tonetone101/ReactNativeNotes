import React, { useState, useEffect } from "react";

import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  const toIncrease = () => {
    setCounter(counter + 1);
  };

  const toDecrease = () => {
    setCounter(counter - 1);
  };

  return (
    <View>
      <Button
        title="increase"
        onPress={() => {
          toIncrease();
        }}
      />
      <Button
        title="decrease"
        onPress={() => {
          toDecrease();
        }}
      />
      <Text style={styles.text}>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
  },
});

export default CounterScreen;
