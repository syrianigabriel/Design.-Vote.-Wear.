import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, Button, Alert, View, Image, SafeAreaView } from 'react-native';
import Login from './app/screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './app/screens/Signup';
import { NavigationContainer } from '@react-navigation/native';
import ImageSwiper from './app/screens/ImageSwiper';
import Home from './app/screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Login" >
        <Stack.Screen
          name="Login"
          component={Login}/>
        <Stack.Screen
          name="Signup"
          component={Signup}/>
        <Stack.Screen
          name="ImageSwiper"
          component={ImageSwiper}/>
        <Stack.Screen
          name="Home"
          component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
  },
});
