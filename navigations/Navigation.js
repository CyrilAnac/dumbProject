import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Recherche from "../components/Recherche";
import Home from "../components/Home";
//import HomeScreen from "../App"

const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: "orange",
          },
        }}
      />
      <Stack.Screen name="Recherche" component={Recherche} />
    </Stack.Navigator>
  );
}

export default Navigation;
