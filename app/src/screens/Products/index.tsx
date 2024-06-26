import { View, Text, StyleSheet } from "react-native";
import ProductsListItem from "../../components/ProductListItem";
import { useEffect, useState } from "react";
import { ProductsService } from "../../services/products.service";

type Product = {
    name: string;
    price: number;
}

export function Products() {
    const [products, setProducts] = useState<any>([])

    const buscarProdutos = async () => {
        try{
            const data = await ProductsService.getAll()
            setProducts(data)
        }catch(erro){

        }
    }

    useEffect(() => {
        buscarProdutos()
    },[])


    return (
        
        <View style={styles.container}>
                    <View>
                        <View style={styles.boxtitle}>
                            <Text style={styles.title}> Produtos </Text>
                        </View>
                    </View>
                <View style={styles.boxintes}>
                    {products.map((item:Product) =>( 
                        <ProductsListItem text={item.name} price={item.price}/>
                    ))}
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 40,
        gap: 15,
        backgroundColor: '#F9F1F1',
        flex: 1,
    },
    boxtitle: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#7BFF90",
    },
    title: {
        
    },
    boxintes: {
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        flex: 1,
    }
    
     })
