import { View, SafeAreaView, ScrollView, Text, StyleSheet, Pressable } from "react-native";

export default function NouvelleListeAdresse({navigation, route}){

    /* Catch l'ID de document créé sur la page de chantier précédente */
    const {docId} = route.params;
    
    return(
        <SafeAreaView>
            {console.log("DocumentID: " + docId)}
            <Text style={styles.title}>Nouvelle Liste</Text>
            <ScrollView contentContainerStyle={styles.listeMaison}>

            </ScrollView >
            <View style={styles.wrapperBoutons}>
                <Pressable style={styles.ajoutBouton} onPress={() => navigation.navigate('AjoutMaison', {docId: docId})}>
                    <Text>Ajouter Maison</Text>
                </Pressable>
                <Pressable style={styles.ajoutBouton}>
                    <Text>Enregistrer</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        margin: 20
    },
    listeMaison: {
        minHeight: "70%",
        maxHeight: "85%"
    },
    wrapperBoutons: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
    },
    ajoutBouton: {
        borderWidth: 3,
        borderColor: "black",
        borderRadius: 15,
        padding: 15,
        marginVertical: 10,
        marginHorizontal: 20,
    },
})