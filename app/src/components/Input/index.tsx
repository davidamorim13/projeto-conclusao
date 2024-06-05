import { TextInput, Text, View, StyleSheet, TextInputProps } from "react-native";

type InputProps = TextInputProps & {
    label: string;
    placeholder: string;
    
}

export function Input( {label, placeholder,...rest}: InputProps ) {
    return (
        <View>
            <View style={styles.container}>
                <Text> {label} </Text>
                <TextInput style={styles.Input} {...rest} placeholder={placeholder}  />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    label: {
    },
    Input: {
        width: 270,
        height: 40,
        backgroundColor:'#D9D9D9',
        borderRadius: 5,
    },


})

