import * as React from "react";
import { View, Button, Text, StyleSheet, Alert, TouchableOpacity, ScrollView, TouchableHighlight, Image, TextInput } from "react-native";

export default function Search() {
    return (
      <View style={styles.containerSearch}>
        <TextInput style={{height: 40, backgroundColor: '#F1F1F1', borderColor: '#F3F3F3', borderRadius: 100, borderWidth: 1, paddingLeft: 5 }}
              placeholder=' Recherchez un symtôme, un médicament, ...  '
                  onChangeText={(text) => {}/*this._searchTextInputChanged(text) --> fonction appelée qui va effectuer un traitment avec le texte text tapé}*/}
                  onSubmitEditing={() => Alert.alert('\'Lancée de la recherche\'')/*this._loadFilms()} --> fonction qui est la meme que celle appelée par appuis du onPress()*/}
              >      
        </TextInput>
        <Button
          title="Rechercher"
          color="#ff5c5c"
          onPress={() => navigation.navigate("Recherche")}>Recherche
        </Button>
      </View>
    );
    }
  const styles = StyleSheet.create({
    
    containerSearch: {
      width: 300,
      height: 31,
      marginTop: 45,
      alignItems:'center',
      flexDirection: "row",
      justifyContent: 'center' //vertically center
    }
});