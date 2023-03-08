import { View, SafeAreaView, ScrollView, Text, StyleSheet, Pressable, TextInput, Switch, TextArea } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { useState, useEffect } from "react";
import client from "../../utils/Sanity";
import { Button } from "@rneui/base";
import { Icon } from "@rneui/base";


export default function AjoutMaison({navigation, route}){

    /* Catch l'ID de document à updater */

    const {docId} = route.params;

    /* Animation de loading */

    const [isLoading, setIsLoading] = useState(false);

    /* Enregistrer l'adresse*/ 
    
    const [adress, setAdress] = useState("")

    /* Choix pour le type de building */

    const buildingType = [
        {key: 'house', value: 'Maison'},
        {key: 'industrial', value: 'Industriel/Commercial'}
    ];
    const [buildingSelected, setBuildingSelected] = useState(null);

    /* Choix pour le type de branchement */

    const plugType = [
        {key: 'direct', value: 'Direct'},
        {key: 'regular', value: 'Régulier'}
    ]
    const [plugSelected, setPlugSelected] = useState(null)

    /* Boolean pour le branchement */

    const [isPlugged, setIsPlugged] = useState(false);
    const togglePlugged = () => setIsPlugged(previousState => !previousState);
    
    /* Boolean pour le bonhomme */

    const [isCityMainClosed, setIsCityMainClosed] = useState(false);
    const toggleCityMainClosed = () => setIsCityMainClosed(previousState => !previousState)

    /* Boolean pour le main */

    const [isMainClosed, setIsMainClosed] = useState(false);
    const toggleMainClosed = () => setIsMainClosed(previousState => !previousState);

    /* Enregistre le débit et la pression */

    const [pression, setPression] = useState(0);
    const [debit, setDebit] = useState(0);

    /* Enregistre le nombre de hose */

    const [nbHoses, setNbHoses] = useState(0);

    /* Boolean pour antigel */

    const [isAntifreeze, setIsAntifreeze] = useState(false);
    const toggleAntifreeze = () => setIsAntifreeze(previousState => !previousState);

    /* Enregistre les commentaires */

    const [comment, setComment ] = useState("");

    console.log(
        "Adresse: " + adress +
        " Type de batiment: " + buildingSelected +
        " Branchement fait: " + isPlugged + 
        " Type de branchement: " + plugSelected + 
        " Bonhomme fermé: " + isCityMainClosed +
        " Main fermé: " + isMainClosed +
        " Débit: " + debit + 
        " Pression: " + pression + 
        " Nb de hoses: " + nbHoses + 
        " Antigel: " + isAntifreeze + 
        " Commentaire additionnel: " + comment
    )

    function SendData(
        newAdress, 
        newBuildingType, 
        isPlugged, 
        newPlugType, 
        isCityMainClosed, 
        isMainClosed, 
        newPression, 
        newDebit, 
        nbHoses, 
        isAntifreeze, 
        comment,
        idDocListe ){
            setIsLoading(true);
            const updateDoc = [{
                adress: newAdress,
                buildingType: newBuildingType,
                pluggedStatus: isPlugged,
                plugType: newPlugType,
                regularOptions: {
                    bonhommeStatus: isCityMainClosed,
                    mainStatus: isMainClosed,
                    debitPression: {
                        debitValue: newDebit,
                        pressionValue: newPression
                    },
                    hoseAmount: nbHoses,
                    antigel: isAntifreeze,
                },
                comments: comment
            }]
    
            client.patch(docId)
            .setIfMissing({building: []})
            .append('building', updateDoc)
            .commit({autoGenerateArrayKeys: true})
            .then(response => {
                console.log(response)
                setIsLoading(false)
            }).catch(error => console.error(error)
        );
    
        /* Reset les valeurs */
        setAdress("");
        setBuildingSelected(null);
        setIsPlugged(false);
        setPlugSelected(null);
        setIsCityMainClosed(false);
        setIsMainClosed(false);
        setPression(0);
        setDebit(0);
        setNbHoses(0);
        setIsAntifreeze(0);
    }

    return(
        <SafeAreaView style={{flex: 1}}>
            {console.log("docId dans AjoutMaison.jsx:" + docId)}
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
                        loadingStyle={{ backgroundColor: "rgba(0, 0, 0, 0.7)", borderRadius: 15, transform: [{scale: 3}] }}
                        titleProps={{}}
                        titleStyle={{ marginHorizontal: 5 }}
                    />
                </View>
                
                :
                <></>
            }
            <Text style={styles.title}>Ajouter une nouvelle adresse</Text>
            <ScrollView contentContainerStyle={styles.formWrapper} >

                {/* Adresse */}
                <View style={styles.formInputWrapper}>
                    <Text style={styles.inputTitle}>Adresse</Text>
                    <TextInput 
                        placeholder="Adresse..."
                        onChangeText={(adresse) => setAdress(adresse)}
                        style={styles.input}
                    />
                </View>
                
                {/* Type de batiment */}
                <View style={styles.formInputWrapper}>
                    <Text style={styles.inputTitle}>Type de batiment</Text>
                    <SelectList
                        setSelected={(val) => setBuildingSelected(val)}
                        data={buildingType}
                        save="key"
                        search={false}
                    />
                </View>

                {/* Branchement fait toggle */}
                <View style={[styles.formInputWrapper, styles.formInputWrapperHorizontal]}>
                    <Text style={styles.inputTitle}>Branchement fait?</Text>
                    <Switch
                        trackColor={{false: 'black', true: '#97E06F'}}
                        thumbColor='white'
                        onValueChange={togglePlugged}
                        value={isPlugged}
                    />
                </View>

                {/* Type de branchement */}
                <View style={styles.formInputWrapper}>
                    <Text style={styles.inputTitle}>Type de branchement</Text>
                    <SelectList
                        setSelected={(val) => setPlugSelected(val)}
                        data={plugType}
                        save="key"
                        search={false}
                    />
                </View>


                {/* Section qui apparait seulement quand le type de branchement est set sur "regular (Régulier)" */}
                {
                    (plugSelected == "regular") ?
                    <View style={styles.additionalOptionsWrapper}>
                        
                        {/* Bonhomme fermé toggle */}
                        <View style={[styles.formInputWrapper, styles.formInputWrapperHorizontal]}>
                            <Text style={styles.inputTitle}>Bonhomme fermé?</Text>
                            <Switch
                                trackColor={{false: 'black', true: '#97E06F'}}
                                thumbColor='white'
                                onValueChange={toggleCityMainClosed}
                                value={isCityMainClosed}
                            />
                        </View>

                        {/* Main fermé toggle */}
                        <View style={[styles.formInputWrapper, styles.formInputWrapperHorizontal]}>
                            <Text style={styles.inputTitle}>Main fermé?</Text>
                            <Switch
                                trackColor={{false: 'black', true: '#97E06F'}}
                                thumbColor='white'
                                onValueChange={toggleMainClosed}
                                value={isMainClosed}
                            />
                        </View>

                        {/* Section pour insérer le débit et la pression du batiment */}
                        <View style={styles.pressureWrapper}>
                            {/* Débit */}
                            <View style={styles.pressureSection}>
                                <Text style={styles.inputTitle}>Débit</Text>
                                <TextInput 
                                    keyboardType="numeric"
                                    style={styles.inputSmall}
                                    onChangeText={(value) => setDebit(value)}
                                />
                            </View>
                            {/* Pression */}
                            <View style={styles.pressureSection}>
                                <Text style={styles.inputTitle}>Pression</Text>
                                <TextInput 
                                    keyboardType="numeric"
                                    style={styles.inputSmall}
                                    onChangeText={(value) => setPression(value)}
                                />
                            </View>
                        </View>

                        {/* Nombre de hoses branchée */}
                        <View style={[styles.formInputWrapper, styles.formInputWrapperHorizontal]}>
                            <Text style={styles.inputTitle}>Nombre de hoses</Text>
                            <TextInput 
                                keyboardType="numeric"
                                style={styles.inputSmall}
                                onChangeText={(value) => setNbHoses(value)}
                            />
                        </View>

                        {/* Antigel toggle */}
                        <View style={[styles.formInputWrapper, styles.formInputWrapperHorizontal]}>
                            <Text style={styles.inputTitle}>Antigel?</Text>
                            <Switch
                                trackColor={{false: 'black', true: '#97E06F'}}
                                thumbColor='white'
                                onValueChange={toggleAntifreeze}
                                value={isAntifreeze}
                            />
                        </View>
                    </View>
                    :
                    <></>
                }

                {/* Section de commentaire */}
                <View style={styles.formInputWrapper}>
                    <Text style={styles.inputTitle}>Commentaire additionel</Text>
                    <TextInput
                        style={styles.input}
                        multiline={true}
                        numberOfLines={5}
                        textAlignVertical="top"
                        onChangeText={(value) => setComment(value)}
                    />
                </View>

                {/* Boutons de confirmations */}
                <View style={styles.formSendButtonsWrapper}>
                    <Pressable 
                        style={styles.ajoutBouton}
                        onPress={() => SendData(
                            adress,
                            buildingSelected,
                            isPlugged,
                            plugSelected,
                            isCityMainClosed,
                            isMainClosed,
                            pression,
                            debit,
                            nbHoses,
                            isAntifreeze,
                            comment,
                            docId
                        )}
                    >
                        <Text style={styles.ajoutBoutonText}>Maison additionnelle</Text>
                    </Pressable>
                    <Pressable style={styles.ajoutBouton}>
                        <Text style={styles.ajoutBoutonText}>Enregistrer</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    title: {
        fontSize: 45,
        margin: 20
    },
    formWrapper: {
        marginHorizontal: 20,
        paddingBottom: 20,
    },
    formInputWrapper: {
        margin: 5
    },
    formInputWrapperHorizontal: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    inputTitle: {
        fontSize: 25,
        margin: 10,
    },
    input: {
        borderWidth: 3,
        fontSize: 15,
        padding: 10,
        borderRadius: 10
    },
    inputSmall: {
        borderWidth: 3,
        fontSize: 15,
        padding: 10,
        borderRadius: 10,
        width: "30%"
    },
    pressureWrapper: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%"
    },
    pressureSection: {
        alignItems: "center",
        width: "100%"
    },
    formSendButtonsWrapper: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    ajoutBouton: {
        borderWidth: 3,
        borderColor: "black",
        borderRadius: 10,
        padding: 15,
        marginTop: 50,
        width: "40%",
        justifyContent: "center"
    },
    ajoutBoutonText: {
        fontSize: 15,
        textAlign: "center"
    }
})