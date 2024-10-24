import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import CustomButton from '../components/CustomButton';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const ImageSwiper = ({ navigation }) => {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [page, setPage] = useState(1);
    const auth = getAuth();
    const user = auth.currentUser;
    const db = getFirestore();

    const handlePreference = async (imageID, preference) => {
        try {
            const userID = user.uid;
            console.log(userID);
            const docRef = doc(db, 'users', userID, preference, imageID);

            await setDoc(docRef, {
                imageID,
                timestamp: new Date()
            });

            console.log('Preference record for user:', userID, 'Image:', imageID, 'Preference:', preference);
        } catch (error) {
            console.error('Error recording preference', error);
        }
    };

    const fetchImages = async () => {
        try {
            const response = await fetch('https://api.unsplash.com/search/photos?query=shirt&per_page=10&page=${page}', {
                headers: {
                    Authorization: 'Client-ID Aa3dc0TtFoQSlcPZ0mCHMnF08E45R213rZaHE0oIF-o',
                },
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            setImages((prevImages) => [...prevImages, ...data.results]);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    const handleLike = () => {
        if (currentIndex < images.length - 1) {
            handlePreference(images[currentIndex].id, 'like');
            setCurrentIndex(currentIndex + 1);
        } else {
            console.log("No more images! Fetching more...");
            setPage(prevPage => prevPage + 1);
            fetchImages();
        }
    };

    const handleDislike = () => {
        if (currentIndex < images.length - 1) {
            handlePreference(images[currentIndex].id, 'dislike');
            setCurrentIndex(currentIndex + 1);
        } else {
            console.log("No more images! Fetching more...");
            fetchImages();
        }
    };

    useEffect(() => {
        fetchImages();
    }, [page]);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Start Swiping!</Text>
                {images.length > 0 &&
                    <Image source={{ uri: images[currentIndex].urls.regular }}
                            style={styles.image}/>
                }
            </View>
            <View style={styles.ButtonContainer}>
                <CustomButton title='Like' onPress={handleLike} size='small' theme='light' />
                <CustomButton title='Dislike' onPress={handleDislike} size='small' theme='light' />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        paddingHorizontal: 30,
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: 'center',
        color: '#333',
        letterSpacing: 1.5,
        marginTop: 20,
        marginBottom: 50,
        padding: 10,
      },
    ButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        padding: 20,
    },
    image: {
        width: '100%', // Take up the full width of the container
        height: undefined, // Allow height to adjust based on the width
        aspectRatio: 1, // Maintain a square aspect ratio; adjust as necessary
        borderRadius: 10, // Optional: adds rounded corners to the image
        marginBottom: 20, // Space below the image
    }    
});

export default ImageSwiper;