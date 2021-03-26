import * as React from "react";
import { View, Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="RECHERCHE"
        onPress={() => navigation.navigate("Recherche")}
      >
        Recherche
      </Button>
    </View>
  );
  /*<FeatherIcon name="menu" style={styles.icon}></FeatherIcon>
        <MaterialIconsIcon name="search" style={styles.icon2}></MaterialIconsIcon> */
}
