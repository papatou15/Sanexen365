import { View, StyleSheet, FlatList, Text, StatusBar, SafeAreaView } from "react-native";
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

const Item = ({title, description}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
    </View>
)

export default function ListeProjets(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Liste des projets</Text>
            <FlatList
                data={data}
                renderItem={({item}) => <Item title={item.title} description={item.description} />}
                keyExtractor={item => item.id}
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
    }
})