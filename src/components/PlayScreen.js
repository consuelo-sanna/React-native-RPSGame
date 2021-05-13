import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const rock = require("../images/signs/rock.png");
const paper = require("../images/signs/paper.png");
const scissors = require("../images/signs/scissors.png");

const bgColors = ["#D65DB1", "#FFC75F", "#9b59b6"];

const randomImg = () => {
  const emojis = [rock, paper, scissors];
  const random = Math.floor(Math.random() * emojis.length);
  return emojis[random];
};

const PlayScreen = () => {
  const [counter, setCounter] = useState(3);

  useEffect(() => {
    if (counter === 0) return;
    const timer = setTimeout(() => {
      setCounter(counter - 1);
    }, 500);

    return () => clearTimeout(timer);
  }, [counter]);

  return (
    <View
      style={StyleSheet.compose(
        { backgroundColor: bgColors[counter - 1] },
        styles.container
      )}
    >
      {counter === 0 ? (
        <>
          <Image source={randomImg()} style={styles.sign} />
          <View style={styles.buttonView}>
            <TouchableOpacity onPress={() => setCounter(3)} title="Play">
              <Text style={styles.buttonText}>Play</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <Text style={styles.counter}> {counter} </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  counter: {
    fontSize: 150,
    color: "white",
  },
  sign: {
    width: 300,
    height: 300,
  },
  buttonView: {
    marginTop: 30,
    alignItems: "center",
    backgroundColor: "#7e37ac",
    color: "#fff",
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    position: "absolute",
    bottom: 40,
  },
  buttonText: {
    alignItems: "center",
    fontSize: 20,
    color: "#fff",
  },
});

export default PlayScreen;
