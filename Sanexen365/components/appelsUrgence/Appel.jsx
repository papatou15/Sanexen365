import { View, SafeAreaView, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import client from "../../utils/Sanity";

export default function Appel({navigation, route}){

    const {
        id,
        nom,
        adress,
        phone,
        mail,
        issue,
        issueBreakOptions,
        issueNoWaterOptions,
        description,
        status
    } = route.params;

    const [ ouvrirModale, setOuvrirModale ] = useState(false);

    function toggleModale(){
        setOuvrirModale(!ouvrirModale)
    }

    function updateStatus(statusToUpdate){
        client.patch(id)
        .set({status: statusToUpdate})
        .commit()
    }

    return(
        <SafeAreaView style={styles.body}>
            <View style={styles.headerWrapper}>
                <Text style={styles.title}>Ticket</Text>
                <Pressable style={({pressed}) => [{backgroundColor: pressed ? "#707070" : "white"},styles.toggleModalButton]} onPress={() => toggleModale()}>
                    <Text>Changer le status...</Text>
                </Pressable>
            </View>
            
            <View style={styles.infoWrapper}>
                <Text style={styles.infoTitle}>Informations</Text>
                <ScrollView contentContainerStyle={styles.infoScroller}>

                    <View style={styles.sectionTitle}>
                        <Text style={styles.subtitle}>Appelant</Text>
                        <Text style={styles.info}>{nom}</Text>
                    </View>

                    <View style={styles.sectionTitle}>
                        <Text style={styles.subtitle}>Adresse</Text>
                        <Text style={styles.info}>{adress}</Text>
                    </View>

                    <View style={styles.sectionTitle}>
                        <Text style={styles.subtitle}>Numéro de téléphone</Text>
                        <Text style={styles.info}>{phone}</Text>
                    </View>

                    <View style={styles.sectionTitle}>
                        <Text style={styles.subtitle}>Email</Text>
                        <Text style={styles.info}>{mail}</Text>
                    </View>

                    <View style={styles.sectionTitle}>
                        <Text style={styles.subtitle}>Problème</Text>
                        <Text style={styles.info}>{
                            {
                                "break" : "Fuite/Bris",
                                "nowater" : "Pas d'eau",
                                "signalisation" : "Signalisation",
                                "question" : "Question générale",
                                "complaint" : "Plainte",
                                "other" : "Autre"
                            }[issue]
                        }
                        {
                            {
                                "break" : {
                                    "white" : ' -- Blanc 1/2"',
                                    "blue" : ' -- Bleu 2" 1/2',
                                    "yellow" : ' -- Jaune 6"',
                                    "excavation" : ' -- Excavation',
                                    "other" : ' -- Other'
                                }[issueBreakOptions],
                                "nowater" : {
                                    "disconnected" : "Hose déconnectée",
                                    "other" : "Autre"
                                }[issueNoWaterOptions]
                            }[issue]
                        }
                        </Text>
                    </View>

                    <View style={styles.sectionTitle}>
                        <Text style={styles.subtitle}>Description/Information</Text>
                        <View style={styles.commentWrapper}>
                            <Text style={styles.comment}>{description}</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>

            {
                (ouvrirModale) ? 
                <View style={styles.opacityBG}>
                    <View style={styles.boiteModaleWrapper}>
                        <Pressable style={({pressed}) => [{backgroundColor: pressed ? "#707070" : "white"}, styles.statusChange]} 
                            onPress={() => {
                                    toggleModale(),
                                    (status != "ongoing" || status != "finished") ?
                                    updateStatus("ongoing")
                                    :
                                    null
                                }
                            }
                        >
                            <Text style={styles.statusChangeText}>En cours</Text>
                        </Pressable>
                        <Pressable style={({pressed}) => [{backgroundColor: pressed ? "#707070" : "white"}, styles.statusChange]}
                            onPress={() => {
                                    toggleModale(),
                                    (status != "finished") ?
                                    updateStatus("finished")
                                    :
                                    null
                                } 
                            }
                        >
                            <Text style={styles.statusChangeText}>Terminé</Text>
                        </Pressable>
                        <Pressable style={({pressed}) => [{backgroundColor: pressed ? "#707070" : "white"}, styles.statusChange]}
                            onPress={() =>{
                                    toggleModale(),
                                    (status != "new" || status != "finished") ?
                                    updateStatus("new")
                                    :
                                    null
                                }
                            }
                        >
                            <Text style={styles.statusChangeText}>Nouveau</Text>
                        </Pressable>


                        <Pressable style={({pressed}) => [{backgroundColor: pressed ? "#707070" : "white"}, styles.statusChange, {width: "70%", height: "15%"}]}
                            onPress={() => 
                                toggleModale()
                            }
                        >
                            <Text>Annuler</Text>
                        </Pressable>
                    </View>
                </View>
                :
                <></>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    body: {
        width: "100%",
        height: "100%"
    },
    title: {
        fontSize: 50,
        margin: 20
    },
    headerWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    toggleModalButton: {
        marginRight: 50,
        borderWidth: 3,
        borderRadius: 15,
        width: 170,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    infoWrapper: {
        marginHorizontal: 20,
    },
    infoTitle: {
        fontSize: 35,
        marginLeft: 15,
        marginBottom: 20
    },
    infoScroller: {
        borderWidth: 3,
        borderRadius: 15,
        padding: 15
    },
    sectionTitle: {
        marginVertical: 5,
    },
    subtitle: {
        fontSize: 25,

    },
    info: {
        marginLeft: 15,
        fontSize: 17
    },
    commentWrapper: {
        borderWidth: 3,
        borderRadius: 15,
        padding: 15,
        marginVertical: 10
    },
    opacityBG: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        width: "100%",
        height: "100%",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
    },
    boiteModaleWrapper: {
        width: 200,
        height: 300,
        justifyContent: "space-between",
        alignItems: "center"
    },
    statusChange: {
        width: "100%",
        height: "20%",
        borderWidth: 3,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    statusChangeText: {
        fontSize: 20
    }
})