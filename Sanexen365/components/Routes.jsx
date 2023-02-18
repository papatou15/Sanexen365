import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, SafeAreaView, Keyboard, Animated, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import Connexion from '../connexion/Connexion.jsx';
import Accueil from '../Accueil.jsx';
import ListeProjets from './listeChantiers/ListeProjets.jsx';
import Header from './Header.jsx';

const Stack = createNativeStackNavigator();

export default function Routes(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(isLoggedIn);

    return(
        <NavigationContainer style={styles.container}>
            {
                (!isLoggedIn) ?
                <Connexion userLoggedIn={setIsLoggedIn} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>
                :
                <>
                    <Accueil userLoggedIn={setIsLoggedIn} style={styles.header}/>
                    <Header userLoggedIn={setIsLoggedIn} style={styles.header}/>
                </>
            }
            
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%'
    },
    title: {
      fontSize: 50,
    }
  });