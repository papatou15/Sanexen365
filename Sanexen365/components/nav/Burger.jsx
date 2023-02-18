import { Text, View, StyleSheet, Animated, Pressable } from "react-native";
import { forwardRef } from "react";
import { Colors, Styles, Fonts } from '../../design/design';

export const Burger = forwardRef(({navOpenState, toggleMenu}, ref) => (
    <Pressable style={styles.Burger} ref={ref} onPress={toggleMenu}>
        <Animated.View style={[styles.burgerLines, {transform: [{rotate: navOpenState ? '45deg' : '0deg'}, {translateY: navOpenState ? 10 : 0}, {translateX: navOpenState ? 9.5 : 0}]}, {width: navOpenState ? '115%' : '100%'}]}/>
        <Animated.View style={[styles.burgerLines, {opacity: navOpenState ? 0 : 1}]}/>
        <Animated.View style={[styles.burgerLines, {transform: [{rotate: navOpenState ? '-45deg' : '0deg'}, {translateY: navOpenState ? -10 : 0}, {translateX: navOpenState ? 10 : 0}]}, {width: navOpenState ? '115%' : '100%'}]}/>
    </Pressable>
));

const styles = StyleSheet.create({
    Burger: {
        width: 30,
        height: 30,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    burgerLines: {
        backgroundColor: Colors[2],
        width: '100%',
        height: 3,
    }
})