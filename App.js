import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Contacts from 'expo-contacts';
import { useEffect } from 'react';
export default function App() {

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails, , Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          const contact = data[0];
          console.log(data.length,contact.phoneNumbers);
        }
      }
    })();
  }, []);

  //Fonction qui est appellee lorsqu'on clique sur le bouton
  const buttonClick = () => {

  };
  return (
    <View style={styles.container}>
      <Text>Cliquez pour verifier s'il y'a des mendiantes parmi vos contacts
      </Text>
      <Button
        onPress={buttonClick}
        title="Rechercher"
        color="#841584"
        accessibilityLabel=""
      />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
