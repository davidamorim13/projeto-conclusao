import { View, StyleSheet, Text } from "react-native";
import Buttongerenciamento from "../../components/ButtonHome";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Products } from "../Products";
import { ProductsService } from "../../services/products.service";

type Product ={
    name: string;
    price: number;
}
export function Home() {

    const { navigate } = useNavigation<any>()
    return (  
        
        <View style={styles.container}>
                <View>
                    <View style={styles.boxtitle}>
                    <Text style={styles.title}> Controle de Vendas </Text>
                    </View>
                </View>
            <View style={styles.boxitens}>
                <Buttongerenciamento text="Vendas"/>
                <Buttongerenciamento text="Clientes"/>
                <Buttongerenciamento text="Produtos" onPress={() => navigate("Products") } />
                <Buttongerenciamento text="Relatório"/>
            </View>
    </View>

    ); 
}

const styles = StyleSheet.create({
    container:{
        padding: 40,
        backgroundColor: '#F9F1F1',
        flex: 1,
        
        
    },

    boxtitle: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#7BFF90",
       
    },

    title:{
        fontSize: 20,
    },

    boxitens: {
        gap: 20,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        
    }
})