import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Dimensions, Text, Button, Alert, View, Image, SafeAreaView } from 'react-native';
import Login from './app/screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Signup from './app/screens/Signup';
import { NavigationContainer } from '@react-navigation/native';
import ImageSwiper from './app/screens/ImageSwiper';
import Home from './app/screens/Home';
import { Profile, PersonalInformation, AccountSettings, NotificationSettings } from './app/screens/Profile';
import Listings from './app/screens/Listings';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Tab = createBottomTabNavigator();
const AuthStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const TrainStack = createNativeStackNavigator();
const FeedStack = createNativeStackNavigator();
const MainApp = createNativeStackNavigator();

function AuthStackNavigator({ onLogin }) {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login">
        {(props) => <Login {...props} onLogin={onLogin} />}
      </AuthStack.Screen>
      <AuthStack.Screen name="Signup" component={Signup} />
    </AuthStack.Navigator>
  )
}

function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name ="ProfileHome" component={Profile}/>
      <ProfileStack.Screen name="PersonalInformation" component={PersonalInformation}/>
      <ProfileStack.Screen name="AccountSettings" component={AccountSettings}/>
      <ProfileStack.Screen name="NotificationSettings" component={NotificationSettings}/>
    </ProfileStack.Navigator>
  )
}

function TrainStackNavigator() {
  return (
    <TrainStack.Navigator screenOptions={{ headerShown: false }}>
      <TrainStack.Screen name="TrainHome" component={Home} />
      <TrainStack.Screen name="ImageSwiper" component={ImageSwiper} />
    </TrainStack.Navigator>
  )
}

function FeedStackNavigator() {
  return (
    <FeedStack.Navigator screenOptions={{ headerShown: false }}>
      <FeedStack.Screen name="Suggestions" component={Listings} />
    </FeedStack.Navigator>
  )
}

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={TrainStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <MaterialIcons name="home" size={24} />
          )
        }}
      />
      <Tab.Screen
        name="Feed"
        component={FeedStackNavigator}
        options= {{
          tabBarLabel: 'Feed',
          tabBarIcon: () => (
            <MaterialIcons name="rss-feed" size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options= {{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <MaterialIcons name="person" size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
        <MainApp.Navigator screenOptions={{ headerShown: false }}>
            {isLoggedIn ? (
                <MainApp.Screen name="Welcome" component={MainTabs} />
            ) : (
                <MainApp.Screen name="AuthStack">
                    {(props) => <AuthStackNavigator {...props} onLogin={setIsLoggedIn} />}
                </MainApp.Screen>
            )}
        </MainApp.Navigator>
    </NavigationContainer>
  );
}