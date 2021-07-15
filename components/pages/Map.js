import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import MapView from "react-native-maps";
import Search from "../boutons/Search";

/**
 * @param {*} navigation
 * @returns the "Map" page of the application with the professional search component and the map where health professionals near the user are shown
 */
export default function Map({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      // Arrow button at the top left of the current page to go to "Home" page
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
      <View style={{ position: "absolute", zIndex: 5, alignSelf: "center" }}>
        <Search text={"Recherchez un professionnel"} color={"white"} />
      </View>

      <MapView
        provider={MapView.PROVIDER_MAPVIEW} //PROVIDER_GOOGLE
        showsUserLocation="true" //https://github.com/react-native-maps/react-native-maps/blob/master/docs/mapview.md
        //followsUserLocation="true" //pour se concentrer sur l'emplacement de l'utilisateur
        initialRegion={{
          latitude: 43.6,
          longitude: 1.433333,
          latitudeDelta: 0.109,
          longitudeDelta: 0.109,
        }}
        customMapStyle={[]}
        style={{ flex: 1 }} //marginTop: 15, padding: "100%"
      >
        <MapView.Marker
          coordinate={{ latitude: 43.6, longitude: 1.433333 }}
          title={"Dr BLANCHARD Jean-L."}
          description={"Cancérologue"}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
