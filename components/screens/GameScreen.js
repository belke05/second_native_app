import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, FlatList, Alert, Text } from "react-native";
import NumberOutputContainer from "../NumberOutputContainer";
import ShadowCard from "../ShadowCard";
import LowHighButton from "../LowHighButton";
import { Ionicons } from "@expo/vector-icons";
import BodyText from "../BodyText";

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

function Item({ title, round }) {
  return (
    <View style={styles.item}>
      <BodyText style={styles.title}>Round {round.toString()}</BodyText>
      <BodyText style={styles.title}>{title.toString()}</BodyText>
    </View>
  );
}

export default function GameScreen({ children, pickedNumber, gameOver }) {
  const [guess, setGuess] = useState(guessRandom(1, 100, pickedNumber)); // only considered by react if we dont have one yet
  const [guessList, setGuessList] = useState([{ num: guess, id: 1 }]);
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
    setGuessList(guessList => [
      { num: newNumber, id: guesses.current },
      ...guessList
    ]);
  }

  return (
    <View style={styles.screen}>
      <NumberOutputContainer
        title="the computer guessed"
        number={guess}
      ></NumberOutputContainer>
      <ShadowCard style={styles.btnContainer}>
        <LowHighButton onPressHandler={anotherGuess.bind(this, false)}>
          <Ionicons name="md-add" size={24} color="green" />
        </LowHighButton>
        <LowHighButton onPressHandler={anotherGuess.bind(this, true)}>
          <Ionicons name="md-remove" size={24} color="red" />
        </LowHighButton>
      </ShadowCard>
      <View style={styles.guessContainer}>
        <FlatList
          contentContainerStyle={styles.contentContainer}
          data={guessList}
          renderItem={({ item }) => {
            return <Item title={item.num} round={item.id} />;
          }}
          keyExtractor={item => item.id}
        ></FlatList>
      </View>
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
  },
  guessContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "60%"
  },
  item: {
    borderWidth: 2,
    borderColor: "gray",
    margin: 10,
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    width: "70%"
  },
  contentContainer: {
    flexGrow: 0,
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%"
  }
});
