import { View, SafeAreaView, ScrollView, Text, StyleSheet, Pressable } from "react-native";


export default function Adresse({navigation, route}){

    /* Catch les props envoyé par la page précédente (listeAdresses.jsx) */

    const {
        adress,
        buildingType,
        pluggedStatus,
        plugType,
        bonhomme,
        main,
        debit,
        pression,
        hoseAmount,
        antigel,
        comment
    } = route.params;

    return(
        <SafeAreaView style={{flex: 1}}>
            <Text style={styles.title}>{adress}</Text>
            <ScrollView contentContainerStyle={styles.scrollWrapper}>
                <View style={styles.infoWrapper}>
                    <Text style={styles.wrapperTitle}>Informations de branchement</Text>
                    <View style={styles.infoContainer}>
                        <View style={styles.infoSection}>
                            <Text style={styles.infoTitre}>Type de batiment</Text>
                            <Text style={styles.infoText}>{(buildingType == 'house') ? 'Maison/Appartement' : 'Industriel/Commercial'}</Text>
                        </View>

                        <View style={styles.infoSection}>
                            <Text style={styles.infoTitre}>Branchement fait?</Text>
                            <Text style={styles.infoText}>{(pluggedStatus) ? "Oui" : "Non"}</Text>
                        </View>

                        <View style={styles.infoSection}>
                            <Text style={styles.infoTitre}>Type de branchement</Text>
                            <Text style={styles.infoText}>{(plugType == 'regular') ? "Régulier" : "Direct"}</Text>
                        </View>

                        <View style={styles.infoSection}>
                            <Text style={styles.infoTitre}>Statut du bonhomme</Text>
                            <Text style={styles.infoText}>{(bonhomme) ? "Fermé" : "Ouvert"}</Text>
                        </View>

                        <View style={styles.infoSection}>
                            <Text style={styles.infoTitre}>Statut du main</Text>
                            <Text style={styles.infoText}>{(main) ? "Fermé" : "Ouvert"}</Text>
                        </View>

                        <View style={styles.infoSection}>
                            <Text style={styles.infoTitre}>Débit/Pression</Text>
                            <Text style={styles.infoText}>{debit} L/m ----- {pression} PSI</Text>
                        </View>

                        <View style={styles.infoSection}>
                            <Text style={styles.infoTitre}>Nombre de hose</Text>
                            <Text style={styles.infoText}>{hoseAmount}</Text>
                        </View>

                        <View style={styles.infoSection}>
                            <Text style={styles.infoTitre}>Antigel?</Text>
                            <Text style={styles.infoText}>{(antigel) ? "Oui" : "Non"}</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.wrapperTitle}>Commentaire/Note</Text>
                    <View style={styles.commentBox}>
                        <Text>{comment}</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        margin: 20,
        marginLeft: 40,
        marginBottom: 0
    },
    scrollWrapper: {
        margin: 20,
        marginTop: 0
    },
    infoWrapper: {

    },
    wrapperTitle: {
        fontSize: 25,
        marginVertical: 20
    },
    infoContainer: {
        borderWidth: 3,
        borderRadius: 15,
        padding: 20,
    },
    infoSection: {
        marginVertical: 8
    },
    infoTitre: {
        fontSize: 22
    },
    infoText: {
        marginLeft: 10,
        marginTop: 5
    },
    commentBox: {
        borderWidth: 3,
        borderRadius: 15,
        padding: 20,
        marginBottom: 20
    }
})