import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useNavigation } from '@react-navigation/native';

export function Login() {

    const {navigate} = useNavigation<any>()

    return (
        <View style={styles.container} >
            <View style={styles.boxlogin}>
                <Input label='Seu usuario' placeholder='' />
                <Input label='Sua senha' placeholder='' secureTextEntry={true} />
            </View>
        <Button text="Entrar" onPress={() => navigate("Home")} />
        </View>
    );
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        gap: 30,
        backgroundColor: '#1AC535',
        alignItems: "center",
        justifyContent: 'center',
    },

    boxlogin:{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'center',
        gap: 30,
        backgroundColor: '#0AE52D',
        padding: 25,
        borderRadius: 10,
    },

    button:{},
    
     })
