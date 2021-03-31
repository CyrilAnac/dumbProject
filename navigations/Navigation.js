import * as React from "react";
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
import Icon from "react-native-elements";
import Map from "../components/pages/Map";
import Rappels from "../components/pages/Rappels";
import { Alert, TouchableOpacity } from "react-native";
import { enableScreens } from "react-native-screens";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Pour l'assignation de la variable "scene" au text du Text
/*getLabel = {(scene) => (
                    <View style={styles.button}>
                      <Text style={styles.buttonText}>{props.getLabel(scene)}</Text>
                    </View>
                  )} */

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
      <Stack.Screen name="Drawer" component={MyDrawer} />
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
// Utilisable eventuellement pour le ScrollView /!\
/*
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
    +++++++ section a commenter +++++++++
      {/* <View style={styles.itemDrawer}>
        <Text
          style={{ fontSize: 20 }}
          onPress={() => props.navigation.navigate("Ordonnance")}
        >
          Informations Personnelles
        </Text>
        <Image
          source={require("../assets/IMG_3759.jpg")}
          resizeMode="contain"
          style={{ width: 30, height: 40, marginStart: 15 }}
        />
    </View>
    +++++++++++++++++++++++++++++++++++++++*}
      <DrawerItemList {...props} />

      <DrawerItem
        label={"Informations personnelles"} //
        style={{
          marginLeft: 0,
        }}
        labelStyle={{
          fontSize: 20,
          color: "white",
          borderColor: "#FFAE74",
          backgroundColor: "#FFAE74",
          borderWidth: 2,
          width: 262,
          height: 50,
        }}
        onPress={() => alert("Open Informations Personnelles")} //props.navigation.navigate("Ordonnance")
      ></DrawerItem>

      <DrawerItem
        label="Mon Ordonnance"
        style={{ marginLeft: 0 }}
        labelStyle={{
          fontSize: 20,
          color: "white",
          borderColor: "rgba(130,130,130,1)",
          backgroundColor: "rgba(130,130,130,1)",
          borderWidth: 2,
          width: 262,
          height: 50,
        }}
        onPress={() => props.navigation.navigate("Ordonnance")}
      />

      <DrawerItem
        label="Espace Bien-Être"
        style={{ marginLeft: 0 }}
        activeBackgroundColor="rgba(0, 0, 0, .04)"
        labelStyle={{
          fontSize: 20,
          color: "white",
          borderColor: "rgba(1,198,182,1)",
          backgroundColor: "rgba(1,198,182,1)",
          borderWidth: 2,
          width: 262,
          height: 50,
        }}
        onPress={() => alert("Open Espace Bien-Être")}
      />
    </DrawerContentScrollView>
  );
}



*/

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
        name="Informations Personnelles"
        component={RootHome}
        options={{
          drawerIcon: ({ focused, size }) => (
            <View
              style={{
                backgroundColor: "#FFAE74",
                width: 260,
                height: 60,
                borderWidth: 2,
                borderColor: "black",
                borderRadius: 12,
                alignItems: "center",
                marginLeft: -8,
                flexDirection: "row",
              }}
            >
              <Text style={{ fontSize: 22, color: "white", marginLeft: 10 }}>
                Informations Personnelles
              </Text>
              {
                <Image
                  source={require("../assets/arrow.png")}
                  style={{ height: 17.78, width: 16, marginLeft: 10 }}
                />
              }
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
                backgroundColor: "#FFAE74",
                width: 260,
                height: 60,
                borderWidth: 2,
                borderColor: "black",
                borderRadius: 12,
                alignItems: "center",
                marginLeft: -8,
                flexDirection: "row",
              }}
            >
              <Text style={{ fontSize: 22, color: "white", marginLeft: 10 }}>
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
                backgroundColor: "#FFAE74",
                width: 260,
                height: 60,
                borderWidth: 2,
                borderColor: "black",
                borderRadius: 12,
                alignItems: "center",
                marginLeft: -8,
                flexDirection: "row",
              }}
            >
              <Text style={{ fontSize: 22, color: "white", marginLeft: 10 }}>
                Espace Bien-Être
              </Text>
            </View>
          ),
        }}
      />
      <Drawer.Screen name="Conditions d'Utilisations" component={RootHome} />
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
