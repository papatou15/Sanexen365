import { StyleSheet, Text, View, SafeAreaView, Keyboard, Animated, Pressable } from 'react-native';
import Header from './components/Header';
import Burger from './components/nav/Burger';

export default function Accueil() {
    return(
        <SafeAreaView style={styles.homePage}>
            <Header></Header>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    homePage: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        height: '100%',
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
});