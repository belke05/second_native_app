import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function StyledTextInput(props) {
  return (
    <TextInput {...props} style={{ ...styles.textInput, ...props.style }}>
      {props.children}
    </TextInput>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 30,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginVertical: 10
  }
});
