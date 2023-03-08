import { View, StyleSheet, Text, ScrollView, SafeAreaView, Pressable } from "react-native";
import { Colors, Styles, Fonts } from "../../design/design";
import { DataContext } from "../../utils/DataContext";
import { useContext } from "react";

export default function ListeProjets({navigation}){

    const {projectCodes} = useContext(DataContext);

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Liste des projets</Text>
            <ScrollView style={styles.projets}>
                {
                    projectCodes.map(unProjet => 
                        <Pressable key={unProjet._id} style={styles.item} onPress={() => navigation.navigate('Projet', {
                                id: unProjet._id,
                                projectCode: unProjet.projectCode,
                                contremaitre: unProjet.refContremaitre,
                            })}>
                            <Text style={styles.projet}>{unProjet.projectCode}</Text>
                        </Pressable>
                    )
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        width: '100%',
        height: '100%'
    },
    title: {
        fontSize: 50,
        margin: 20
    },
    projets:{
        height: '80%',
        width: '80%'
    },
    item: {
        width: '100%',
        height: 100,
        borderWidth: 3,
        borderColor: Colors[2],
        borderRadius: Styles[0],
        marginVertical: 5,
        justifyContent: 'center'
    },
    projet: {
        fontSize: 25,
        textAlign: 'center'
    }
})