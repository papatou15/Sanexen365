import { View, SafeAreaView, ScrollView, Text, StyleSheet, Pressable } from "react-native";

export default function Chantier({navigation, route}){

    const {_id,
        name,
        codeProjet,
        adressList,
        contremaitres,
        plans} = route.params;
        
    return(
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text style={styles.title}>{name}</Text>
                </View>

                {/* Bloc d'information */}

                <View style={styles.infoBlock}>
                    <Text style={styles.infoTitle}>Informations</Text>
                    <View style={styles.infoWrapper}>
                        <View style={styles.infoSection}>
                            <Text style={styles.infoSectionTitle}>Code de projet</Text>
                            <Text style={styles.info}>{codeProjet}</Text>
                        </View>
                        <View style={styles.infoSection}>
                            <Text style={styles.infoSectionTitle}>Contremaitre assigné</Text>
                            <Text style={styles.info}>{contremaitres.name} {contremaitres.lastName}</Text>
                            <Text style={styles.info}>{contremaitres.phone}</Text>
                        </View>
                    </View>
                </View>

                {/* Liste des maisons */}

                <View style={styles.majorSection}>
                    <Text style={styles.sectionTitle}>Liste des maisons</Text>
                    <View style={styles.wrapperBoutons}>
                        <Pressable style={styles.listeMaisonBouton} onPress={() => navigation.navigate('ListeAdresse')} disabled={(adressList != null) ? false : true}>
                            <Text>Liste Existante</Text>
                        </Pressable>
                        <Pressable style={styles.listeMaisonBouton} onPress={() => navigation.navigate('NouvelleListeAdresse')}>
                            <Text>Nouvelle Liste</Text>
                        </Pressable>
                    </View>
                </View>

                {/* Liste des plans */}

                <View style={styles.majorSection}>
                    <Text style={styles.sectionTitle}>Plans</Text>
                    <View style={styles.wrapperPlans}>
                        {
                            plans.map(unPlan => {
                                (unPlan != null)
                                ?
                                <View style={styles.unPlan}>
                                    <Text>{unPlan.asset}</Text>
                                </View>
                                :
                                <Text>Aucun Plans</Text>
                            })
                        }
                    </View>
                </View>

                {/* Liste des notes (à venir) */}

                <View style={styles.majorSection}>
                    <Text style={styles.sectionTitle}>Notes</Text>
                    <Text style={styles.noteToCome}>À venir</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 60,
        margin: 20,
    },
    infoBlock: {
        width: "90%",
        marginHorizontal: 20,
    },
    infoTitle: {
        fontSize: 35,
        marginLeft: 20,
        marginBottom: 10,
    },
    infoWrapper: {
        borderColor: "black",
        borderWidth: 3,
        borderRadius: 25,
        padding: 15
    },
    infoSection: {
        margin: 5
    },
    infoSectionTitle: {
        fontSize: 25,
    },
    info: {
        fontSize: 16,
        color: "black"
    },

    majorSection: {
        width: "100%"
    },
    sectionTitle: {
        fontSize: 35,
        margin: 20,
    },
    wrapperBoutons: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around"
    },
    listeMaisonBouton: {
        borderWidth: 3,
        borderColor: "black",
        borderRadius: 15,
        padding: 15,
        marginVertical: 10,
        marginHorizontal: 20,
    },

    wrapperPlans:{
        width: "100%",
    },
    unPlan: {
        borderWidth: 3,
        borderColor: "black"
    },

    noteToCome:{
        fontSize: 16,
        color: "black",
        margin: 20,
        marginTop: 0,
    }

})