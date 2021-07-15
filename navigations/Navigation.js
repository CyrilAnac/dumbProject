import { View, Image, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Recherche from "../components/pages/Recherche";
import Home from "../components/pages/Home";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import {
  NavigationContainer,
  NavigationContext,
} from "@react-navigation/native";
import Ordonnance from "../components/pages/Ordonnance";
import { Icon, Overlay } from "react-native-elements";
import Map from "../components/pages/Map";
import Rappels from "../components/pages/Rappels";
import { Alert, TouchableOpacity, Button } from "react-native";
import { enableScreens } from "react-native-screens";
import React, { Children, useState } from "react";
import Conditions from "../components/pages/Conditions";
import MesInformations from "../components/pages/MesInformations";
import FichesCancer from "../components/pages/FichesCancer";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function RootHome() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => (
            <Text style={{ color: "#FFFFFF", fontSize: 20 }}></Text>
          ),
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
      <Stack.Screen name="Drawer" component={MyDrawer} />
      {/*<Stack.Screen //ce screen la contient la page Ordonnance + son en-tete que je défini juste en dessous
        name="Ordonnance"
        component={Ordonnance}
        options={{
          headerTitle: () => (
            <Text style={{ color: "#FFFFFF", fontSize: 20 }}>
              Mon OrdonnanceR
            </Text>
          ),
          headerStyle: {
            backgroundColor: "#FFAE74",
          },
        }}
      />*/}
      <Stack.Screen //ce screen la contient la page Ordonnance + son en-tete que je défini juste en dessous
        name="Map"
        component={Map}
        options={{
          headerTitle: () => (
            <Text style={{ color: "#FFFFFF", fontSize: 20 }}>
              Trouver un professionnel
            </Text>
          ),
          headerStyle: {
            backgroundColor: "#FFAE74",
          },
        }}
      />
      <Stack.Screen //ce screen la contient la page Ordonnance + son en-tete que je défini juste en dessous
        name="Rappels"
        component={Rappels}
        options={{
          headerTitle: () => (
            <Text style={{ color: "#FFFFFF", fontSize: 20 }}>Mes Rappels</Text>
          ),
          headerStyle: {
            backgroundColor: "#FFAE74",
          },
        }}
      />
      <Stack.Screen //ce screen la contient la page Ordonnance + son en-tete que je défini juste en dessous
        name="FichesCancer"
        component={FichesCancer}
        options={{
          headerTitle: () => (
            <Text style={{ color: "#FFFFFF", fontSize: 20 }}>
              Fiches d'informations sur les cancers
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

function RootMap() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Map"
        component={Map}
        options={{
          headerTitle: () => (
            <Text style={{ color: "#FFFFFF", fontSize: 20 }}>
              Trouver un professionnel
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

function RootMesInformations() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Mes Informations"
        component={MesInformations}
        options={{
          headerTitle: () => (
            <Text style={{ color: "#FFFFFF", fontSize: 20 }}>
              Mes Informations
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

function RootConditions() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Conditions d'Utilisations"
        component={Conditions}
        options={{
          headerTitle: () => (
            <Text style={{ color: "#FFFFFF", fontSize: 20 }}>
              Conditions d'Utilisations
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
    <Drawer.Navigator
      //openByDefault ouvrir le drawer menu a l'ouverture de l'appli / pour le premier tuto (présentation de l'app)
      drawerContentOptions={{
        labelStyle: {
          fontSize: 20,
        },
      }}
      //style={styles.itemDrawer}
      //drawerContent={(props) => <CustomDrawerContent {...props} />}
      headerMode="none"
    >
      <Drawer.Screen
        name="Accueil" //
        component={RootHome}
        /*options={{
          drawerIcon: ({ focused, size }) => (
            <View
              style={{
                width: 260,
                height: 30,
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Text style={{ fontSize: 20, color: "black" }}>Accueil</Text>
            </View>
          ),
        }}*/
      />
      <Drawer.Screen
        name="Mes Informations"
        component={RootMesInformations}
        options={{
          drawerIcon: ({ focused, size }) => (
            <View
              style={{
                backgroundColor: "#FFAE74",
                width: 260,
                height: 60,
                borderWidth: 2,
                borderColor: "#D66705",
                borderRadius: 12,
                alignItems: "center",
                marginLeft: -8,
                flexDirection: "row",
              }}
            >
              {
                <Icon
                  name="account-circle"
                  size={34}
                  color="white"
                  containerStyle={{
                    justifyContent: "center",
                    marginLeft: 10,
                  }}
                  onPress={() => props.nav.navigate("Profil")}
                />
              }
              <Text style={{ fontSize: 21, color: "white", marginLeft: 10 }}>
                Mes Informations
              </Text>
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Mon Ordonnance"
        component={RootOrdonnance}
        options={{
          drawerIcon: ({ focused, size }) => (
            <View
              style={{
                backgroundColor: "#47D78B",
                width: 260,
                height: 60,
                borderWidth: 2,
                borderColor: "#15A458",
                borderRadius: 12,
                alignItems: "center",
                marginLeft: -8,
                flexDirection: "row",
              }}
            >
              {
                <Icon
                  name="local-hospital" //self_improvement
                  size={34}
                  color="white"
                  containerStyle={{
                    justifyContent: "center",
                    marginLeft: 10,
                  }}
                  onPress={() => props.nav.navigate("Profil")}
                />
              }
              <Text style={{ fontSize: 21, color: "white", marginLeft: 10 }}>
                Mon Ordonnance
              </Text>
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Espace Bien-Être"
        component={RootHome}
        options={{
          drawerIcon: ({ focused, size }) => (
            <View
              style={{
                backgroundColor: "#E19FE3",
                width: 260,
                height: 60,
                borderWidth: 2,
                borderColor: "#C565C8",
                borderRadius: 12,
                alignItems: "center",
                marginLeft: -8,
                flexDirection: "row",
              }}
            >
              {
                <Icon
                  name="self-improvement"
                  size={34}
                  color="white"
                  containerStyle={{
                    justifyContent: "center",
                    marginLeft: 10,
                  }}
                  onPress={() => props.nav.navigate("Profil")}
                />
              }
              <Text style={{ fontSize: 21, color: "white", marginLeft: 10 }}>
                Espace Bien-Être
              </Text>
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Conditions d'Utilisations"
        component={RootConditions}
      />
      <Drawer.Screen name="Mentions Légales" component={RootHome} />
      <Drawer.Screen name="Aide" component={RootHome} />
    </Drawer.Navigator>
  );
}

/* TODO Gradiant toolbar 
const GradientHeader = props => (
  <View style={{ backgroundColor: '#eee' }}>
      <LinearGradient
        colors={['red', 'blue']}
        style={{height: Header.HEIGHT }}>
        <Header {...props} />
      </LinearGradient>
    </View>
  )*/
const styles = StyleSheet.create({
  containerNav: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  itemDrawer: {
    backgroundColor: "white",
    height: 40,
    flexDirection: "row",
    marginStart: 10,
    alignItems: "center",
  },
});

export default MyDrawer;
