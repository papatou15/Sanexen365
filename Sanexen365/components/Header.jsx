import { StyleSheet, View } from "react-native";
import { useState, useRef, useEffect } from "react";
import {Burger} from "./nav/Burger";
import Menu from "./nav/Menu";

export default function Header({userLoggedIn, email, setEmail, password, setPassword}) {
    const [navOpenState, setNavOpenState] = useState(false);

    const burgerRef = useRef(null);

    const toggleMenu = () => {
        setNavOpenState(!navOpenState);
    };

    console.log("Menu " + navOpenState);
    return(
        <View style={styles.header}>
            <Menu navOpenState={navOpenState} burgerRef={burgerRef} userLoggedIn={userLoggedIn} email={email} password={password} setEmail={setEmail} setPassword={setPassword} toggleMenu={toggleMenu}/>
            <View style={styles.burgerWrapper}>
                <Burger ref={burgerRef} toggleMenu={toggleMenu} navOpenState={navOpenState} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    header:{
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
    },
    burgerWrapper: {
        backgroundColor: '#97E06F',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 25
    }
})