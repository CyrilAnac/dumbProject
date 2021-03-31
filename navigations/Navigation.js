import * as React from "react";
import { Image, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Recherche from "../components/pages/Recherche";
import Home from "../components/pages/Home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ordonnance from "../components/pages/Ordonnance";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 70, height: 70, marginTop: -10 }}
      source={require("../assets/Logo_PNG.png")}
    />
  );
}

function RootHome() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerStyle: {
            backgroundColor: "#FFAE74",
            //header: props => <GradientHeader {...props} />,
          },
        }}
      />
      <Stack.Screen
        name="Recherche"
        component={Recherche}
        options={{
          headerTitle: () => (
            <Text style={{ color: "#FFFFFF", fontSize: 20 }}>Recherche</Text>
          ),
          headerStyle: {
            backgroundColor: "#FFAE74",
          },
        }}
      />
    </Stack.Navigator>
  );
}

function RootOrdonnance() {
  return (
    <Stack.Navigator>
      <Stack.Screen //ce screen la contient la page Ordonnance + son en-tete que je défini juste en dessous
        name="Ordonnance"
        component={Ordonnance}
        options={{
          headerTitle: () => (
            <Text style={{ color: "#FFFFFF", fontSize: 20 }}>
              Mon Ordonnance
            </Text>
          ),
          headerStyle: {
            backgroundColor: "#FFAE74",
          },
        }}
      />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Accueil" component={RootHome} />
      <Drawer.Screen name="Informations Personnelle" component={Recherche} />
      <Drawer.Screen name="Mon Ordonnance" component={RootOrdonnance} />
      <Drawer.Screen name="Espace Bien-être" component={RootHome} />
      <Drawer.Screen name="Conditions d'Utilisations" component={RootHome} />
      <Drawer.Screen name="Mentions Légales" component={RootHome} />
      <Drawer.Screen name="Aide" component={RootHome} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
