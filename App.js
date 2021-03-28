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
//import { createStackNavigator } from "@react-navigation/stack";
//import Recherche from "./components/Recherche";
import Navigation from "./navigations/Navigation";
//import { NavigationActions } from "@react-navigation/native"; // <-- import useNavigation hook
//import Menu, { MenuItem } from 'react-native-material-menu';
//import FeatherIcon from "react-native-vector-icons/Feather";
//import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Rechercher"
//         onPress={() => navigation.navigate("Recherche")}
//       >
//         Rechercher
//       </Button>
//     </View>
//   );
// }

// function HomeToolbar() {
//   return (
//     <View
//       style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
//     ></View>
//   );
//   /*<FeatherIcon name="menu" style={styles.icon}></FeatherIcon>
//       <MaterialIconsIcon name="search" style={styles.icon2}></MaterialIconsIcon> */
// } //        <Stack.Screen name="ButtonMenu" component={HomeToolbar} />
// function LogoTitle() {
//   return (
//     <View onPress={() => Alert.alert("'Rechercher' pressed")}>
//       <Image
//         style={{ width: 50, height: 50 }}
//         source={require("/Users/thomaswalosik/ReactNative/dumbProject/assets/favicon.png")}
//       ></Image>
//     </View>
//   );
// }
// function LoupeToolbar() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Icon name="search" style={styles.icon2}></Icon>
//     </View>
//   );
// }

function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
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
