import { Image, ImageSourcePropType, ScrollView, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { styles } from "./style"
import { Link } from 'expo-router'
import { useEffect, useState } from 'react'


type ProdutoType = {
    id: number,
    name: string,
    price: number,
    description: string,
    ingredients: string,
    imgUrl: ImageSourcePropType

}

export default function Index() {
    const MENU = [
        {
            id: 1,
            name: "X-Infarto",
            description: "Pão brioche dourado, 3 hambúrgueres de carne suculenta, queijo cheddar derretido, picles crocantes, cebola caramelizada e molho especial.",
            price: 43.90,
            image: require("@/assets/images/Spaceburguer.png")
        },

        {

            id: 2,
            name: "AVC Infarto",
            description: "Pão macio e brilhante,  3 hambúrgueres de frango crocante, queijo derretido, alface fresca e molho especial de estrelas!",
            price: 49.90,
            image: require("@/assets/images/infarto.jpg")

        },


        {

            id: 3,
            name: "X-Salada EGG",
            description: "Pão preto brilhante, 2 hambúrgueres de carne, queijo azul, cebola roxa, rúcula e molho de nebulosa",
            price: 19.90,
            image: require("@/assets/images/salada.jpeg")

        },

    ]

const [produtos, setProdutos] = useState<ProdutoType[]>()

function fetchProducts() {
    fetch ("http:localhost:3000/produtos")
    .then((res) => res.json())
    .then(data => console.log(data))
    
}

useEffect(() => {
    fetchProducts
}, [])

    return (

        <ScrollView style={styles.menuList}>



            <View style={styles.header}>
                <Image style={styles.headerImage} source={require("@/assets/images/Banner.jpg")} />
            </View>
            <Text style={styles.restaurantName}>Rob´s Burguer</Text>
            <Text style={styles.subtitle}>Em cada mordida, uma explosão de felicidade!</Text>

            <View>

                <View style={styles.tabs}>
                    {["Combos", "Lanches", "Bebidas", "Sobremesas"].map((tab) => (
                        <TouchableOpacity>
                            <Text style={styles.tabText} >{tab}</Text>
                        </TouchableOpacity>
                    ))}
                </View>


                {
                    MENU.map((item) => (
                        <Link href={"/produto/1"} asChild>
                        <TouchableOpacity style={styles.menuItem}>
                            <View style={styles.menuContent}>
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text>{item.description}</Text>
                                <Text style={styles.itemPrice}>{item.price.toFixed(2)}</Text>
                            </View>
                            <Image source={item.image}  style={styles.itemImage} />

                        </TouchableOpacity>
                        </Link>
                    ))
                }



            </View>





        </ScrollView>



    )
}