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
        style={{}}
      >
        {/*<View style={styles.container}>*/}
        <Text style={styles.titre}>Édition COMPRENDRE ET AGIR</Text>
        <TouchableOpacity onPress={() => alert("SEIN")} style={{}}>
          <Image
            source={require("../../assets/item_ficheSEIN.png")}
            resizeMethod="contain"
            style={{
              width: "100%",
              height: "120%",
              alignSelf: "center",
              borderWidth: 2,
              borderRadius: 20,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert("PEAU")} style={{}}>
          <Image
            source={require("../../assets/item_fichePEAU.png")}
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
        </TouchableOpacity>
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
          source={require("../../assets/IMG_3759.jpg")}
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
    marginBottom: 20,
    alignItems: "center",
  },
});
