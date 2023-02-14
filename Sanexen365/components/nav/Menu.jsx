import { StyleSheet, View, ScrollView, Text, Animated, Pressable } from "react-native";
import { Route, Link } from "react-router-native";
import SVGWaves from "../../utils/SVGWaves";
import { Shadow } from "react-native-shadow-2";
import { logOut } from "../../connexion/fakeAuth";

export default function Menu({ userLoggedIn, navOpenState, burgerRef, toggleMenu, email, password, setEmail, setPassword }) {
    return(
        <View style={[styles.menuContainer, {opacity: navOpenState ? 1 : 0}]}>
            <SVGWaves 
                customStyle={styles.bgSvg}
                customWidth="448"
                customHeight="268.344"
                customViewBox="0 0 448 268.344"
                customFillColor="#97e06f"
                customPattern="M430,142.9V0H0V250.344s54.754-98.827,211.018-116.053S430,142.9,430,142.9Z"
            />
            <Text style={styles.menuTitle}>Menu</Text>
            <View style={styles.nav}>
                <Pressable style={styles.navItems}>
                    <Text style={styles.navText}>Chantiers</Text>
                </Pressable>
                <Pressable style={styles.navItems}>
                    <Text style={styles.navText}>Planification</Text>
                </Pressable>
                <Pressable style={styles.navItems}>
                    <Text style={styles.navText}>Appels d'urgence</Text>
                </Pressable>
            </View>
            <Pressable style={styles.logOutBtn} onPress={() => {logOut(email, password, userLoggedIn)}}>
                <Text>Déconnexion</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    menuContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: '#6CA150',
    },
    bgSvg: {
        position: 'absolute',
        top: -25,
        left: -10,
        elevation: 2,
    },
    menuTitle:{
        fontSize: 40,
        color: 'black',
        margin: 30,
    },
    nav: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        marginTop: '25%'
    },
    navItems:{
        width: '85%',
        backgroundColor: '#efefef',
        height: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 15,
        marginTop: 20,
        borderRadius: 25,
        borderColor: '#707070',
        borderWidth: 2,
        fontSize: 25
    },
    navText:{
        fontSize: 25,
    },
    logOutBtn: {
        position: 'absolute',
        bottom: 15,
        right: 15,
        width: 150,
        height: 40,
        backgroundColor: '#efefef',
        borderRadius: 15,
        borderColor: '#707070',
        borderWidth: 2,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 10,
    }

})