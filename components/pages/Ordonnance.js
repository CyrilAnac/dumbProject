import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

/**
 * @param {*} navigation
 * @returns the "Ordonnance" page allowing the user to insert his prescription in digital format to have it always at hand
 */
export default function Ordonnance({ navigation }) {
  // Arrow button at the top left of the "Ordonnance" page to go to "Home" page
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
    <View style={styles.container}>
      <View style={styles.ordo}>
        <View style={styles.ordonnanceBouton}>
          <Icon
            size={50}
            name="photo"
            color="#FFFFFF"
            onPress={() => alert("Importer une ordonnance via la pelicule")}
            //containerStyle={{ marginBottom: 10, marginRight: 10 }}
          />
        </View>
        <View style={styles.ordonnanceBouton}>
          <Icon
            size={50}
            name="camera-alt"
            color="#FFFFFF"
            onPress={() => alert("Importer une ordonnance via la camera")}
            //containerStyle={{ marginBottom: 10, marginRight: 10 }}
          />
        </View>
      </View>
      <Text style={styles.text}>Ajouter une Ordonnance</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  ordonnanceBouton: {
    width: 70,
    height: 70,
    backgroundColor: "#FFAE74",
    justifyContent: "center",
    borderRadius: 15,
    marginHorizontal: 4,
  },
  ordo: {
    flexDirection: "row",
  },
  text: {
    fontSize: 16,
    marginTop: 10,
  },
});
