import { View, SafeAreaView, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import { useContext, useState } from "react";
import { DataContext } from "../../utils/DataContext";
import { Icon } from "@rneui/themed";

export default function ListeAppels({navigation, route}){

    const {ticket} = useContext(DataContext)

    return(
        <SafeAreaView style={{flex: 1}}>
            <View>
                <Text style={styles.title}>Appels d'urgence</Text>
                <View style={styles.filterSortWrapper}>
                    <Pressable style={[styles.button, styles.sortButton]}>
                        <Text style={styles.buttonText}>Trier</Text>
                        <Icon name="arrowup" type="antdesign" />
                        <Icon name="arrowdown" type="antdesign" />
                    </Pressable>
                    <Pressable style={[styles.button, styles.filterButton]}>
                        <Text style={styles.buttonText}>Filtres</Text>
                        <Icon name="filter" type="antdesign" />
                    </Pressable>
                </View>
            </View>
            
            <ScrollView>
                {
                    (ticket != undefined) ?
                    ticket.map(unTicket => 
                        <Pressable 
                            key={unTicket._key} 
                            style={[styles.ticket, { borderColor: 
                                {
                                    "new" : "#4282C7",
                                    "ongoing" : "#6C00C9",
                                    "finished" : "#97E06F"
                                }[unTicket.status]
                            }]}
                            onPress={() => navigation.navigate('Appel', {
                                id: unTicket._id,
                                nom: unTicket.nom,
                                adress: unTicket.adress,
                                phone: unTicket.phone,
                                mail: unTicket.email,
                                issue: unTicket.issue,
                                issueBreakOptions: (unTicket.issueBreakOptions != undefined) ? unTicket.issueBreakOptions : null,
                                issueNoWaterOptions: (unTicket.issueNoWaterOptions != undefined) ? unTicket.issueNoWaterOptions : null,
                                description: unTicket.description,
                                status: unTicket.status
                            })}
                        >
                            <Text style={styles.ticketName}>{unTicket.nom}</Text>
                            <Text style={styles.ticketAdress}>{unTicket.adress}</Text>
                            <Text style={styles.ticketIssue}>{
                                    {
                                        "break" : "Fuite/Bris",
                                        "nowater" : "Pas d'eau",
                                        "signalisation" : "Signalisation",
                                        "question" : "Question générale",
                                        "complaint" : "Plainte",
                                        "other" : "Autre"
                                    }[unTicket.issue]
                                }
                            </Text>
                            <Text style={styles.ticketStatus}>{
                                    {
                                        "new" : "Nouveau",
                                        "ongoing" : "En cours...",
                                        "finished" : "Terminé"
                                    }[unTicket.status]
                                }
                            </Text>
                        </Pressable>
                    )
                    :
                    <></>
                }
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        margin: 20
    },
    filterSortWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    button: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 10,
        width: 120,
        height: 50,
    },
    ticket:{
        width: "90%",
        margin: 20,
        padding: 7,
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 10
    },
    ticketName: {
        fontSize: 20,
    },
    ticketStatus: {
        textAlign: "right",
        fontStyle: "italic"
    }
    
})