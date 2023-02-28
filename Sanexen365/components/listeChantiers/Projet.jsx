import { View, StyleSheet, FlatList, Text, StatusBar, SafeAreaView, Pressable, ScrollView } from "react-native";
import { DataContext } from "../../utils/DataContext";
import { useContext } from "react";
import { Colors, Styles, Fonts } from "../../design/design";

export default function Projet({route, navigation}) {

    const { _id, projectCode, contremaitre } = route.params;
    const { listeChantier } = useContext(DataContext);


    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.projetTitle}>{projectCode}</Text>
                <Text style={styles.foremanTitle}>Contremaitres</Text>
                <View style={styles.foremanList}>
                    {
                        (contremaitre != null) ?
                        contremaitre.map(unContremaitre => <Text key={unContremaitre._id} style={styles.foreman}>{unContremaitre.name} {unContremaitre.lastName}</Text>)
                        :
                        <Text>Pas de contremaitre</Text>
                    }
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.listeChantier}>
                {
                    listeChantier.map(unChantier => 
                        (unChantier.project.projectCode == projectCode)
                        ?
                        <Pressable key={unChantier._id} style={styles.chantier} onPress={() => navigation.navigate('Chantier', {
                            _id: unChantier._id,
                            name: unChantier.name,
                            codeProjet: unChantier.project.projectCode,
                            adressList: unChantier.refAdressList,
                            contremaitres: unChantier.foreman,
                            plans: unChantier.plan
                            })}>
                            <Text style={styles.chantierText}>{unChantier.name}</Text>
                        </Pressable>
                        :
                        <></>
                    )
                }
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    projetTitle: {
        fontSize: 65,
        margin: 20,
    },
    foremanTitle: {
        fontSize: 30,
        margin: 20,
        marginTop: 0,
    },
    foremanList: {
        margin: 20,
        marginLeft: 40,
        marginTop: 0,
    },
    foreman:{
        fontSize: 20,

    },
    listeChantier: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    chantier: {
        width: '80%',
        height: 100,
        borderWidth: 3,
        borderColor: Colors[2],
        borderRadius: Styles[0],
        marginVertical: 5,
        justifyContent: 'center'
    },
    chantierText: {
        fontSize: 20,
        textAlign: 'center'
    }
})