import * as React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";

export default function Rappels({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Icon
          size={40}
          name="arrow-back"
          color="#FFFFFF"
          containerStyle={{ marginBottom: 10, marginLeft: 10 }}
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.containerR}>
        <View style={styles.containerT}>
          <Text style={{ fontSize: 17 }}>Aujourd&#39;hui, nous sommes le</Text>
          <Text style={styles.sam12}>SAM. 12</Text>
        </View>
        <View style={styles.typeRappelView}>
          <Text style={styles.typeRappelText}>Type du rappel</Text>
          <Icon
            size={25}
            name="arrow-drop-down"
            color="black"
            containerStyle={{
              justifyContent: "center",
              marginLeft: 160,
            }}
            onPress={() => alert("Défiler la liste des types de rappels")}
          />
        </View>
        <View style={styles.nomRappelView}>
          <TextInput
            style={styles.nomDuRappel}
            placeholder=" Nom du rappel "
            onChangeText={(
              text
            ) => {}} /*this._searchTextInputChanged(text) --> fonction appelée qui va effectuer un traitment avec le texte text tapé}*/
            onSubmitEditing={() => alert("Valider")}
          ></TextInput>
        </View>
        <View style={styles.rect3Row}>
          <Icon
            size={30}
            name="event"
            color="orange"
            containerStyle={{ marginRight: 10 }}
            onPress={() => alert("Calendar")}
          />

          <TouchableOpacity onPress={() => alert("Ajouter")}>
            <View style={styles.buttonAjouter}>
              <Text style={styles.ajouter}>Ajouter</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => alert("Supprimer")}>
            <View style={styles.buttonSupprimer}>
              <Text style={styles.supprimer}>Supprimer</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ alignSelf: "center" }}>
        <Text style={{ fontSize: 17 }}>A venir :</Text>
      </View>
      <View style={styles.containerB}>
        <UnRappel />
        <UnRappel />
      </View>
    </View>
  );
}

function UnRappel(props) {
  return (
    <View style={stylesUnRappel.containerUnRappel}>
      <View style={stylesUnRappel.groupRow}>
        <View style={stylesUnRappel.typeDateText}>
          <Text style={stylesUnRappel.nomDuRappel1}>
            Rappel d&#39;un rendez-vous
          </Text>
          <Text style={stylesUnRappel.prevuLe}>prévu le 20/03/2021</Text>
        </View>
        <Text style={stylesUnRappel.leRappel}>
          Rendez-vous chez mon médecin traitant
        </Text>
      </View>
      <Icon
        size={30}
        name="close"
        color="red"
        containerStyle={{ marginRight: 10 }}
        onPress={() => alert("Supprimer le rappel")}
      />
    </View>
  );
}

const stylesUnRappel = StyleSheet.create({
  containerUnRappel: {
    width: 346,
    height: 62,
    backgroundColor: "#E6E6E6",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
  typeDateText: {
    width: 282,
    height: 16,
    flexDirection: "row",
  },
  nomDuRappel1: {
    color: "#121212",
  },
  prevuLe: {
    color: "green",
    marginLeft: 4,
  },
  groupRow: {
    height: 36,
    marginLeft: 15,
  },
  leRappel: {
    color: "#121212",
    marginTop: 4,
  },
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  containerR: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    flex: 2,
    justifyContent: "center", //pour centrer verticalement
  },
  containerB: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    flex: 3,
  },
  typeRappelView: {
    width: 305,
    height: 39,
    backgroundColor: "#E6E6E6",
    borderRadius: 20,
    alignSelf: "center",
    flexDirection: "row",
  },
  typeRappelText: {
    color: "#121212",
    marginTop: 12,
    marginLeft: 16,
    fontStyle: "italic",
  },
  iconArrow: {
    color: "#FFFFFF",
    height: 60,
    width: 20,
  },
  nomRappelView: {
    width: 305,
    height: 39,
    backgroundColor: "#E6E6E6",
    borderRadius: 20,
    marginTop: 14,
  },
  nomDuRappel: {
    color: "#121212",
    marginTop: 11,
    marginLeft: 16,
    fontStyle: "italic",
  },
  buttonAjouter: {
    width: 110,
    height: 28,
    backgroundColor: "#FFAE74",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  ajouter: {
    color: "#FFFFFF",
  },
  buttonSupprimer: {
    width: 118,
    height: 28,
    backgroundColor: "#FFAE74",
    borderRadius: 20,
    marginLeft: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  supprimer: {
    color: "#FFFFFF",
  },
  rect3Row: {
    height: 28,
    flexDirection: "row",
    marginTop: 18,
    marginRight: 7,
  },
  containerT: {
    width: 241,
    height: 16,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 40,
  },
  typeDuRappel1: {
    color: "#121212",
  },
  sam12: {
    color: "red",
    fontSize: 17,
    marginLeft: 5,
  },
  aVenir: {
    color: "#121212",
  },
});
