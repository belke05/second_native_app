import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import GuessingScreen from "./components/screens/GuessingScreen";
import GameScreen from "./components/screens/GameScreen";
import GameOverScreen from "./components/screens/GameOverScreen";

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [userNumber, setUserNumber] = useState(null);
  const [guessRounds, setGuessRounds] = useState(0);
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
