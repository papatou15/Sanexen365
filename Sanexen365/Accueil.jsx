import { StyleSheet, Text, View, ScrollView, SafeAreaView, Keyboard, Animated, Pressable } from 'react-native';
import getDate from './utils/getDate';
import Header from './components/Header';

export default function Accueil({ userLoggedIn }) {
    const date = getDate();
    
    return(
        <View style={styles.homePage}>
            <View style={styles.welcomeTitle}>
                <Text style={styles.nameTitle}>Bonjour Antoine</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
            <ScrollView style={styles.sectionBtnsWrapper} nestedScrollEnabled={true} >
                <Pressable style={styles.sectionButtons}>
                    <Text style={styles.sectionBtnsText}>Accéder à la liste des chantiers</Text>
                </Pressable>
                <Pressable style={styles.sectionButtons}>
                    <Text style={styles.sectionBtnsText}>Accéder à la planification</Text>
                </Pressable>
                <Pressable style={styles.sectionButtons}>
                    <Text style={styles.sectionBtnsText}>Appels d'urgence</Text>
                </Pressable>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    homePage: {
        backgroundColor: 'rgba(0,0,0,0)',
        height: '100%',
        width: '100%',
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 70
    },
    welcomeTitle: {
        width: '80%',
        height: 200,
        marginTop: 30,
    },
    nameTitle: {
        fontSize: 60,
    },
    date: {
        fontSize: 30,
    },
    sectionBtnsWrapper: {
        width: '80%',
        paddingTop: 20
    },
    sectionButtons: {
        width: "100%",
        height: 125,
        marginVertical: 10,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'flex-end',
        borderColor: '#707070',
        borderWidth: 3,
        borderRadius: 12,
    },
    sectionBtnsText: {
        fontSize: 15,
        width: "50%",
        textAlign: 'right',
    },
});