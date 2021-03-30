import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Search from "../boutons/Search";

export default function Recherche({ navigation }) {
  return (
    <View style={styles.containerRecherche}>
      <Search nav={navigation} />
      <Button title="Retour" onPress={() => navigation.navigate("Home")}>
        Retour
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  containerRecherche: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
});
