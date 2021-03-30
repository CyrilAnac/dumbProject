import { NavigationContext } from "@react-navigation/core";
import * as React from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
  Image,
  TextInput,
} from "react-native";

export default function Search(props) {
  return (
    <View style={styles.containerSearch}>
      <View
        style={{
          width: 270,
          height: 40,
          backgroundColor: "#F1F1F1",
          borderColor: "#F3F3F3",
          borderRadius: 100,
          borderWidth: 1,
          paddingLeft: 8,
          justifyContent: "center",
        }}
      >
        <TextInput
          style={{ fontStyle: "italic" }}
          placeholder=" Recherchez un symtôme, un médicaments...  "
          onChangeText={(
            text
          ) => {}} /*this._searchTextInputChanged(text) --> fonction appelée qui va effectuer un traitment avec le texte text tapé}*/
          onSubmitEditing={
            () =>
              Alert.alert(
                "'Lancée 2 la recherche'"
              ) /*this._loadFilms()} --> fonction qui est la meme que celle appelée par appuis du onPress()*/
          }
        ></TextInput>
      </View>
      <Button
        title="Rechercher"
        color="#ff5c5c"
        onPress={() => props.nav.navigate("Recherche")}
      >
        Recherche
      </Button>
    </View>
  );
}
const styles = StyleSheet.create({
  containerSearch: {
    width: 300,
    height: 31,
    marginTop: 30,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center", //vertically center
  },
});
