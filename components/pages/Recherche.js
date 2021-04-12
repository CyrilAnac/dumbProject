import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Search from "../boutons/Search";
import { Icon } from "react-native-elements";

export default function Recherche({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Icon
          size={40}
          name="arrow-back"
          color="#FFFFFF"
          containerStyle={{ marginBottom: 10, marginLeft: 10 }}
          onPress={() => navigation.navigate("Home")}
        />
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.containerRecherche}>
      <Search
        nav={navigation}
        text={"Recherchez un symtôme, un médicament, un molécule"}
      />
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
