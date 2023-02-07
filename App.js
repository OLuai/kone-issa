import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, ActivityIndicator } from 'react-native';
import * as Contacts from 'expo-contacts';
import { useEffect, useState } from 'react';
import { checkBeggars } from './Helpers';
export default function App() {

  let messages = [
    {
      header: "Côte d'Ivoire",
      body: "Le père Daloa yako, c'est ton nom qui est gâté oh sinon les vraies mendiantes sont là. Oh wonte !"
    },
    {
      header: "Roi 12 12",
      body: "C'est ton fils Pantcho qui avait raison."
    },
    {
      header: "Humm femme !",
      body: "Elles vont venir mentir maintenant, cô c'était pour bader."
    },
    {
      header: "Eh Dieu,",
      body: "Donc dans amusément là, 2 de mes gos sont dedans 😓."
    },
    {
      header: "Sarah,",
      body: "Si je n'ai pas dit à ta maman la faut changer mon nom ☝️."
    },
    {
      header: "J'ai vu",
      body: "L'une des gos là dans mon secteur, elle a nuque hein."
    },
    {
      header: "Je parie",
      body: "Qu'elles sont toutes Dioula. Leur affaire de mendier !"
    },
    {
      header: "On dit",
      body: "Qu'elles sont les tantes des petits de la 2 qui demandent l'argent aux passants  là."
    },
    {
      header: "Mon ex",
      body: "Est dedans oh. Elle habite à Abobo. "
    },
    {
      header: "Poutchoulou",
      body: "C'est l'homme hein. "
    },
  ];
  function getRandomInt() {
    let max = messages.length;
    return Math.floor(Math.random() * max);
  }
  const [random, setRandom] = useState(getRandomInt());
  const [indicator, setIndicator] = useState(false);
  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Contacts.requestPermissionsAsync();
  //     if (status === 'granted') {
  //       const { data } = await Contacts.getContactsAsync({
  //         fields: [Contacts.Fields.Emails, , Contacts.Fields.PhoneNumbers],
  //       });

  //       if (data.length > 0) {
  //         const contact = data[0];
  //         console.log(data.length, contact.phoneNumbers);
  //       }
  //     }
  //   })();
  // }, []);

  //Fonction qui est appellee lorsqu'on clique sur le bouton
  const buttonClick = () => {
    setIndicator(true);
    checkBeggars().then(result => {
      console.log('result ----->', result);
      setRandom(getRandomInt);
    }).finally(() => {
      setTimeout(() => {
        setIndicator(false);
      }, 2000)
      // setIndicator(false);
    });
  };
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.messageContainer}>
        <Text style={styles.header}>{messages[random].header}</Text>
        <Text style={styles.message}>{messages[random].body}
        </Text>
      </View>

      <ActivityIndicator style={{ marginBottom: 20 }} size="large" color="#841584" animating={indicator} />

      <View style={styles.btnContainer}>
        <Button
          onPress={buttonClick}
          title="Rechercher"
          color="#841584"
          accessibilityLabel=""
        />
      </View>

      <Text style={styles.powerBy}>Powered by maraBOOT & GhostScripter
      </Text>

      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  info: {
    backgroundColor: "red",

  },
  header: {
    fontSize: 41,
    fontWeight: "900",
    color: "#999"
  },
  message: {
    fontSize: 43,
    fontWeight: "900",
    color: "#fff"
  },
  messageContainer: {
    flex: 3,
    //backgroundColor: 'red',
    //alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    flex: 1
  },
  powerBy: {
    //backgroundColor: 'blue',
    color: "#444",
    //alignItems: 'center',
    justifyContent: "flex-end",
    //alignSelf: "flex-end",
    marginBottom: 5
  },
});
