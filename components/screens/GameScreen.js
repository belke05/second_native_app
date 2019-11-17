import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Button, Alert } from "react-native";
import NumberOutputContainer from "../NumberOutputContainer";
import ShadowCard from "../ShadowCard";

function guessRandom(min, max, exclude) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const random = Math.floor(Math.random() * (max - min)) + min;
  if (random === exclude) {
    return guessRandom(min, max, exclude);
  } else {
    return random;
  }
}

export default function GameScreen({ children, pickedNumber, gameOver }) {
  const [guess, setGuess] = useState(guessRandom(1, 100, pickedNumber)); // only considered by react if we dont have one yet
  const guesses = useRef(1);
  const currentLow = useRef(1);
  const currentHigh = useRef(100); // difference with a ref is that we dont get a rerender

  useEffect(() => {
    console.log("here", guess, pickedNumber);
    if (guess == pickedNumber) {
      console.log("game over");
      return gameOver(guesses.current);
    }
  }, [guess]);

  function anotherGuess(isLower) {
    if (
      (isLower && guess < pickedNumber) ||
      (!isLower && guess > pickedNumber)
    ) {
      return Alert.alert("don't cheat", "that wasnt nice", [
        { text: "sorry", style: "cancel" }
      ]);
    }
    guesses.current += 1;
    isLower ? (currentHigh.current = guess) : (currentLow.current = guess);
    const newNumber = guessRandom(
      currentLow.current,
      currentHigh.current,
      guess
    );
    setGuess(newNumber);
  }

  return (
    <View style={styles.screen}>
      <NumberOutputContainer
        title="the computer guessed"
        number={guess}
      ></NumberOutputContainer>
      <ShadowCard style={styles.btnContainer}>
        <Button title="GREATER" onPress={anotherGuess.bind(this, false)} />
        <Button title="LOWER" onPress={anotherGuess.bind(this, true)} />
      </ShadowCard>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
    width: 300,
    maxWidth: "80%"
  }
});
