import { View, StyleSheet, FlatList, Text, StatusBar, SafeAreaView, Pressable } from "react-native";
import { Colors, Styles, Fonts } from "../../design/design";

const data = [
    {
        id: 1,
        title: "Title 1",
        description: "Description 1"
    },
    {
        id: 2,
        title: "Title 2",
        description: "Description 2"
    },
    {
        id: 3,
        title: "Title 3",
        description: "Description 3"
    }
]



export default function ListeProjets({navigation}){
    const Item = ({title, description}) => (
        <Pressable style={styles.item} onPress={() => navigation.navigate('Projet')}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </Pressable>
    )

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Liste des projets</Text>
            <FlatList
                data={data}
                renderItem={({item}) => <Item title={item.title}/>}
                keyExtractor={item => item.id}
                style={styles.projets}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 50,
    },
    projets:{
        height: '80%',
        width: '80%'
    },
    item: {
        width: '100%',
        borderWidth: 3,
        borderRadius: Styles[0],
        marginVertical: 5
    }
})