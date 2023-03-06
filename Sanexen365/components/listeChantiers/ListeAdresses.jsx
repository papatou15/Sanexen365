import { View, SafeAreaView, ScrollView, Text, StyleSheet, Pressable, TextInput, Switch, TextArea } from "react-native";
import { useContext, useState } from "react";
import { DataContext } from "../../utils/DataContext";

export default function ListeAdresse({navigation, route}){

    const {
        _id,
        adressList
    } = route.params;

    return(
        <SafeAreaView>
            {/* {console.log(((adressList.building[5].regularOptions.debitPression?.pressionValue != undefined || adressList.building[5].regularOptions.debitPression != undefined) ? adressList.building[5].regularOptions.debitPression.pressionValue : "marche po"))} */}
            <Text style={styles.title}>Liste des adresses</Text>
            <ScrollView contentContainerStyle={styles.adresseWrapper}>
                {
                    adressList.building.map(uneAdresse =>
                        <Pressable 
                            key={uneAdresse._key} 
                            onPress={() => navigation.navigate('Adresse', {
                                adress: (uneAdresse.adress != undefined) ? uneAdresse.adress : "Non défini",
                                buildingType: (uneAdresse.buildingType != undefined) ? uneAdresse.buildingType : "Non défini",
                                pluggedStatus: (uneAdresse.pluggedStatus != undefined) ? uneAdresse.pluggedStatus : "Non défini",
                                plugType: (uneAdresse.plugType != undefined) ? uneAdresse.plugType : "Non défini",
                                bonhomme: (uneAdresse.regularOptions.bonhommeStatus != undefined) ? uneAdresse.regularOptions.bonhommeStatus : "Non défini",
                                main: (uneAdresse.regularOptions.mainStatus != undefined) ? uneAdresse.regularOptions.mainStatus : "Non défini",
                                debit: (uneAdresse.regularOptions.debitPression?.debitValue != undefined || uneAdresse.regularOptions.debitPression != undefined) ? uneAdresse.regularOptions.debitPression.debitValue : "Non défini",
                                pression: (uneAdresse.regularOptions.debitPression?.pressionValue != undefined || uneAdresse.regularOptions.debitPression != undefined) ? uneAdresse.regularOptions.debitPression.pressionValue : "Non défini",
                                hoseAmount: (uneAdresse.regularOptions.hoseAmount != undefined) ? uneAdresse.regularOptions.hoseAmount : "Non défini",
                                antigel: (uneAdresse.regularOptions.antigel != undefined) ? uneAdresse.regularOptions.antigel : "Non défini" ,
                                comment: (uneAdresse.comments != undefined) ? uneAdresse.comments : "Aucun commentaire"
                            })}
                            style={[styles.adresse]}
                        >
                            <Text style={styles.adresseText}>{uneAdresse.adress}</Text>
                        </Pressable>    
                    )
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
    adresseWrapper: {
        margin: 20
    },
    adresse: {
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 10,
        height: 50,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    adresseText: {
        fontSize: 25,
    }
})