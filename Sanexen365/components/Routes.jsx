import { StyleSheet, Text, View, SafeAreaView, Keyboard, Animated, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import Connexion from '../connexion/Connexion.jsx';
import Accueil from '../Accueil.jsx';
import ListeProjets from './listeChantiers/ListeProjets.jsx';
import Header from './Header.jsx';
import AppStack from './AppStack.jsx';
import { NavigationContainer } from '@react-navigation/native';

export default function Routes(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(isLoggedIn);

    return(
        <View style={styles.container}>
            {
                (!isLoggedIn) ?
                <Connexion userLoggedIn={setIsLoggedIn} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>
                :
                <>
                    <AppStack userLoggedIn={setIsLoggedIn} style={styles.AppStack} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>
                    {/* <Header userLoggedIn={setIsLoggedIn} /> */}
                </>
                
            }
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
      fontSize: 50,
    },
    container: {
        width: "100%",
        height: "100%",
    }
  });