import * as React from "react";
import {
  View,
  LinearGradient,
  StyleSheet,
  Header,
  Image,
  Button,
  Text,
} from "react-native";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import Recherche from "../components/pages/Recherche";
import Home from "../components/pages/Home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
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

function Root() {
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
      <Stack.Screen
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

function Navigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Root" component={Root} />
      <Drawer.Screen name="Informations Personnelles" component={Root} />
      <Drawer.Screen name="Mon Ordonnance" component={Root} />
      <Drawer.Screen name="Espace Bien-être" component={Root} />
      <Drawer.Screen name="Conditions d'Utilisations" component={Root} />
      <Drawer.Screen name="Mentions Légales" component={Root} />
      <Drawer.Screen name="Aide" component={Root} />
    </Drawer.Navigator>
  );
}
/*
function Navigation() {
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

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Informations Personnelles" component={Home} />
      <Drawer.Screen name="Mon Ordonnance" component={Recherche} />
      <Drawer.Screen name="Espace Bien-être" component={Recherche} />
      <Drawer.Screen name="Conditions d'Utilisations" component={Recherche} />
      <Drawer.Screen name="Mentions Légales" component={Recherche} />
      <Drawer.Screen name="Aide" component={Recherche} />
    </Drawer.Navigator>
  );
};
*/

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
  logo: {
    width: 10,
    height: 10,
  },
});

export default Navigation;
