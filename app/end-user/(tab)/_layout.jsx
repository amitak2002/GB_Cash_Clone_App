import { View, Text , StyleSheet } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from "@expo/vector-icons";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

export default function _layout() {
  return (  
    <Tabs screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: style.tabContainer,
        tabBarActiveTintColor: '#1D1E25',
        tabBarInactiveTintColor: '#0048A6',
        tabBarShowLabel: true,
        tabBarLabelStyle: { 
            fontWeight: "600", 
            textDecorationLine: "underline",
               
        },
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          
          if (route.name === 'index') {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === 'card') {
            iconName = focused ? "card" : "card-outline";
          } else if (route.name === 'history') {
            iconName = focused ? "time" : "time-outline";
          } else if (route.name === 'profile') {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={25} color={color} />;
        }
    })}>
       
      <Tabs.Screen name='index' options={{ title: "Home" }} />
      <Tabs.Screen name='card' options={{ title: "Card" }} />
      <Tabs.Screen name='history' options={{ title: "History" }} />
      <Tabs.Screen name='profile' options={{ title: "Profile" }} />
       
    </Tabs>
  )
}

const style = StyleSheet.create({
    tabContainer : {
        backgroundColor: '#ffffff',
        color: '#1D1E25',
        borderTopLeftRadius: moderateScale(15),
        borderTopRightRadius: moderateScale(15),
       
    }
})
