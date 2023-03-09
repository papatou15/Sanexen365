import Accueil from "../Accueil";
import Header from "./Header";
import { Burger } from "./nav/Burger";
import Menu from "./nav/Menu";
import ListeProjets from './listeChantiers/ListeProjets.jsx';
import ListeChantiers from './listeChantiers/ListeChantiers.jsx';
import ListeAppels from "./appelsUrgence/ListeAppels";
import Projet from "./listeChantiers/Projet";
import Chantier from "./listeChantiers/Chantier";
import AjoutMaison from "./listeChantiers/AjoutMaison";
import NouvelleListeAdresse from "./listeChantiers/NouvelleListeAdresse";
import NouvelleAdresse from "./listeChantiers/NouvelleAdresse";
import ListeAdresse from "./listeChantiers/ListeAdresses";
import Adresse from "./listeChantiers/Adresse";
import Appel from "./appelsUrgence/Appel";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { useState, useRef } from "react";
import { Colors } from "../design/design";


const Stack = createNativeStackNavigator();


/**
 * Navigation de l'app
 * 
 * Ce composant permet la navigation dans l'application
 * Dans le NavigationContainer, tout les Stacks (pages) sont définis à l'intérieur du navigateur.
 * Le menu burger s'affiche aussi à partir de cette page.
 * Le header est aussi géré par le Stack Navigator.
 * 
 */
export default function AppStack({ userLoggedIn, email, setEmail, password, setPassword }) {


    const [navOpenState, setNavOpenState] = useState(false);

    const burgerRef = useRef(null);

    const toggleMenu = () => {
        setNavOpenState(!navOpenState);
    };

    return(
        <NavigationContainer style={styles.container}>
            <Stack.Navigator 
            initialRouteName="Accueil"
            screenOptions={{
                headerRight: (props) => (
                    <Burger ref={burgerRef} navOpenState={navOpenState} toggleMenu={toggleMenu} {...props} />
                ),
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: Colors[0]
                }
            }}
            >
                <Stack.Screen name="Accueil" component={Accueil} options={{title: 'Accueil'}} email={email}/>
                <Stack.Screen name="Header" component={Header} options={{title: 'Header'}} userLoggedIn={userLoggedIn}/>
                <Stack.Screen name="ListeProjets" component={ListeProjets} options={{title: 'Liste des projets'}}/>
                <Stack.Screen name="ListeChantiers" component={ListeChantiers} options={{title: 'Liste des chantiers'}}/>
                <Stack.Screen name="ListeAppels" component={ListeAppels} options={{title: "Liste des appels d'urgence"}}/>
                <Stack.Screen name="Menu" component={Menu} options={{title: "Menu"}}/>
                <Stack.Screen name="Projet" component={Projet} options={{title: "Projet"}}/>
                <Stack.Screen name="Chantier" component={Chantier} options={{title: "Chantier"}}/>
                <Stack.Screen name="NouvelleListeAdresse" component={NouvelleListeAdresse} options={{title: "Nouvelle liste d'adresse"}}/>
                <Stack.Screen name="NouvelleAdresse" component={NouvelleAdresse} options={{title: "Nouvelle adresse"}}/>
                <Stack.Screen name="ListeAdresse" component={ListeAdresse} options={{title: "Liste des adresses"}}/>
                <Stack.Screen name="AjoutMaison" component={AjoutMaison} options={{title: "Ajout d'une nouvelle adresse"}}/>
                <Stack.Screen name="Adresse" component={Adresse} options={{title: "Adresse"}} />
                <Stack.Screen name="Appel" component={Appel} options={{title: "Appel"}} />

            </Stack.Navigator>
            {
                navOpenState ? 
                <Menu navOpenState={navOpenState} burgerRef={burgerRef} userLoggedIn={userLoggedIn} email={email} password={password} setEmail={setEmail} setPassword={setPassword} toggleMenu={toggleMenu}/>
                :
                <></>
            }
            
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    }
})