import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import GuessingScreen from "./components/screens/GuessingScreen";
import GameScreen from "./components/screens/GameScreen";
import GameOverScreen from "./components/screens/GameOverScreen";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const fontFetcher = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });
};

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [userNumber, setUserNumber] = useState(null);
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded)
    return (
      <AppLoading
        startAsync={fontFetcher}
        onFinish={() => {
          setDataLoaded(true);
        }}
        onError={err => console.error(err)}
      />
    );
  // expo is listening for a promise to be returned the return value
  // of the promise will initialize onfinish

  function startGame(pickedNumber) {
    setIsPlaying(true);
    setUserNumber(pickedNumber);
  }

  function gameOver(rounds) {
    setIsPlaying(false);
    setGuessRounds(rounds);
  }

  function restart() {
    setUserNumber(null);
    setGuessRounds(0);
    setIsPlaying(false);
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a number game"></Header>
      {guessRounds === 0 && !isPlaying && (
        <GuessingScreen startGame={startGame} />
      )}
      {isPlaying && (
        <GameScreen pickedNumber={userNumber} gameOver={gameOver} />
      )}
      {guessRounds !== 0 && !isPlaying && (
        <GameOverScreen
          rounds={guessRounds}
          restart={restart}
          guessedNumber={userNumber}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
