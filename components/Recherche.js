import * as React from "react";
import { View, Text, Button } from "react-native";
export default function RechercheScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Oui c'est la recherche</Text>
      {/* <Button title="Retour" onPress={() => navigation.navigate("Home")}>
        Retour
      </Button> */}
    </View>
  );
  /*<FeatherIcon name="menu" style={styles.icon}></FeatherIcon>
        <MaterialIconsIcon name="search" style={styles.icon2}></MaterialIconsIcon> */
}
