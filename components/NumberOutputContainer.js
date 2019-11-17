import React from "react";
import { StyleSheet, View, Text, Button, Keyboard } from "react-native";
import ShadowCard from "./ShadowCard";
import colors from "../constants/colors";

export default function NumberOutputContainer({ title, number, children }) {
  return (
    <ShadowCard style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.numberContainer}>
        <Text style={styles.number}>{number}</Text>
      </View>
      {children}
    </ShadowCard>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderWidth: 2,
    borderColor: colors.textBlue,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: colors.textBlue,
    fontSize: 18
  },
  number: {
    fontSize: 22
  },
  numberContainer: {
    marginVertical: 10,
    borderColor: colors.backgroundGrey,
    borderWidth: 2,
    padding: 5,
    borderRadius: 5
  },
  btn: {
    color: "black"
  }
});
