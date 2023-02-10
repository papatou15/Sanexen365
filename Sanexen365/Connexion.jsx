import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native';

export default function Connexion(){
    return(
        <View style={styles.connexion}>
            <Text style={styles.headerText}>Sanexen365</Text>
            <View style={styles.connexionFields}>
                <View style={styles.loginInputs}>
                    <Text style={styles.loginFieldTitle}>Email</Text>
                    <TextInput placeholder="Email..." style={styles.loginInputField}></TextInput>
                </View>
                <View style={styles.loginInputs}>
                    <Text style={styles.loginFieldTitle}>Mot de passe</Text>
                    <TextInput placeholder="Mot de passe..." style={styles.loginInputField}></TextInput>
                </View>
            </View>
            <Pressable onPress={() => Alert.alert('Simple Button pressed')} style={styles.loginButton}>
                <Text style={styles.loginButtonText}>LOGIN</Text>
            </Pressable>
        </View>
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
        borderRadius: 20,
        borderColor: '#707070',
        textAlign: 'left',
        paddingLeft: 10,
    },
    loginButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 17,
        paddingHorizontal: 40,
        borderRadius: 15,
        backgroundColor: '#97E06F',
    },
    loginButtonText: {
        color: '#fff'
    }
})