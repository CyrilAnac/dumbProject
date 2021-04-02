import * as React from "react";
import {
  View,
  Text,
  Button,
  Image,
  Icon,
  StyleSheet,
  Colors,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./navigations/Navigation";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./components/pages/Home";
import Recherche from "./components/pages/Recherche";
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Accueil" component={Navigation} />
        {/*<Drawer.Screen
          name="Informations Personnelles"
          component={Navigation}
        />*/}
        <Drawer.Screen name="Mon Ordonnance" component={Recherche} />
        <Drawer.Screen name="Espace Bien-être" component={Recherche} />
        <Drawer.Screen name="Conditions d'Utilisations" component={Recherche} />
        <Drawer.Screen name="Mentions Légales" component={Recherche} />
        <Drawer.Screen name="Aide" component={Recherche} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

/*return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Accueil" component={Navigation} />
        <Drawer.Screen
          name="Informations Personnelles"
          component={Navigation}
        />
        <Drawer.Screen name="Mon Ordonnance" component={Recherche} />
        <Drawer.Screen name="Espace Bien-être" component={Recherche} />
        <Drawer.Screen name="Conditions d'Utilisations" component={Recherche} />
        <Drawer.Screen name="Mentions Légales" component={Recherche} />
        <Drawer.Screen name="Aide" component={Recherche} />
      </Drawer.Navigator>
    </NavigationContainer>
  ); */

// const styles = StyleSheet.create({
//   container: {
//     width: 40,
//     height: 40,
//   },
//   icon2: {
//     color: "rgba(128,128,128,1)",
//     fontSize: 40,
//   },
// });

export default App;
