import * as React from "react";
import { View, StyleSheet } from "react-native";
import Search from "../boutons/Search";
import { Icon } from "react-native-elements";

/**
 * @param {navigation}
 * @returns the "Recherche" page where the user can search for a symptom and its non-medicinal treatment, information on a drug or a molecule
 */
export default function Recherche({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      // Arrow button at the top left of the page
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
      {/* import of the search bar component */}
      <Search
        nav={navigation}
        text={"Recherchez un symtôme, un médicament, un molécule"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerRecherche: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    flex: 1,
  },
});
