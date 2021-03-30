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
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MapView from "react-native-maps";
import { Icon } from "react-native-elements";
import Search from "../boutons/Search";
import Root from "../../navigations/Navigation";

export default function Home({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          size={40}
          name="search"
          color="#FFFFFF"
          containerStyle={{ marginBottom: 10, marginRight: 10 }}
          onPress={() => navigation.navigate("Recherche")}
        />
      ),
      headerLeft: () => (
        <Icon
          size={40}
          name="menu"
          color="#FFFFFF"
          containerStyle={{ marginBottom: 10, marginLeft: 10 }}
          onPress={() => navigation.openDrawer()}
        />
      ),
    });
  }, [navigation]);

  return (
    <ScrollView horizontal={false} showsHorizontalScrollIndicator={true}>
      <View style={styles.containerHome}>
        <Text style={styles.bonjourText}>Bonjour Johanna !</Text>
        <Smiley />
        <LayoutRappels />
        <InformationCancer />
        <MaListeSymp />
        <Search nav={navigation} />
        <Map />
      </View>
    </ScrollView>
  );

  function Smiley(props) {
    return (
      <View style={styles.containerSmiley}>
        <View>
          <Text style={styles.loremIpsum4}>
            Comment te sens-tu aujourd&#39;hui ?
          </Text>
        </View>
        <View style={styles.group4}>
          <MaterialCommunityIconsIcon
            name="emoticon"
            onPress={() => Alert.alert("'Smiley Vert' pressed")}
            style={styles.icon}
          ></MaterialCommunityIconsIcon>

          <MaterialCommunityIconsIcon
            name="emoticon-happy"
            onPress={() => Alert.alert("'Smiley Jaune' pressed")}
            style={styles.icon2}
          ></MaterialCommunityIconsIcon>

          <MaterialCommunityIconsIcon
            name="emoticon-neutral"
            onPress={() => Alert.alert("'Smiley Orange' pressed")}
            style={styles.icon3}
          ></MaterialCommunityIconsIcon>

          <View style={styles.groupUrgence}>
            <MaterialCommunityIconsIcon
              name="emoticon-devil"
              onPress={() => Alert.alert("'Smiley Urgence' pressed")}
              style={styles.iconUrgence}
            ></MaterialCommunityIconsIcon>

            <Text style={styles.uneUrgence}>Une urgence ?</Text>
          </View>
        </View>
      </View>
    );
  }
  function LayoutRappels(_props) {
    return (
      <TouchableOpacity
        onPress={() => Alert.alert("'LayoutRappel' pressed")}
        style={styles.containerRappels}
      >
        <View style={styles.group2}>
          <View style={styles.rect}>
            <View style={styles.groupRow}>
              <View style={styles.group}>
                <View style={styles.loremIpsum2Stack}>
                  <Text style={styles.numJour}>12</Text>
                  <Text style={styles.leJour}>SAM.</Text>
                </View>
              </View>
              <View style={styles.evenementAVenirColumn}>
                <Text style={styles.evenementAVenir}>Évenement à venir :</Text>
                <Text style={styles.evenementAVenir1}>
                  Rendez-vous chez mon médecin traitant
                </Text>

                <Text style={styles.prevuLe20032021}>Prévu le 20/03/2021</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  function InformationCancer(props) {
    return (
      <View style={styles.containerInfoCancer}>
        <View>
          <Text style={{ fontSize: 17, marginBottom: 8, marginLeft: 25 }}>
            Apprendre et agir
          </Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.imagesInfoCancer}>
            <TouchableHighlight onPress={() => Alert.alert("Fiche SEIN")}>
              <Image
                source={require("../../assets/IMG_3759.jpg")}
                resizeMode="contain"
                style={styles.imageInfoCancer}
              />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => Alert.alert("Fiche PEAU")}>
              <Image
                source={require("../../assets/IMG_3760.jpg")}
                resizeMode="contain"
                style={styles.imageInfoCancer}
              />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => Alert.alert("Fiche LEUCEMIES")}>
              <Image
                source={require("../../assets/IMG_3756.jpg")}
                resizeMode="contain"
                style={styles.imageInfoCancer}
              ></Image>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => Alert.alert("Fiche PROSTATE")}>
              <Image
                source={require("../../assets/IMG_3757.jpg")}
                resizeMode="contain"
                style={styles.imageInfoCancer}
              ></Image>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    );
  }

  function MaListeSymp(props) {
    return (
      //onclick={() => Alert.alert('Simple Button pressed')}
      <View style={styles.containerMaListeSymp}>
        <View style={styles.rectMaListeSymp}>
          <Text
            onPress={() => Alert.alert("'Ma liste de symptômes' pressed")}
            style={styles.textMaListeSymp}
          >
            Ma liste de symptômes
          </Text>
        </View>
      </View>
    );
  }

  function Map(props) {
    return (
      <View style={{ marginBottom: 40 }}>
        <View style={{ flexDirection: "row", marginTop: 34 }}>
          <Text style={{ fontSize: 17 }}>Trouver un professionnel</Text>
          <Text style={{ color: "orange", marginLeft: 85, fontSize: 17 }}>
            Voir toute la carte
          </Text>
        </View>
        <View
          style={{
            shadowColor: "#000", // ios
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5, //android
          }}
        >
          <MapView
            provider={MapView.PROVIDER_GOOGLE}
            initialRegion={{
              latitude: 43.6044622,
              longitude: 2.4442469,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            customMapStyle={[]}
            style={{ height: 290, width: 360, marginTop: 8 }}
          ></MapView>
        </View>
      </View>
    );
  }
  /*<FeatherIcon name="menu" style={styles.icon}></FeatherIcon>
        <MaterialIconsIcon name="search" style={styles.icon2}></MaterialIconsIcon> */
}

const styles = StyleSheet.create({
  containerHome: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  containerSmiley: {
    width: 251,
    height: 65,
  },
  containerRappels: {
    width: 324,
    height: 84,
    marginTop: 50,
    shadowColor: "#000", // ios
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5, //android
  },
  containerInfoCancer: {
    width: 470,
    height: 190,
    marginLeft: 100,
    marginRight: 50,
    alignContent: "center",
    marginTop: 40,
  },
  containerSearch: {
    width: 300,
    height: 31,
    marginTop: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center", //vertically center
  },
  containerMaListeSymp: {
    width: "90%",
    height: 33,
    alignItems: "center",
    marginTop: 10,
  },
  containerMap: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  bonjourText: {
    fontSize: 50,
    color: "#FFAE74",
    borderBottomWidth: 30,
    textAlignVertical: "center",
    marginTop: 50,
  },
  barreSearch: {
    alignItems: "center",
    marginTop: 1,
  },
  loremIpsum4: {
    marginTop: 8,
    color: "#121212",
    height: 21,
    width: 245,
    fontSize: 20,
    alignSelf: "center",
  },
  group4: {
    width: 250,
    height: 50,
    flexDirection: "row",
    //alignContent: 'center',
    marginLeft: -32, //car j'arrive pas a placer le groupe des 4 smileys au centre vertical
    //alignSelf: 'center'
  },
  icon: {
    color: "rgba(130,227,110,1)",
    fontSize: 50,
    marginTop: 4,
  },
  icon2: {
    color: "rgba(232,222,74,1)",
    fontSize: 50,
    marginLeft: 35,
    marginTop: 4,
  },
  icon3: {
    color: "rgba(236,182,92,1)",
    fontSize: 50,
    marginTop: 4,
    marginLeft: 35,
  },
  groupUrgence: {
    width: 50,
    height: 50,
    marginTop: 7,
    marginLeft: 35,
    alignItems: "center",
  },
  iconUrgence: {
    color: "rgba(219,100,100,1)",
    fontSize: 37,
    alignItems: "center",
  },
  uneUrgence: {
    color: "#db6465",
    fontSize: 11,
    width: 70,
    marginTop: -2,
    marginLeft: 7,
    alignItems: "center",
  },
  group2: {
    width: 324,
    height: 84,
    alignItems: "center",
  },
  rect: {
    width: 370,
    height: 90,
    backgroundColor: "#F1F1F1",
    borderWidth: 0,
    borderColor: "rgba(67,67,67,1)",
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
  },
  group: {
    width: 50,
    height: 55,
  },
  numJour: {
    top: 17,
    left: 0,
    position: "absolute",
    color: "#121212",
    height: 35,
    width: 50,
    textAlign: "center",
    fontSize: 44,
  },
  leJour: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(226,140,101,1)",
    height: 23,
    width: 53,
    textAlign: "center",
    fontSize: 25,
  },
  loremIpsum2Stack: {
    width: 50,
    height: 50,
  },
  evenementAVenir: {
    color: "#121212",
    height: 19,
    width: 206,
    fontStyle: "italic",
  },
  evenementAVenir1: {
    color: "#121212",
    height: 22,
    width: 217,
    fontSize: 16,
    marginTop: 1,
  },
  prevuLe20032021: {
    color: "rgba(135,193,71,1)",
    height: 31,
    width: 160,
    fontSize: 16,
    fontStyle: "italic",
  },
  evenementAVenirColumn: {
    width: 217,
    marginLeft: 24,
    marginRight: 5,
  },
  groupRow: {
    height: 73,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 0,
    marginRight: 15,
  },
  imageInfoCancer: {
    width: 132,
    height: 154,
    borderRadius: 34,
    marginLeft: 17,
  },
  imagesInfoCancer: {
    height: 160,
    flexDirection: "row",
    marginRight: 80,
    marginLeft: 4,
    shadowColor: "#000", // ios
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5, //android
  },
  rectMaListeSymp: {
    width: 450, //full horizontal, que ca touche le coté gauche et droit du phone tel
    height: 33,
    backgroundColor: "rgba(248,231,28,1)",
    marginTop: 14,
  },
  textMaListeSymp: {
    color: "#111111",
    fontSize: 16,
    marginTop: 9,
    textAlign: "center",
  },
  mapView: {
    height: 290,
    width: 360,
    marginTop: 8,
    marginBottom: 50,
  },
});
