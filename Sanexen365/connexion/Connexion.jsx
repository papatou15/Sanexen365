import { StyleSheet, Text, View, TextInput, Pressable, Alert, Animated, SafeAreaView, Button } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import SVGWaves from '../utils/SVGWaves';
import { logIn } from './fakeAuth';
import { Colors, Styles, Fonts } from '../design/design';
import client from '../utils/Sanity';

export default function Connexion({ userLoggedIn, email, password, setEmail, setPassword }){
    const [dataFetch, setDataFetch] = useState([]);

    const fadeAnim = useRef(new Animated.Value(1)).current;

    const fadeIn = () => {
    // Will change fadeAnim value to 1 in 1 seconds
    Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };

    const fadeOut = () => {
    // Will change fadeAnim value to 0 in 0.1 seconds
    Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true,
        }).start();
    };

    return(
        <SafeAreaView style={styles.connexion}>
            <View style={styles.bgSvg}>
                <SVGWaves 
                    customStyle={styles.bgSvg2}
                    customWidth="495.621"
                    customHeight="353.332"
                    customViewBox="0 0 495.621 353.332"
                    customFillColor={Colors[1]}
                    customPattern="M435.079,157.865C435.079,145.293,430,20.338,430,0H0V250.344s68.839-71.857,176.339-96.56S435.079,157.865,435.079,157.865Z"
                    customTransform="rotate(11.5 8.562 289.899)"
                />
                <SVGWaves 
                    customStyle={styles.bgSvg1}
                    customWidth="448"
                    customHeight="268.344"
                    customViewBox="0 0 448 268.344"
                    customFillColor={Colors[0]}
                    customPattern="M430,142.9V0H0V250.344s54.754-98.827,211.018-116.053S430,142.9,430,142.9Z"
                />
                <SVGWaves 
                    customStyle={styles.bgSvg3}
                    customWidth="495.621"
                    customHeight="353.332"
                    customViewBox="0 0 495.621 353.332"
                    customFillColor={Colors[1]}
                    customPattern="M435.079,157.865C435.079,145.293,430,20.338,430,0H0V250.344s68.839-71.857,176.339-96.56S435.079,157.865,435.079,157.865Z"
                    customTransform="rotate(11.5 8.562 289.899)"
                />
                <SVGWaves 
                    customStyle={styles.bgSvg4}
                    customWidth="448"
                    customHeight="268.344"
                    customViewBox="0 0 448 268.344"
                    customFillColor={Colors[0]}
                    customPattern="M430,142.9V0H0V250.344s54.754-98.827,211.018-116.053S430,142.9,430,142.9Z"
                />
                
            </View>
            <Text style={styles.headerText}>Sanexen365</Text>
            <View style={styles.connexionFields}>
                <View style={styles.loginInputs}>
                    <Text style={styles.loginFieldTitle}>Email</Text>
                    <TextInput placeholder="Email..." onChangeText={(email) => setEmail(email)} style={styles.loginInputField}></TextInput>
                </View>
                <View style={styles.loginInputs}>
                    <Text style={styles.loginFieldTitle}>Mot de passe</Text>
                    <TextInput placeholder="Mot de passe..." secureTextEntry={true} onChangeText={(password) => setPassword(password)} style={styles.loginInputField}></TextInput>
                </View>
            </View>
            <Pressable onPressIn={fadeIn} onPressOut={fadeOut} onPress={() => {logIn(email, password, userLoggedIn)}} style={({pressed}) => [{ elevation: pressed ? 0 : 6}, {backgroundColor: pressed ? "#6CA150" : "#97E06F"}, styles.loginButton]}>
                <Text style={styles.loginButtonText}>LOGIN</Text>
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    connexion: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10
    },
    bgSvg: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%'
    },
    bgSvg1:{
        position: 'absolute',
        top: -50,
        left: 0,
        shadowColor: 'black',
        shadowOffset: 5,
        shadowRadius: 5,
        elevation: 3
    },
    bgSvg2:{
        position: 'absolute',
        top: -50,
        left: -10,
        elevation: 2,
    },
    bgSvg3:{
        position: 'absolute',
        bottom: -60,
        right: -10,
        elevation: 2,
        transform: [
            {
                rotate: '180deg'
            }
        ],
    },
    bgSvg4:{
        position: 'absolute',
        bottom: -60,
        right: 0,
        elevation: 2,
        transform: [
            {
                rotate: '180deg'
            }
        ],
    },
    connexionFields: {
        width: '65%',
        height: '35%',
    },
    headerText: {
        margin: '10%',
        fontSize: 45,
    },
    loginInputs: {
        height: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginFieldTitle: {
        fontSize: 22,
        marginBottom: 10,
        marginLeft: 20,
        width: '100%'
    },
    loginInputField: {
        fontSize: 15,
        width: '100%',
        height: 55,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: Colors[2],
        textAlign: 'left',
        paddingLeft: 10,
    },
    loginButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 125,
        height: 60,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#97E06F',
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 20
    }
})