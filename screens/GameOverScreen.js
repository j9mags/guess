import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Game over!</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/rj.jpg")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.text}>Total Round: {props.roundsNumber}</Text>
      <Text style={styles.text}>Correct Answer: {props.userNumber}</Text>
      <Button
        style={styles.text}
        title="New Game"
        onPress={props.onRestart}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    fontFamily: "montserrat",
    justifyContent: "center",
  },
  text: {
    fontFamily: "montserrat",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: "50%",
    height: 200,
    borderRadius: 150,
    borderWidth: 1,
    borderColor: "gray",
    overflow: "hidden",
    marginVertical: 30,
  },
});

export default GameOverScreen;
