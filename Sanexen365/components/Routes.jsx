import { StyleSheet, Text, View, SafeAreaView, Keyboard, Animated, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import Connexion from '../connexion/Connexion.jsx';
import AppStack from './AppStack.jsx';

export default function Routes(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <View style={styles.container}>
            {
                (!isLoggedIn) ?
                <Connexion userLoggedIn={setIsLoggedIn} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>
                :
                <>
                    <AppStack userLoggedIn={setIsLoggedIn} style={styles.AppStack} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>
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