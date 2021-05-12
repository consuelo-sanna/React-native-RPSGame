import { StatusBar } from "expo-status-bar";
import React from "react";

import { StyleSheet, Text, View, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rock Paper Scissors</Text>
      <Text style={{ fontSize: 65 }}>✊ ✋ ✌️ </Text>
      <View style={styles.button}>
        <Button
          style={styles.header}
          onPress={() => navigation.navigate("RPSGame")}
          title="Play"
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 30,
    marginBottom: 10,
  },
  button: {
    marginTop: 30,
  },
});
