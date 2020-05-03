// FlatList is for rendering arrays
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const kids = [
    { name: "Jayna Keo", age: 11 },
    { name: "Quincy Leav", age: 8 },
    { name: "Nahvy Keo", age: 4 },
    { name: "Damian Keo", age: 2 },
  ];

  return (
    <FlatList
      // to make horizontal
      // horizontal
      // to remove horizontal scroll bar
      // showsHorizontalScrollIndicator={false}
      keyExtractor={(kid) => kid.name}
      data={kids}
      renderItem={({ item }) => {
        return (
          <Text style={styles.text}>
            {item.name} - Age:{item.age}
          </Text>
        );
      }}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  text: {
    marginVertical: 50,
  },
});

export default ListScreen;
