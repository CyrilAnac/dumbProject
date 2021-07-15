import * as React from "react";
import { View, StyleSheet, Alert, TextInput } from "react-native";
import { Icon } from "react-native-elements";

/**
 * @param {*} props the default text "Recherchez un symtôme, un médicament, un molécule..." or "Recherchez un professionnel de santé"
 * @returns input text component to search a symptom, information about a molecule, etc. or input text component to search a health professional
 */
export default function Search(props) {
  return (
    <View style={styles.containerSearch}>
      <View
        style={{
          width: 324,
          height: 40,
          backgroundColor: "#F1F1F1",
          borderColor: "#C4C4C4",
          borderRadius: 100,
          borderWidth: 1,
          paddingLeft: 8,
          justifyContent: "center",
        }}
      >
        <TextInput
          style={{ fontStyle: "italic", marginLeft: 2 }}
          placeholder={props.text}
          onChangeText={(
            text
          ) => {}} /*this._searchTextInputChanged(text) --> fonction appelée qui va effectuer un traitment avec le texte text tapé}*/
          onSubmitEditing={
            () =>
              Alert.alert(
                "Résultats de la recherche"
              ) /*this._loadFilms()} --> fonction qui est la meme que celle appelée par appuis du onPress()*/
          }
        ></TextInput>
      </View>

      <Icon
        size={34}
        name="search"
        color="orange"
        containerStyle={{
          justifyContent: "center",
          marginLeft: 8,
        }}
        onPress={() => props.nav.navigate("Recherche")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  containerSearch: {
    width: 300,
    height: 31,
    marginTop: 30,
    position: "relative",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center", //vertically center
  },
});
