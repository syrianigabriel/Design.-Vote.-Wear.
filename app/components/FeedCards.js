import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Cards = ({image, title, price, onPress, children, description, storeName}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.infoContainer}>
                {image && (<Image source={image} style={styles.image}/>)}
                <Text style={styles.description}>Store Name: {storeName}</Text>
                <Text style={styles.description}>Price: {price}</Text>
                <Text style={styles.description}>Description: {description}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    infoContainer: {
        borderRadius: 15,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: {width: 1, height: 1},
        shadowRadius: 2,
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 10,
    },
    description: {
        fontSize: 15,
        padding: 5,
        color: '#333',
        fontWeight: 'bold',
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        borderRadius: 15
    },
})



export default Cards;