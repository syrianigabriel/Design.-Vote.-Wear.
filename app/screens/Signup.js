import React from 'react';
import { StatusBar } from "expo-status-bar";
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { registerUser } from '../../Authentication';
import CustomButton from '../components/CustomButton';

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

const Signup = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordIsVisible, setPasswordIsVisible] = React.useState(false);
  const navigation = useNavigation();

  const handleSignup = () => {
    registerUser(email, password);
  };

  return (
      <SafeAreaView style={styles.container}>
          <View style = {styles.content} >
            <Text style = {styles.title}>Design. Vote. Wear.</Text>
                <View style = {[styles.inputContainer, {marginBottom: 30}]}>
                    <View style={styles.icon}>
                        <Feather name="mail" size={22} color="#7C808D" />
                    </View>
                    <TextInput
                    style = {styles.textInput}
                    placeholder='Email'
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    placeholderTextColor="#7C808D"
                    selectionColor="3662AA"
                    />
                    </View>
            <View style = {styles.inputContainer}>
                <View style={styles.icon}>
                    <Feather name="lock" size={22} color="#7C808D" />
                </View>
                <TextInput
                    style = {styles.textInput}
                    placeholder='Password'
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize="none"
                    placeholderTextColor="#7C808D"
                    selectionColor="3662AA"
                    secureTextEntry={!passwordIsVisible}
                />
                {password.length > 0 && (
                    <TouchableOpacity
                        style={styles.iconEye}
                        onPress={() => setPasswordIsVisible(!passwordIsVisible)}>
                        <Feather name={passwordIsVisible ? "eye" : "eye-off"} size={20} color="#333" />
                    </TouchableOpacity>
                )}
            </View>
            <View style = {styles.registerButton}>
                <Text style = {styles.registerButtonText}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.registerButtonTextHighlight}> Login.</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style = {styles.loginButton} onPress={handleSignup}>
                <Text style = {styles.loginButtonText}>Sign Up</Text>
            </TouchableOpacity>
            <View style ={styles.orContainer}>
                <View style ={styles.orLine} />
                <Text style = {styles.orText}> OR </Text>
                <View style ={styles.orLine} />
            </View>
            <CustomButton size='large'
                              theme='light'
                              imageSource={require("../assets/google.png")}
                              title='Sign in with Google'
                />
            <CustomButton size='large'
                              theme='light'
                              imageSource={require("../assets/facebook.png")}
                              title='Sign in with Facebook'
                />
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
  loginText: {
      color: "black",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 30,
      marginBottom: 40,
  },
  inputContainer: {
      width: "100%",
      height: 40,
      backgroundColor: "#fff",
      borderColor: "#333",
      borderWidth: 2,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 25,
  },
  textInput: {
      justifyContent: "center",
      flex: 1,
      marginHorizontal: 10,
      textAlign: "left"
  },
  registerButton: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10,
      marginBottom: 30,
  },
  registerButtonText: {
      fontSize: 12,
      color: "#333",
      textAlign: "center"
  },
  registerButtonTextHighlight: {
      fontSize: 12,
      color: "#333",
      fontWeight: "bold",
  },
  forgotPasswordButton: {
      backgroundColor: "#fff",
      borderColor: "333",
      borderWidth: 2,
      padding: 15,
      borderRadius: 25,
      marginTop: 15,
  },
  forgotPasswordButtonText: {
      color: "#333",
      fontWeight: "bold",
      fontSize: 16,
      textAlign: "center",
  },
  loginButton: {
      backgroundColor: "#333",
      borderColor: "333",
      borderWidth: 2,
      padding: 15,
      borderRadius: 25,
  },
  loginButtonText: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 16,
      textAlign: "center",
  },
  icon: {
      marginLeft: 15,
    },
  iconEye: {
      marginRight: 15,
    },
  orContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 30,
      marginBottom: 30,
  },
  orLine: {
      height: 1,
      backgroundColor: "#eee",
      flex: 1,
  },
  orText: {
      color: "#7C808D",
      marginHorizontal: 10,
      fontSize: 14,
  },
  googleButton: {
      backgroundColor: "#fff",
      borderColor: "333",
      borderWidth: 2,
      padding: 15,
      borderRadius: 25,
      marginBottom: 15,
  },
  googleButtonContent: {
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
  },
  googleButtonText: {
      color: "#333",
      fontWeight: "bold",
      fontSize: 16,
      flex: 1,
      textAlign: "center",
  },
  googleLogo: {
      height: 20,
      width: 20,
      justifyContent: "left",
      position: "absolute",
      left: 0,
  },
  fbButton: {
      backgroundColor: "#fff",
      borderColor: "333",
      borderWidth: 2,
      padding: 15,
      borderRadius: 25,
      marginBottom: 15,
  },
  fbButtonContent: {
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
  },
  fbButtonContentText: {
      color: "#333",
      fontWeight: "bold",
      fontSize: 16,
      flex: 1,
      textAlign: "center",
  },
  fbLogo: {
      height: 20,
      width: 20,
      justifyContent: "left",
      position: "absolute",
      left: 0,
  },
});

export default Signup;