import React from 'react';
import { 
    Image,
    SafeAreaView,
    Button,
    ScrollView,
    ImageBackground,
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import CustomButton from '../components/CustomButton';

const WelcomeScreen = ({ navigation }) => {
    const handleGetStarted = () => {
        navigation.navigate("ImageSwiper");
    };

    return (
        <View style={styles.container}>
            <View style = {styles.content}>
                <Text style={styles.Introduction}>
                    Swipe right to like and left to dislike the following images of clothing
                </Text>
                <Text style={[styles.Introduction, {marginBottom: 100}]}>
                    We'll learn your preferences to suggest the best items for you
                </Text>
                <CustomButton size='large' theme='light' onPress={handleGetStarted} title='Get Started' />
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
    },
    content: {
        paddingHorizontal: 30,
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
    },
    Introduction: {
        fontSize: 20, // Increased font size for better visibility
        textAlign: 'center',
        fontWeight: "bold",
        marginTop: 50,
        marginBottom: 20,
        color: '#333', // Use a strong color for contrast
        lineHeight: 28, // Increased line height for readability
    },
    GetStartedButton: {
        backgroundColor: "#fff",
        borderColor: "333",
        borderWidth: 2,
        padding: 15,
        borderRadius: 25,
        marginBottom: 15,
    },
    GetStartedButtonContent: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    GetStartedButtonText: {
        color: "#333",
        fontWeight: "bold",
        fontSize: 16,
        flex: 1,
        textAlign: "center",
    }
});

export default WelcomeScreen;