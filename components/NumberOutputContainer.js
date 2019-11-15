import React from "react";
import { StyleSheet, View, Text, Button, Keyboard } from "react-native";
import ShadowCard from "./ShadowCard";
import colors from "../constants/colors";

export default function NumberOutputContainer({ pickedNumber, children }) {
  return (
    <ShadowCard style={styles.container}>
      <Text style={styles.title}>you chose the number</Text>
      <View style={styles.numberContainer}>
        <Text style={styles.number}>{pickedNumber}</Text>
      </View>
      <Button
        theme="dark"
        title="Let's start!"
        color={colors.textBlue}
        style={styles.btn}
        onPress={() => {
          Keyboard.dismiss();
        }}
      ></Button>
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
    borderWidth: 1
  },
  btn: {
    color: "black"
  }
});
