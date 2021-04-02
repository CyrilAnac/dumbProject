import React, { Component } from "react";
import { Button } from "react-native";
import { StyleSheet, View, Text, Switch, TextInput } from "react-native";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function MesInformations({ navigation }) {
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
      <View style={styles.mesInformations}>
        <Text style={{ fontSize: 20, marginBottom: 10 }}>
          Mes informations personnelles
        </Text>

        <View style={styles.lines}>
          <Text style={{ fontSize: 20, marginRight: 20 }}>Prénom</Text>
          <TextInput
            style={styles.prenomInput}
            placeholder=" Johanna"
            onChangeText={(
              text
            ) => {}} /*this._searchTextInputChanged(text) --> fonction appelée qui va effectuer un traitment avec le texte text tapé}*/
            //onSubmitEditing={
            //  () => Alert.alert("") // close clavier /*this._loadFilms()} --> fonction qui est la meme que celle appelée par appuis du onPress()*/
            //}
          ></TextInput>
        </View>
        <View style={styles.lines}>
          <Text style={{ fontSize: 20, marginRight: 20 }}>Âge</Text>
          <TextInput
            style={styles.prenomInput}
            placeholder=" 22 ans"
            onChangeText={(text) => {}}
          ></TextInput>
        </View>

        <View style={styles.lines}>
          <Text style={{ fontSize: 20, marginRight: 20 }}>Poids</Text>
          <TextInput
            style={styles.prenomInput}
            placeholder=" 70 Kg"
            onChangeText={(text) => {}}
          ></TextInput>
        </View>

        <View style={styles.lines}>
          <Text style={{ fontSize: 20, marginRight: 20 }}>Cancer</Text>
          <TextInput
            style={styles.prenomInput}
            placeholder=" Sein"
            onChangeText={(text) => {}}
          ></TextInput>
        </View>
        <View style={{ marginTop: 10 }}>
          <Button
            title="Enregistrer"
            color="#ff5c5c"
            position="relative"
            onPress={() => alert("Informations enregistrées")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
  },
  mesInformations: {
    top: 20,
    position: "absolute",
    flexDirection: "column",
    justifyContent: "center",
  },
  prenomInput: {
    width: 250,
    height: 40,
    borderRadius: 15,
    borderColor: "black",
    borderWidth: 1,
  },
  lines: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "space-between",
  },
});
