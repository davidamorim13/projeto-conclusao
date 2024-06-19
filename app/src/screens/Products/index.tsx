import { View, Text, StyleSheet } from "react-native";
import ProductsListItem from "../../components/ProductListItem";


export function Products() {
    return (
        
        <View style={styles.container}>
                    <View>
                        <View style={styles.boxtitle}>
                            <Text style={styles.title}>PRODUTOS</Text>
                        </View>
                    </View>
                <ProductsListItem text="Maracujá"/>
                <ProductsListItem text="Xeiro Verde"/>
                <ProductsListItem text="Alface"/>
                <ProductsListItem text="Mandioca kg"/>
                <ProductsListItem text="Tomate kg"/>
                <ProductsListItem text="Tomate cereja kg"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        padding: 40,
        gap: 15,
        backgroundColor: '#35F854',
    },
    boxtitle: {
        borderWidth: 1,
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#FFFFFF",
    },
    title: {
        
    }
    
     })
