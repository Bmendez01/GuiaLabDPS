import React from "react";
import { View, Text, ScrollView, FlatList, Image } from "react-native";
import { Card } from "react-native-elements";

const cats = [
    {
        id: '1',
        nombre: 'Cat 1',
        desc: 'Bonito',
        src:require('../img/g1.jpg')
    },
    {
        id: '2',
        nombre: 'Cat 2',
        desc: 'Jugueton',
        src:require('../img/g2.jpg')
    },
    {
        id: '3',
        nombre: 'Cat 3',
        desc: 'amigable',
        src:require('../img/g3.jpg')
    },
    {
        id: '4',
        nombre: 'Cat 4',
        desc: 'El 4',
        src:require('../img/g4.jpg')
    },
    {
        id: '5',
        nombre: 'Cat 5',
        desc: 'El 5',
        src:require('../img/g5.jpg')
    }
];

const Item = ({nombre, desc, img}) =>(
    <View>
        <Card>
            <Image source={img}></Image>
            <Text>{nombre}</Text>
            <Text>{desc}</Text>
        </Card>
    </View>
);

export default function Gatos(){
    const renderItem = ({item}) =>(
        <Item nombre={item.nombre} desc={item.desc} img={item.src}/>
    );

    return(
        <ScrollView>
            <Text>Perros</Text>
            <View>
                <FlatList
                    data={cats}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </ScrollView>
    );
}
