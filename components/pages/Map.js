import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import Search from "../boutons/Search";

export default function Map({ navigation }) {
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
      <MapView
        provider={MapView.PROVIDER_MAPVIEW} //PROVIDER_GOOGLE
        showsUserLocation="true" //https://github.com/react-native-maps/react-native-maps/blob/master/docs/mapview.md
        //followsUserLocation="true" //pour se concentrer sur l'emplacement de l'utilisateur
        initialRegion={{
          latitude: 43.6,
          longitude: 1.433333,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        customMapStyle={[]}
        style={{ marginTop: 8, padding: "100%" }}
      >
        <MapView.Marker
          coordinate={{ latitude: 43.6, longitude: 1.433333 }}
          title={"Dr BLANCHARD Jean-L."}
          description={"Cancérologue"}
        />
        <Search />
        {/*Voir pour mettre le composant externe Search au centre en haut de la carte/s'affiche une fois sur 2 au centre*/}
        {/*modifier les composants text dans barre de recherche et le bouton rechercher avec fond blanc */}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
