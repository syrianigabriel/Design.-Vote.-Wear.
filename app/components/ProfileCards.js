import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const LineCard = ({ title, onPress, feather, nextScreen }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate(nextScreen)}>
            <View style={styles.container}>
                <View style={styles.cardContent}>
                    {feather && (<Feather name={feather} size={20} color="#333"/>)}
                    <Text style={styles.cardText}>{title}</Text>
                    <Feather style={styles.featherStyle} name='arrow-right' size={20} color="#333"/>
                </View>
                <View style ={styles.lineContainer}>
                    <View style ={styles.cardLine} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginLeft: 25,
        marginBottom: 20
    },
    cardContent: {
        flexDirection: "row",
        backgroundColor: '#fff',
        justifyContent: "left",
        alignItems: "center",
    },
    cardText: {
        fontSize: 20,
        color: 'black',
        marginLeft: 25,
        marginRight: 50
    },
    cardLine: {
        height: 1,
        backgroundColor: "#C0C0C0",
        flex: 1,
    },
    lineContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
        marginRight: 25
    },
    featherStyle: {
        justifyContent: "right",
        position: "absolute",
        right: 25,
    }
});

export default LineCard;