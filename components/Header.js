import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

export default function header({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

// everything by default using flexbox
const styles = StyleSheet.create({
  container: {
    paddingTop: "10%",
    height: 100,
    width: "100%",
    backgroundColor: colors.textBlue,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: colors.textWhite,
    fontSize: 20
  }
});
