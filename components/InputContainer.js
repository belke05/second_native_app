import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Button,
  Keyboard, // from here the native api
  Alert,
  Dimensions
} from "react-native";
import ShadowCard from "./ShadowCard";
import StartButton from "./StartButton";
import StyledTextInput from "./StyledTextInput";
import NumberOutputContainer from "./NumberOutputContainer";
import colors from "../constants/colors";

export default function InputContainer({ children, startGame }) {
  const [enteredNumber, setEnteredNumber] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [pickedNumber, setPickedNumber] = useState("");
  const [buttonContainerWidth, setButtonContainerWidth] = useState(
    Dimensions.get("window").width / 2
  );

  useEffect(() => {
    Dimensions.addEventListener("change", updateLayout);
    // otherwise event listener added on each re render
  }, []);

  updateLayout = () => {
    setButtonContainerWidth(Dimensions.get("window").width / 2);
  };

  function clearInput(e) {
    setEnteredNumber("");
    setIsConfirmed(false);
  }

  function changeNumber(text) {
    setEnteredNumber(text.replace(/[^0-9]/g, ""));
  }

  function pickNumber(e) {
    Keyboard.dismiss();
    const pickedNumber = parseInt(enteredNumber);
    if (isNaN(enteredNumber) || pickedNumber <= 0 || pickedNumber > 999) {
      return Alert.alert("Invalid Entry!", "please give in a number", [
        { text: "I'm sorry", style: "cancel", onPress: clearInput }
      ]);
    }
    setIsConfirmed(true);
    setPickedNumber(enteredNumber);
    setEnteredNumber("");
  }

  let confirmedOutput;

  if (isConfirmed) {
    confirmedOutput = (
      <NumberOutputContainer title="you chose the number" number={pickedNumber}>
        <StartButton
          onPressHandler={() => {
            Keyboard.dismiss();
            startGame(pickedNumber);
          }}
        >
          Let's start!
        </StartButton>
      </NumberOutputContainer>
    );
  }

  if (Dimensions.get("window").width > 600) {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          // for ios because there keyboard
          //doesn't dissapear if you click outside of it
        }}
      >
        <View style={styles.screen}>
          <ShadowCard
            style={{ ...styles.rowcontainer, width: buttonContainerWidth + 30 }}
          >
            <View style={styles.btn}>
              <Button title="clear" color="red" onPress={clearInput}></Button>
            </View>
            <StyledTextInput
              value={enteredNumber}
              onChangeText={changeNumber}
              style={styles.input}
              placeholder="42"
              blurOnSubmit
              autoCapitalize="none"
              keyboardType="phone-pad" // will give back numeric keyboard
              maxLength={2}
            ></StyledTextInput>

            <View style={styles.btn}>
              <Button
                title="pick"
                color={colors.textBlue}
                onPress={pickNumber}
              ></Button>
            </View>
          </ShadowCard>
          {confirmedOutput}
        </View>
      </TouchableWithoutFeedback>
    );
  }

  return (
    // presentational card will give us some reusability we know we will
    // have the shadow on this we can ourselves choose the width height and other
    // factors
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        // for ios because there keyboard
        //doesn't dissapear if you click outside of it
      }}
    >
      <View style={styles.screen}>
        <ShadowCard
          style={{ ...styles.container, width: buttonContainerWidth + 30 }}
        >
          <StyledTextInput
            value={enteredNumber}
            onChangeText={changeNumber}
            style={styles.input}
            placeholder="42"
            blurOnSubmit
            autoCapitalize="none"
            keyboardType="phone-pad" // will give back numeric keyboard
            maxLength={2}
          ></StyledTextInput>
          <View
            style={{ ...styles.buttonContainer, width: buttonContainerWidth }}
          >
            <View style={styles.btn}>
              <Button title="clear" color="red" onPress={clearInput}></Button>
            </View>
            <View style={styles.btn}>
              <Button
                title="pick"
                color={colors.textBlue}
                onPress={pickNumber}
              ></Button>
            </View>
          </View>
        </ShadowCard>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: "80%",
    alignItems: "center"
  },
  rowcontainer: {
    maxWidth: "80%",
    alignItems: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  btn: {
    width: "40%",
    marginHorizontal: "5%"
  },
  input: {
    width: 50,
    textAlign: "center"
  },
  btn2: {
    color: "black"
  },
  screen: {
    alignItems: "center",
    justifyContent: "center"
  }
});
