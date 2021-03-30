import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Ordonnance({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Retoureuh" onPress={() => navigation.navigate("Home")}>
        Retour
      </Button>
      <Text>COUCOUCOUC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
});
