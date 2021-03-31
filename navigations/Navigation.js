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
import { Alert } from "react-native";
import { enableScreens } from "react-native-screens";

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

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/*<DrawerItem
        label="Informations Personnelles"
        onPress={() => alert("Clique sur l'item Informations Personnelles")}
      />*/}
      <View style={styles.itemDrawer}>
        <Text style={{ fontSize: 20 }} onPress={() => alert("coucou")}>
          Informations Personnelles
        </Text>
        <Image
          source={require("../assets/IMG_3759.jpg")}
          resizeMode="contain"
          style={{ width: 30, height: 40, marginStart: 15 }}
        />
      </View>
      <DrawerItemList {...props} />
      <View style={styles.itemDrawer}>
        <Text style={{ fontSize: 20 }} onPress={() => alert("coucou")}>
          Conditions d'Utilisations
        </Text>
      </View>
      <View style={styles.itemDrawer}>
        <Text style={{ fontSize: 20 }} onPress={() => alert("coucou")}>
          Mentions Légales
        </Text>
      </View>
      <View style={styles.itemDrawer}>
        <Text style={{ fontSize: 20 }} onPress={() => alert("coucou")}>
          Aide
        </Text>
      </View>
    </DrawerContentScrollView>
  );
}

function MyDrawer() {
  return (
    //drawerContent={() => <DrawerContent />} dans <Drawer.Navigator..ici..>
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Accueil" component={RootHome} />
      {/*<Drawer.Screen name="Mon Ordonnance" component={RootOrdonnance} />*/}
      {/*<Drawer.Screen
        name="Mon Ordonnance"
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
      {/*et je veux appeler le screen ici pour avoir Onrdonnance.js + son entete*/}
      <Drawer.Screen name="Espace Bien-être" component={RootHome} />
      {/*<Drawer.Screen name="Conditions d'Utilisations" component={RootHome} />
      <Drawer.Screen name="Mentions Légales" component={RootHome} />
      <Drawer.Screen name="Aide" component={RootHome} />*/}
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
  itemDrawer: {
    backgroundColor: "white",
    height: 40,
    flexDirection: "row",
    marginStart: 20,
    alignItems: "center",
  },
});

export default MyDrawer;
