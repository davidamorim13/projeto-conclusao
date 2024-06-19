import { View, Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    text: string;
    price: number;
}

export default function ProductsListItem({ text, price }:Props) {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.text}>
                    <Text>{text} = {price}</Text>
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
       
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        padding: 10,
        backgroundColor: "#7BFF90",
        borderRadius: 10,
        width: "100%",
    },
    text:{
        flex:1,
        
    },
    arrow:{  
        padding:10,
    }
    
     })