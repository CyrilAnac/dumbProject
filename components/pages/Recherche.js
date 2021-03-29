import * as React from "react";
import { View, Text, Button } from "react-native";
import Search from "../boutons/Search"


export default function RechercheScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: '#FFFFFF' }}>
      <Search/>
      <Button title="Retour" onPress={() => navigation.navigate("Home")}>Retour</Button>
      
    </View>
  );
}
