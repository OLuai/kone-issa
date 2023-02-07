import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,SafeAreaView,Pressable} from 'react-native';
import * as Contacts from 'expo-contacts';
import { useEffect,useState } from 'react';
import Modal from "react-native-modal";


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
  const buttonInfo = ()=>{
    console.log("====>=====>====>====>=====>");
    setModalVisible(!isModalVisible);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.info}>
        <Pressable onPress={buttonInfo}>
          <Text style={{fontSize:25}}>❔</Text>
        </Pressable>
      </View>

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
      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1,marginTop:50,justifyContent:"center",alignItems:"center",backgroundColor:"#fff" }}>
          <Text style={{color:"#000",margin:10,fontSize:20}}>Bonjour, nous avons créé cette application en réponse à un buzz (Koné Issa le charmeur de ces dames 😉). C'est juste pour s'amuser oh, c'est pas palabre. Neamoins si vous êtes intéressé par nos services, n'hésitez pas à nous contacter.</Text>
          <Text style={{color:"#000",margin:10,fontSize:20}}>Vous avez un projet de developpement informatique ? Venez nous voir, on va faire ça propre ! Et dans un bref delais.</Text>
          <Text style={{color:"#000",margin:10,fontSize:20, fontWeight:"800"}}>Mail : maraboot225@gmail.com</Text>
          <Button title="Masquer" color="#841584" onPress={buttonInfo} />
        </View>
      </Modal>

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
  info:{
    //backgroundColor:"red",
    margin:10,
    marginTop:40,
    alignSelf:"flex-end"
    
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
