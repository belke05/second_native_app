import React from "react";
import { StyleSheet, View } from "react-native";
import InputContainer from "../InputContainer";
import BodyText from "../BodyText";
import colors from "../../constants/colors";
import _fonts from "../../constants/fonts";

export default function GuessingScreen({ startGame }) {
  return (
    <View style={styles.screen}>
      <BodyText style={styles.title}>What's the number?</BodyText>
      <InputContainer startGame={startGame}></InputContainer>
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
    color: colors.textBlue
  }
});
