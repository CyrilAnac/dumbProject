import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Icon } from "react-native-elements";

/**
 * @param {navigation}
 * @returns page showing the conditions of use of the application. Available from the top left menu.
 * To be adapted as a popup that will be shown the first time you open the application after downloading
 */
export default function Conditions({ navigation }) {
  // Arrow button at the top left of the page
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Icon
          size={40}
          name="arrow-back"
          color="#FFFFFF"
          containerStyle={{ marginBottom: 10, marginLeft: 10 }}
          onPress={() => navigation.navigate("Home")}
        />
      ),
    });
  }, [navigation]);

  return (
    <ScrollView horizontal={false} showsVerticalScrollIndicator={true}>
      <View style={styles.container}>
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.titre}>Préambule</Text>
          <Text style={styles.texte}>
            Les présentes conditions générales d’utilisation de l’application
            mobile (ci-après dénommées « Conditions d'Utilisations ») ont pour
            objet de déterminer les règles d’utilisation de l’application mobile
            « N3C My Chimio » pensées par l'équipe N3C.
          </Text>

          <Text style={styles.titre}>Article 1: DÉFINITION</Text>
          <Text style={styles.texte}>
            « N3C My Chimio » désigne l’application logicielle éditée et fournie
            par l'équipe N3C Disrupt Campus 2021, donnant accès aux Services, et
            qui est disponible gratuitement dans l’ « App Store » d’Apple et le
            « Google Play Store » de Google pour être téléchargée par
            l’Utilisateur sur son terminal Apple iOS et Android. L’Application
            comprend également les Contenus, les logiciels, les programmes, les
            outils (de programmation, de navigation, …), les bases de données,
            les systèmes d’exploitation, la documentation et tous autres
            éléments et services qui la composent, les mises à jour et les
            nouvelles versions qui peuvent être apportées à l’Application par
            Smartbox. « Contenu » désigne sans que cette liste soit limitative,
            la structure de l’Application, le contenu éditorial, les dessins,
            les illustrations, les images, les photographies, les chartes
            graphiques, les marques, les logos, les sigles, les dénominations
            sociales, les œuvres audiovisuelles, les œuvres multimédia, les
            contenus visuels, les contenus audio et sonores, ainsi que tout
            autre contenu présent au sein de l’Application et/ou tout autre
            élément composant l’Application.
          </Text>

          <Text style={styles.titre}>Article 2: OBJET DE L'APPLICATION</Text>
          <Text style={styles.texte}>
            L’Application a pour objet de Vous permettre d’accéder à l’univers
            de Smartbox soit directement via l’Application soit par
            l’intermédiaire d’un lien hypertexte Vous redirigeant directement
            sur le site de Smartbox. Plusieurs Services peuvent être proposés à
            l’Utilisateur et notamment : Créer un compte client ; Enregistrer un
            Cadeau d’Expériences en scannant le code barre correspondant au
            chèque-cadeau à l’aide de la caméra du téléphone (une autorisation
            sera demandée) et en entrant le code de confirmation ; Sélectionner
            les partenaires : l’Utilisateur aura accès à une description
            complète des partenaires (résumé de leur entreprise, description de
            l’expérience proposée, informations pour le contacter) ;
          </Text>

          <Text style={styles.titre}>
            Article 3: DISPONIBILITÉ DE L’APPLICATION
          </Text>
          <Text style={styles.texte}>
            L’Application est accessible 24 heures sur 24, 7 jours sur 7 sauf en
            cas de force majeure ou de survenance d’un évènement hors du
            contrôle de Smartbox et sous réserve des éventuelles pannes et
            interventions de maintenance nécessaires au bon fonctionnement de
            l’Application. La version du logiciel de l’Application peut être
            mise à jour de temps à autre pour ajouter de nouvelles fonctions et
            de nouveaux services.
          </Text>

          <Text style={styles.titre}>
            Article 4 : CONDITIONS D’ACCÈS ET CONDITIONS FINANCIÈRES
          </Text>
          <Text style={styles.texte}>
            Les équipements et moyens matériels permettant l’accès à
            l’Application sont à la charge exclusive de l’Utilisateur. Pour
            accéder et utiliser l’application, Vous devez posséder : Un
            téléphone compatible ou un terminal mobile compatible ; Un accès au
            réseau internet ; Un compte client dans un store virtuel chez l’un
            des fournisseurs de l’Application mobile (App store et/ou Google
            Play Store). Les téléphones et terminaux mobiles compatibles sont
            les suivants : Téléphone mobile IPhone® d’Apple® disposant du
            système d’exploitation iOS sous iOS 10 ou toute autre version
            ultérieure qui viendrait à être développée ; Téléphone mobile
            disposant du système d’exploitation Android® OS 4.4 ou toute autre
            version ultérieure qui viendrait à être développée. Dès lors,
            l’Application Mobile Smartbox est téléchargeable gratuitement depuis
            les plateformes « Google Play Store » et « App Store ».
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    //alignItems: "center",
    flex: 1,
    flexDirection: "column",
  },
  texte: {
    marginTop: 10,
    marginLeft: 16,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  titre: {
    marginTop: 20,
    marginLeft: 5,
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
