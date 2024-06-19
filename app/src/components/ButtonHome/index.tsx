import { View, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, } from "react-native";


type Props = TouchableOpacityProps &{
    text: string;
}

export default function ButtonHome({ text, ...rest }:Props) {
    return (
        <TouchableOpacity {...rest}>
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
    
    flexDirection:"row",
    padding: 10,
    backgroundColor: "#7BFF90",
    borderRadius: 10,
    alignItems: 'center',
    width: "100%",
   
},

arrow:{
    padding:10,

},

text:{
    flex:1,
    justifyContent: "center",
    alignItems: "center",

},


})