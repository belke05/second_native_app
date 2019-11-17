import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
export default function GameOverScreen(props) {
  return (
    <View style={styles.screen}>
      <Text>the game is finito</Text>
      <Text>it lasted {props.rounds} rounds</Text>
      <Text>The number was {props.guessedNumber}</Text>
      <Button title="RESTART" onPress={props.restart} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  }
});
