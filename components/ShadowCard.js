import React from "react";
import { View, StyleSheet } from "react-native";

export default function ShadowCard(props) {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 3,
    margin: 10,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5
  }
});
