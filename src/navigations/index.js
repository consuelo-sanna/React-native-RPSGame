import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Button } from "react-native";

import PlayScreen from "../components/PlayScreen";
import HomeScreen from "../screens/Home";

const Stack = createStackNavigator();

const AppNavContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#7e37ac",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="RPSGame"
          component={PlayScreen}
          options={{
            title: "Rock Paper Scissors",
          }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavContainer;
