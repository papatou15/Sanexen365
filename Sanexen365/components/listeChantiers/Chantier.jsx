import { View, SafeAreaView, ScrollView, Text, StyleSheet, Pressable } from "react-native";
import client from "../../utils/Sanity";
import { useState } from "react";
import { Button } from "@rneui/base";
import { Icon } from "@rneui/base";

export default function Chantier({navigation, route}){

    /* Animation de loading */

    const [isLoading, setIsLoading] = useState(false);

    const {_id,
        name,
        codeProjet,
        adressList,
        contremaitres,
        plans} = route.params;

    const newDoc = {
        _type: 'adressList',
        refListeChantier: {
            _type: 'reference',
            _ref: _id
        }
    }

    async function updateRefListeAdresse(newId){
        client.patch(_id)
        .set({refAdressList: {
            _type: 'reference',
            _ref: newId
        }})
        .commit()
    }

    async function createNewDoc(){
        setIsLoading(true);
        client.create(newDoc).then(response => {
            updateRefListeAdresse(response._id)
            navigation.navigate('NouvelleListeAdresse', {docId: response._id}), 
            console.log(response),
            setIsLoading(false);
        }).catch(error => console.error(error))
    }
        
    return(
        <SafeAreaView>
            {
                (isLoading == true) ?
                <View style={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    justifyContent: "center",
                    alignItems: "center",
                    width: '100%',
                    height: '100%',
                    position: "absolute"
                }}>
                    <Button
                        type="clear"
                        buttonStyle={{ width: 200, height: 200 }}
                        containerStyle={{ margin: 5 }}
                        disabledStyle={{
                            borderWidth: 2,
                            borderColor: "#0F0"
                        }}
                        disabledTitleStyle={{ color: "#0F0" }}
                        linearGradientProps={null}
                        icon={<Icon name="react" size={15} color="#0F0" />}
                        iconContainerStyle={{ background: "#000" }}
                        loading
                        loadingProps={{ animating: true }}
                        loadingStyle={{ backgroundColor: "rgba(255, 255, 255, 0.7)", transform: [{scale: 3}] }}
                        titleProps={{}}
                        titleStyle={{ marginHorizontal: 5 }}
                    />
                </View>
                
                :
                <></>
            }
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
                        {
                            (adressList == null) ?
                            <Pressable 
                                style={styles.listeMaisonBouton} 
                                onPress={() => {
                                    createNewDoc()
                                }}
                            >
                                <Text>Nouvelle Liste</Text>
                            </Pressable>
                            :
                            <Pressable 
                                style={styles.listeMaisonBouton} 
                                onPress={() => 
                                    navigation.navigate('ListeAdresse', {
                                        _id: _id,
                                        adressList: adressList
                                    })}
                            >
                                <Text>Liste Existante</Text>
                            </Pressable>

                        }
                        
                        
                    </View>
                </View>

                {/* Liste des plans */}

                <View style={styles.majorSection}>
                    <Text style={styles.sectionTitle}>Plans</Text>
                    <View style={styles.wrapperPlans}>
                        {
                            (plans != "Indisponible") ?

                            plans.map(unPlan => {
                                (unPlan != null)
                                ?
                                <View style={styles.unPlan}>
                                    <Text>{unPlan.asset}</Text>
                                </View>
                                :
                                <Text>Aucun Plans</Text>
                            })
                            :
                            <Text>Aucun Plans</Text>
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