import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

export default function Ordonnance({ navigation }) {
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
      <View style={styles.OrdonnanceBoutons}>
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
      <View style={styles.ordonnanceText}>
        <Text style={styles.text}>Ajouter une Ordonnance</Text>
      </View>
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
  },
  ordonnanceBoutons: {
    flexDirection: "row",
  },
  ordonnanceText: {
    marginTop: 10,
  },
  text: {
    fontSize: 16,
  },
});
