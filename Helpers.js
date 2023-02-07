import * as Contacts from 'expo-contacts';

let contacts;

// La liste des numéros des mendiantes
let womenBeggarsNumbers = [
    "0501342520",
    "0788492843",
    "0700503642",
    "0767895989",
    "0797652594",
    "0702025048",
    "0778398181",
    "0758865728",
    "0173575614",
    "0797704570",
    "0150544198",
    "0798714717",
    "0703007523",
    "0704517110",
    "0703007523",
    "0142583202",
    "0749026887",
    "0709333066",
    "0768181597",
    "0779301424",
    "0777026733",
    "0586591734",
    "0171737814",
    "0140054277",
    "0704546721",
    "0757116532",
    "0778764819",
    "0700917487",
    "0797823907",
    "0501727302",
    "0769762846",
    "0703809275",
    "0767194974",
    "0170845515",
    "0749864331",
    "0142401359",
    "0544472715",
    "0749643078",
    "0787259306",
    "0759641882",
    "0769420523",
    "0700428399",
    "0700243845",
    "0151098540",
    "0170713690",
    "0759150125",
    "0759150125",
    "0101016126",
    "0789398214",
    "0704040228",
    "0584722117",
    "0142642768",
    "0768406995",
    "0778594576",
    "0797734065",
    "0797948108",
    "0141062250",
    "0768292704"
];

//Fonction qui renvoie true si un numéro appartient à la liste des mendiantes
export function isBeggar(number) {
    return womenBeggarsNumbers.find(n => ("" + number).includes(n)) ? true : false;
}

export async function getContacts() {

    const { status } = await Contacts.requestPermissionsAsync();
    if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
            contacts = data;
        }
        else {
            contacts = [];
        }
        return true;
    }
    return false;

}

export async function checkBeggars() {
    let isGranted = await getContacts();
    if (!isGranted) {
        return { success: false }
    }
    let beggars = [];
    contacts.forEach(contact => {
        let phoneNumbers = contact.phoneNumbers || [];
        for (let i = 0; i < phoneNumbers.length; i++) {
            let number = phoneNumbers[i].number;
            if (isBeggar(number)) {
                beggars.push({ name: contact.name, number: number })
                return;
            }
        }
    });
    return { success: true, data: beggars, dataCount: beggars.length };
}

