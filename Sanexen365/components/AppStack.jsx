import Accueil from "../Accueil";
import Header from "./Header";
import { Burger } from "./nav/Burger";
import Menu from "./nav/Menu";
import ListeProjets from './listeChantiers/ListeProjets.jsx';
import ListeChantiers from './listeChantiers/ListeChantiers.jsx';
import ListeAppels from "./appelsUrgence/ListeAppels";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import { useState, useRef } from "react";
import { Colors } from "../design/design";


const Stack = createNativeStackNavigator();

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