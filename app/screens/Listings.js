import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Cards from '../components/FeedCards';
import { FlatList } from 'react-native';

const Listings = ({ navigation }) => {
    const data = [
        {
            id: '1',
            image: require("../assets/image.png"),
            storeName: 'Zara',
            price: '$10',
            description: 'Shirt',
        },
        {
            id: '2',
            image: require("../assets/image2.png"),
            storeName: 'H&M',
            price: '$40',
            description: 'Shirt',
        },
        {
            id: '3',
            image: require("../assets/image3.png"),
            storeName: 'Zara',
            price: '$20',
            description: 'Pants',
        },
    ]

    const renderItem = ({item}) => {
        return (
            <Cards
                image={item.image}
                storeName={item.storeName}
                price={item.price}
                description={item.description}>
            </Cards>
    )};

    return (
    <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}/>
    )
}

export default Listings;