import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function StartButton(props) {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={props.onPressHandler}>
      <View style={styles.btn}>
        <Text style={styles.btntxt}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 30
  },
  btntxt: {
    color: "white",
    fontFamily: "open-sans",
    fontWeight: "bold",
    fontSize: 20
  }
});
