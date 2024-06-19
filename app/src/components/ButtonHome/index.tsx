import { View, StyleSheet, Text, TouchableOpacity, } from "react-native";


type Props = {
    text: string;
}

export default function ButtonHome({ text }:Props) {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.text}>
                    <Text>{text}</Text>
                </View>
                    <View style={styles.arrow}>
                        <Text> {">"} </Text>
                    </View>
         </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
container: {
    borderWidth: 1,
    flexDirection:"row",
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    alignItems: 'center',
   
},

arrow:{
    padding:10,

},

text:{
    flex:1
},


})