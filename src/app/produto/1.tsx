import { Image, Text, View, TouchableOpacity } from "react-native";
import { styles } from "../home/style";

export default function Produto() {
    type ProdutoType = {
        name: string;
        description: string;
        price: number;
        image: {uri: string};
    }
    
    const produto: ProdutoType = {
        name: "X-Infarto",
        description: "Pão macio e brilhante, 3 hambúrgueres de carne, queijo derretido, alface fresca e molho especial de estrelas!",
        price: 42.90,
        image: require("@/assets/images/salada.jpeg")
        


    };

    return (
        <View style={styles.container}>
            <View style={styles.productHeader}>
                <Image source={produto.image} style={styles.productImage} />
            </View>
            
            <View style={styles.productDetails}>
                <Text style={styles.title}>Detalhes do produto</Text>
                <Text style={styles.productName}>{produto.name}</Text>
                <Text style={styles.DetailItemPrice}>R$ {produto.price.toFixed(2)}</Text>
                <Text style={styles.productDescription}>{produto.description}</Text>
                
                <TouchableOpacity style={styles.addToCartButton}>
                    <Text style={styles.addToCartText}>Adicionar ao Carrinho</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.backToMenuButton}>
                     <Text style={styles.backToMenuText}>Voltar ao Menu</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}