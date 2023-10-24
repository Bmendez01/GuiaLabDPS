import React from "react";
import { View, Text, ScrollView, FlatList, Image } from "react-native";
import { Card } from "react-native-elements";

const dogos = [
    {
        id: '1',
        nombre: 'Dogo 1',
        desc: 'Bonito',
        src:require('../img/p1.jpg')
    },
    {
        id: '2',
        nombre: 'Dogo 2',
        desc: 'Jugueton',
        src:require('../img/p2.jpg')
    },
    {
        id: '3',
        nombre: 'Dogo 3',
        desc: 'amigable',
        src:require('../img/p3.jpg')
    },
    {
        id: '4',
        nombre: 'Dogo 4',
        desc: 'El 4',
        src:require('../img/p4.jpg')
    },
    {
        id: '5',
        nombre: 'Dogo 5',
        desc: 'El 5',
        src:require('../img/p5.jpg')
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

export default function Perros(){
    const renderItem = ({item}) =>(
        <Item nombre={item.nombre} desc={item.desc} img={item.src}/>
    );

    return(
        <ScrollView>
            <Text>Perros</Text>
            <View>
                <FlatList
                    data={dogos}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </ScrollView>
    );
}
