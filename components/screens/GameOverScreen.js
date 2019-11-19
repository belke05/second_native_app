import React from "react";
import BodyText from "../BodyText";
import colors from "../../constants/colors";
import { View, Button, StyleSheet, Image, Text } from "react-native";
export default function GameOverScreen(props) {
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={500}
          source={require("../../assets/images/game_over.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View stlye={styles.text_container}>
        <BodyText style={styles.bodytext}>
          it took <Text style={styles.highlighttext}>{props.rounds}</Text>{" "}
          rounds and the number was{" "}
          <Text style={styles.highlighttext}>{props.guessedNumber}</Text>
        </BodyText>
      </View>
      <Button title="RESTART" onPress={props.restart} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  imageContainer: {
    width: "40%",
    height: "30%",
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "blue",
    overflow: "hidden"
  },
  highlighttext: {
    color: colors.textBlue
  },
  text_container: {
    marginHorizontal: 20
  },
  bodytext: {
    textAlign: "center"
  }
});
// text position is auto wrapping
// view positioning is flex by default
// styles also get passed through when text
