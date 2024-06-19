import { View, StyleSheet, Text } from "react-native";
import Buttongerenciamento from "../../components/ButtonHome";


export function Home() {
    return (  
        
        <View style={styles.container}>
                <View>
                    <View style={styles.boxtitle}>
                        <Text style={styles.title}>PRODUTOS</Text>
                    </View>
                </View>
            <Buttongerenciamento text="Vendas"/>
            <Buttongerenciamento text="Clientes"/>
            <Buttongerenciamento text="Produtos"/>
            <Buttongerenciamento text="Relatório"/>
    </View>

    ); 
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        padding: 40,
        gap: 30,
        backgroundColor: '#35F854',
        
    },

    boxtitle: {
        borderWidth: 1,
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#FFFFFF",
    },

    title:{
    },
})