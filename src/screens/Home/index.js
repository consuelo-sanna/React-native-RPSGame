import { StatusBar } from "expo-status-bar";
import React from "react";

import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => alert("This app was created by Consuelo Sanna")}
          title="Info"
          color="#7e37ac"
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rock Paper Scissors</Text>
      <Text style={{ fontSize: 65 }}>✊ ✋ ✌️ </Text>
      <TouchableOpacity
        style={styles.buttonView}
        onPress={() => navigation.navigate("RPSGame")}
      >
        <Text style={styles.buttonText}>Play</Text>
      </TouchableOpacity>
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
  buttonView: {
    marginTop: 30,
    alignItems: "center",
    backgroundColor: "#7e37ac",
    color: "#fff",
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    alignItems: "center",
    fontSize: 20,
    color: "#fff",
  },
});
