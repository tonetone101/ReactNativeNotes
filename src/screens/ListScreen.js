// FlatList is for rendering arrays
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const kids = [
    { name: "Jayna Keo" },
    { name: "Quincy Leav" },
    { name: "Nahvy Keo" },
    { name: "Damian Keo" },
  ];

  return (
    <FlatList
      data={kids}
      renderItem={({ item }) => {
        return <Text>{item.name}</Text>;
      }}
    ></FlatList>
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
