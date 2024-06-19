import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type Props = {
    text: string;
}

export default function ProductsListItem({ text }:Props) {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.text}>
                    <Text>{text}</Text>
                    <Text> R$ </Text>
                </View>
                    <View style={styles.arrow}>
                        <Text> {">"} </Text>
                    </View>
         </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        padding: 10,
        backgroundColor: "#FFFF",
        borderRadius: 10,
    },
    text:{
        flex:1.
    },
    arrow:{  
        padding:10,
    }
    
     })