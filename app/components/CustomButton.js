import React from 'react';
import { TouchableOpacity, Text, View, Image, StyleSheet } from 'react-native';

const CustomButton = ({ theme, size, imageSource, title, customStyle, onPress, feather }) => {
    const themeStyles = {
        light: {
            button: styles.lightButton,
            text: styles.lightButtonText,
        },
        dark: {
            button: styles.darkButton,
            text: styles.darkButtonText,
        }, 
    }

    const buttonSizeStyles = {
        large: styles.largeButton,
        small: styles.smallButton,
        default: styles.defaultButton,
    };

    const appliedTheme = themeStyles[theme] || themeStyles.light;
    const appliedSize = buttonSizeStyles[size] || buttonSizeStyles.default

    return (
        <TouchableOpacity style={[appliedTheme.button, appliedSize, customStyle]} onPress={onPress}>
            <View style={styles.buttonContent}>
                {imageSource && (<Image style={styles.buttonLogo} source={imageSource} />)}
                <Text style={[appliedTheme.text]}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    lightButton: {
        backgroundColor: "#fff",
        borderColor: "333",

    },
    largeButton: {
        borderWidth: 2,
        padding: 15,
        borderRadius: 25,
        marginBottom: 15,
    },
    smallButton: {
        borderWidth: 2,
        padding: 15,
        width: 100,
        borderRadius: 75,
        marginTop: 15,
    },
    lightButtonText: {
        color: "#333",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
    },
    darkButton: {
        backgroundColor: "#333",
        borderColor: "333",
        borderWidth: 2,
        padding: 15,
        borderRadius: 25,
    },
    darkButtonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
    },
    buttonContent: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    buttonLogo: {
        height: 20,
        width: 20,
        justifyContent: "left",
        position: "absolute",
        left: 0,
    },
});

export default CustomButton;