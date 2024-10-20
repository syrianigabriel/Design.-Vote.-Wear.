import React from 'react';
import { StatusBar } from "expo-status-bar";
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { registerUser } from '../../Authentication';

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

const Profile = () => {

  return (
      <SafeAreaView style={styles.container}>
          <View style = {styles.content}>
             <Text style={styles.title}>
                Profile
             </Text>
          </View>
      </SafeAreaView>
)};

const styles = StyleSheet.create({
  container: {
      backgroundColor: "#fff",
      flex: 1,
  },
  content: {
      paddingHorizontal: 30,
  },
  title: {
      fontSize: 24,
      fontWeight: "bold",
      textAlign: 'center',
      color: '#333',
      letterSpacing: 1.5,
      marginTop: 100,
      marginBottom: 50,
      padding: 10,
    },
});

export default Profile;