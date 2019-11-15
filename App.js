import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import GuessingScreen from "./components/screens/GuessingScreen";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess a number game"></Header>
      <GuessingScreen></GuessingScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
