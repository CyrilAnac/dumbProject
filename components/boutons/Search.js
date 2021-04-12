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
import { Icon } from "react-native-elements";

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
          //placeholder=" Recherchez un symtôme, un médicament, un molécule "
          placeholder={props.text}
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
      {/*<Button
        title="Rechercher"
        color="#ff5c5c"
        position="relative"
        onPress={() => props.nav.navigate("Recherche")}
      >
        Recherche
      </Button>*/}
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
