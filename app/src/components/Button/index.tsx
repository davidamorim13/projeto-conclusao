import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
    text: string;
}
export function Button({ text }:Props) {
    return (
        <TouchableOpacity style={styles.button}><Text> {text} </Text></TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 1,
        backgroundColor: "#0C6319",
        width: 55,
        height: 33,
        gap: 10,
    }
    
     })