import React, { Component } from "react";
import { Button } from "react-native";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Switch,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function FichesCancer({ navigation }) {
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
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={true}
        style={{ marginLeft: 10 }}
      >
        <Text style={styles.titre}>Édition COMPRENDRE ET AGIR</Text>

        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <TouchableOpacity onPress={() => alert("Fiche SEIN")}>
            <Image
              source={require("../../assets/SEIN2.jpg")}
              resizeMode="contain"
              style={styles.imageInfoCancer}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => alert("Fiche PEAU")}>
            <Image
              source={require("../../assets/PEAU2.jpg")}
              resizeMode="contain"
              style={styles.imageInfoCancer}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <TouchableOpacity onPress={() => alert("Fiche LEUCEMIES")}>
            <Image
              source={require("../../assets/LEUCEMIES2.jpg")}
              resizeMode="contain"
              style={styles.imageInfoCancer}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => alert("Fiche PROSTATE")}>
            <Image
              source={require("../../assets/PROSTATE2.jpg")}
              resizeMode="contain"
              style={styles.imageInfoCancer}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <TouchableOpacity onPress={() => alert("Fiche ESTOMAC")}>
            <Image
              source={require("../../assets/ESTOMAC.jpg")}
              resizeMode="contain"
              style={styles.imageInfoCancer}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => alert("Fiche COLORECTAL")}>
            <Image
              source={require("../../assets/COLORECTAL.jpg")}
              resizeMode="contain"
              style={styles.imageInfoCancer}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <TouchableOpacity onPress={() => alert("Fiche FOIE")}>
            <Image
              source={require("../../assets/FOIE.jpg")}
              resizeMode="contain"
              style={styles.imageInfoCancer}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => alert("Fiche OVAIRE")}>
            <Image
              source={require("../../assets/OVAIRE.jpg")}
              resizeMode="contain"
              style={styles.imageInfoCancer}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <TouchableOpacity onPress={() => alert("Fiche PANCREAS")}>
            <Image
              source={require("../../assets/PANCREAS.jpg")}
              resizeMode="contain"
              style={styles.imageInfoCancer}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => alert("Fiche POUMON")}>
            <Image
              source={require("../../assets/POUMON.jpg")}
              resizeMode="contain"
              style={styles.imageInfoCancer}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <TouchableOpacity onPress={() => alert("Fiche REIN")}>
            <Image
              source={require("../../assets/REIN.jpg")}
              resizeMode="contain"
              style={styles.imageInfoCancer}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => alert("Fiche TESTICULE")}>
            <Image
              source={require("../../assets/TESTICULE.jpg")}
              resizeMode="contain"
              style={styles.imageInfoCancer}
            />
          </TouchableOpacity>
        </View>
        {/*
      <TouchableOpacity onPress={() => alert("LEUCEMIES")} style={{}}>
        <Image
          source={require("../../assets/item_ficheLEUCEMIES.png")}
          resizeMethod="contain"
          style={{
            width: "100%",
            height: "120%",
            resizeMode: "cover",
            alignSelf: "center",
            borderWidth: 2,
            borderRadius: 20,
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => alert("PROSTATE")} style={{}}>
        <Image
          source={require("../../assets/item_fichePROSTATE.png")}
          resizeMethod="contain"
          style={{
            width: "100%",
            height: "120%",
            resizeMode: "cover",
            alignSelf: "center",
            borderWidth: 2,
            borderRadius: 20,
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => alert("REIN")} style={{}}>
        <Image
          source={require("../../assets/item_ficheREIN.png")}
          resizeMethod="contain"
          style={{
            width: "100%",
            height: "120%",
            resizeMode: "cover",
            alignSelf: "center",
            borderWidth: 2,
            borderRadius: 20,
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => alert("COLORECTAL")} style={{}}>
        <Image
          source={require("../../assets/item_ficheCOLORECTAL.png")}
          resizeMethod="contain"
          style={{
            width: "100%",
            height: "120%",
            resizeMode: "cover",
            alignSelf: "center",
            borderWidth: 2,
            borderRadius: 20,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert("TESTICULE")} style={{}}>
        <Image
          source={require("../../assets/item_ficheTESTICULE.png")}
          resizeMethod="contain"
          style={{
            width: "100%",
            height: "120%",
            resizeMode: "cover",
            alignSelf: "center",
            borderWidth: 2,
            borderRadius: 20,
          }}
        />
      </TouchableOpacity>*/}
      </ScrollView>
    </View>
  );
}

function ItemCancer(props) {
  return (
    <TouchableOpacity
      onPress={() => props.nav.navigate("Rappels")}
      style={styles.containerRappels}
    >
      <View>
        <Image
          source={require("../../assets/SEIN.jpg")}
          resizeMode="contain"
          style={styles.imageInfoCancer}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    //alignItems: "center",
    flex: 1,
  },
  titre: {
    fontSize: 20,
    marginTop: 20,
    alignItems: "center",
  },
  fiche: {
    width: "100%",
    height: "110%",
    alignSelf: "center",
    resizeMode: "contain",
    borderWidth: 2,
    borderRadius: 20,
  },
  imageInfoCancer: {
    width: 162,
    height: 184,
    marginLeft: 17,
  },
});
