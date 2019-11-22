import React, { useState, useEffect } from "react";
import BodyText from "../BodyText";
import colors from "../../constants/colors";
import {
  View,
  Button,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  Platform
} from "react-native";
import { ScreenOrientation } from "expo";

export default function GameOverScreen(props) {
  const [dimensions, setDimensions] = useState({
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width
  });
  if (Platform.OS == "android") console.log("running on android");
  useEffect(() => {
    ScreenOrientation.addOrientationChangeListener(() => {
      setDimensions({
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width
      });
    });
  }, []);

  return (
    <View style={styles.screen}>
      <View
        style={{
          ...styles.imageContainer,
          width: dimensions.width / 2,
          height: dimensions.height / 2
        }}
      >
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
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height * 0.05
  },
  highlighttext: {
    color: colors.textBlue
  },
  text_container: {
    marginVertical: 20
  },
  bodytext: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20
  }
});
// text position is auto wrapping
// view positioning is flex by default
// styles also get passed through when text
