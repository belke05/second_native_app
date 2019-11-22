import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import InputContainer from "../InputContainer";
import BodyText from "../BodyText";
import colors from "../../constants/colors";
import _fonts from "../../constants/fonts";

export default function StartScreen({ startGame }) {
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get("window").height
  );
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(
    Dimensions.get("window").width
  );

  changeDimensions = () => {
    setAvailableDeviceHeight(Dimensions.get("window").height);
    setAvailableDeviceWidth(Dimensions.get("window").width);
  };

  useEffect(() => {
    Dimensions.addEventListener("change", changeDimensions);
  }, []);
  return (
    <ScrollView>
      <KeyboardAvoidingView keyboardVerticalOffset={100} behavior={"padding"}>
        <BodyText style={styles.title}>What's the number?</BodyText>
        <InputContainer startGame={startGame}></InputContainer>
      </KeyboardAvoidingView>
    </ScrollView>
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
    marginTop: "2%",
    color: colors.textBlue,
    textAlign: "center"
  }
});
