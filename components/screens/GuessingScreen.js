import React from "react";
import { Text, StyleSheet, View } from "react-native";
import InputContainer from "../InputContainer";
import colors from "../../constants/colors";
import _fonts from "../../constants/fonts";

export default function GuessingScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>What's the number?</Text>
      <InputContainer></InputContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: colors.backgroundGrey
  },
  title: {
    fontSize: 17,
    color: colors.textBlue,
    fontFamily: _fonts.defaultFont
  }
});
