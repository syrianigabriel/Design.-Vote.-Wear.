import React from 'react';
import { useNavigation } from '@react-navigation/native';
import LineCard from '../components/ProfileCards';

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
    return (
      <View style={styles.container}>
          <Text style={styles.title}>Personal Information</Text>
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
    cardContainer: {
        marginTop: 50
    },

});