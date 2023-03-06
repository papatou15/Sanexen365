import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Keyboard } from 'react-native';
import Routes from './components/Routes';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import useFetchData from './utils/useFetchData';
import { DataContext } from './utils/DataContext';

/* OBLIGAOIRE POUR POUVOIR FETCH */
import 'react-native-url-polyfill/auto'

export default function App() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [appData, setAppData] = useState({
    ticket: [],
    listeChantier: [],
    employes: [],
    projectCodes: []
  });

  useFetchData(setAppData, isLoaded, setIsLoaded);
  
  //console.log(appData.listeChantier[0].refAdressList);


  return (
    <DataContext.Provider value={appData}>
      <View>
        <Routes/>
        <StatusBar style="auto" translucent={true} hidden={true}/>
      </View>
    </DataContext.Provider>
  );
}