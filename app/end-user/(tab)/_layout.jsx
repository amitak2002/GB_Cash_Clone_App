import {  StyleSheet , Dimensions } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from "@expo/vector-icons";


export default function _layout() {

  const {height : responsiveHeight , width : responsiveWidth} = Dimensions.get("window")

  return (  
    <Tabs screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          width: (375 / 375) * responsiveWidth,
          height:(70 / 812) * responsiveHeight, // Ensures min height
          paddingBottom: 10, 
          ...style.tabContainer
        },
        tabBarActiveTintColor: '#1D1E25',
        tabBarInactiveTintColor: '#0048A6',
        tabBarShowLabel: false,
        tabBarLabelStyle: { 
            fontWeight: "600", 
            textDecorationLine: "underline",
        },
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          
          if (route.name === 'index') {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === 'card') {
            iconName = focused ? "document-text" : "document-text-outline";
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
      flexDirection:'row',
      alignItems:'center'
        
    }
})
