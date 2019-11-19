import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

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
    padding: 15,
    backgroundColor: "lightgray",
    borderRadius: 10
  },
  btntxt: {
    color: "white",
    fontFamily: "open-sans",
    fontWeight: "bold",
    fontSize: 10
  }
});
