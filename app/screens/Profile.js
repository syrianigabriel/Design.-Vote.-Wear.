import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LineCard from '../components/ProfileCards';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import Feather from 'react-native-vector-icons/Feather';

import { 
    Image,
    SafeAreaView, 
    ScrollView,
    ImageBackground,
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

export const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
        <View style={styles.cardContainer}>
            <LineCard title='Personal Information' feather='user' nextScreen='PersonalInformation'/>
            <LineCard title='Account Settings' feather='settings' nextScreen='AccountSettings'/>
            <LineCard title='Notification Settings' feather='bell' nextScreen='NotificationSettings'/>
        </View>
    </View>
)};

export const PersonalInformation = ({ navigation }) => {
    const auth = getAuth();
    const db = getFirestore();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            const user = auth.currentUser;

            if (user) {
                const userRef = doc(db, "users", user.uid);
                const userDoc = await getDoc(userRef);

                if (userDoc.exists()) {
                    setUserData(userDoc.data());
                } else {
                    console.log('No user information found!');
                }
            } else {
                console.log('No user is signed in');
            }
        };

        fetchUserData();
    }, [auth, db]);

    return (
      <View style={{flex:1, backgroundColor:'#f6f6f6'}}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
        </View>
        <View style={styles.profileCardContainer}>
            <Image style={styles.profileImage} source={require('../assets/google.png')}/>
            {userData && (<Text style={styles.profileName}>{userData.firstName} {userData.lastName}</Text>)}
            {userData && (<Text style={styles.profileEmail}>{userData.email}</Text>)}
            <TouchableOpacity style={styles.profileAction}>
                <Text style={styles.profileActionText}>Edit Profile</Text>
                <Feather name='edit' size={16} color='#fff'/>
            </TouchableOpacity>

        </View>
      </View>
)};

export const AccountSettings = ({ navigation }) => {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>Account Settings</Text>
      </View>
)};

export const NotificationSettings = ({ navigation }) => {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>Notification Settings</Text>
      </View>
)};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginLeft: 25,
        color: '#333',
        letterSpacing: 1.5,
        marginTop: 50,
        padding: 10,
    },
    profileCardContainer: {
        padding: 16,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#e3e3e3',
    },
    profileName: {
        marginTop: 12,
        fontSize: 20,
        fontWeight: '600',
        color: '#090909',
    },
    information: {
        fontSize: 24,
        padding: 10,
    },
    cardContainer: {
        marginTop: 50
    },
    profileImage: {
        height: 60,
        width: 60
    },
    profileEmail: {
        marginTop: 6,
        fontSize: 16,
        fontWeight: '400',
        color: '#848484',
    },
    header: {
        paddingHorizontal: 24,
        marginBottom: 12,
    },
    headerTitle: {
        marginTop: 15,
        fontSize: 32,
        fontWeight: '700',
        color: '#1d1d1d',
    },
    profileAction: {
        marginTop: 12,
        paddingVertical: 10,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#007bff',
        borderRadius: 12,
      },
      profileActionText: {
        marginRight: 8,
        fontSize: 15,
        fontWeight: '600',
        color: '#fff',
    },
});