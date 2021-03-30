import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Search from "../boutons/Search";
import Icon from "react-native-elements";

export default function Recherche({ navigation }) {
  return (
    <View style={styles.containerRecherche}>
      <Search nav={navigation} />
    </View>
  );
} /*<Button title="Retour" onPress={() => navigation.navigate("Home")}>
        Retour
      </Button>*/

const styles = StyleSheet.create({
  containerRecherche: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    flex: 1,
  },
});
