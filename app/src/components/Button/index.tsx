import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    text: string;
}
export function Button({ text, ...rest }:Props) {
    return (
        <TouchableOpacity {...rest} style={styles.button} ><Text> {text} </Text></TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0C6319",
        width: 70,
        height: 40,
        borderRadius: 3,
    }
    
     })