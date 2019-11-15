import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Button,
  Text,
  Keyboard, // from here the native api
  Alert
} from "react-native";
import ShadowCard from "./ShadowCard";
import StyledTextInput from "./StyledTextInput";
import NumberOutputContainer from "./NumberOutputContainer";
import colors from "../constants/colors";

export default function InputContainer(props) {
  const [enteredNumber, setEnteredNumber] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [pickedNumber, setPickedNumber] = useState("");
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
      <NumberOutputContainer
        pickedNumber={pickedNumber}
      ></NumberOutputContainer>
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
      <View>
        <ShadowCard style={styles.container}>
          <StyledTextInput
            value={enteredNumber}
            onChangeText={changeNumber}
            style={styles.input}
            placeholder="42"
            blurOnSubmit
            autoCapitalize="none"
            keyboardType="numeric" // will give back numeric keyboard
            maxLength={3}
          ></StyledTextInput>
          <View style={styles.buttonContainer}>
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
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  btn: {
    flex: 1,
    marginHorizontal: 10
  },
  input: {
    width: 50,
    textAlign: "center"
  }
});
