import * as React from "react";
import { View, LinearGradient, StyleSheet, Header, Image, Button, Text } from "react-native";
import { createStackNavigator, HeaderBackButton } from "@react-navigation/stack";
import Recherche from "../components/pages/Recherche";
import Home from "../components/pages/Home";
//import HomeScreen from "../App"

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 70, height: 70, marginTop: -10 }}
      source={require('/Users/thomaswalosik/ReactNative/N3CMychimio2/components/images/Logo_PNG.png')}
    />
  );
}

function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: props => <LogoTitle {...props} />,          
          headerLeft: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Menu"
              color="#FFFFFF"
            />
          ),
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Recherche"
              color="#FFFFFF"
            />
          ),
          headerStyle: {
            backgroundColor: '#FFAE74',
            //header: props => <GradientHeader {...props} />,
          },
        }}
      />
      <Stack.Screen name="Recherche" component={Recherche} />
    </Stack.Navigator>
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
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
    },
    logo: {
      width: 10,
      height: 10
    }
  });

export default Navigation;
