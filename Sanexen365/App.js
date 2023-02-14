import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Keyboard } from 'react-native';
import { useState, useEffect } from 'react';
import Connexion from './connexion/Connexion.jsx';
import Accueil from './Accueil.jsx';
import { NativeRouter } from "react-router-native";
import Header from './components/Header.jsx';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(isLoggedIn);

  return (
    <NativeRouter>
      {/* <Header userLoggedIn={setIsLoggedIn} email={email} password={password} setEmail={setEmail} setPassword={setPassword} style={styles.header}></Header> */}
      {
        (!isLoggedIn) ?
        <Connexion userLoggedIn={setIsLoggedIn} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>
        :
        <Header userLoggedIn={setIsLoggedIn} style={styles.header}/>
      }
      <StatusBar style="auto" translucent={true}/>
    </NativeRouter>
  );
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