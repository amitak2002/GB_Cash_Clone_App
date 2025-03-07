import { View, Text , StyleSheet } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from "@expo/vector-icons";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";



export default function _layout() {
  return (
    <Tabs screenOptions={{headerShown : false  ,
     tabBarStyle : style.tabContainer,
        tabBarActiveTintColor :'white',
        tabBarInactiveTintColor :'#d0c8c8',
        tabBarActiveBorder : 'underline',
        tabBarLabelStyle: { 
            fontWeight: "600", 
            textDecorationLine: "underline" ,
          },
        tabBarShowLabel : true
     }}>
       
            <Tabs.Screen name='index' options={{title:"Home" , 
            tabBarIcon : ({color , size}) => (<Ionicons name='home' color={color} size={25}/>)}}
            />

            <Tabs.Screen name='card' options={{title:"Card" , 
                tabBarIcon : ({color , size}) => (<Ionicons name="card" color={color} size={25}/>)}}
            />

            <Tabs.Screen name='history' options={{title:"History" ,
                tabBarIcon : ({color , size}) => (<Ionicons name='time' color={color} size={25}/>)
            }}/>
            <Tabs.Screen name='profile' options={{title:"Profile" ,
                tabBarIcon : ({color , size}) => (<Ionicons name='person' color={color} size={25}/>)
            }}/>
       
    </Tabs>
  )
}

const style = StyleSheet.create({
    tabContainer : {
        backgroundColor:'#0f77df',
        color:'white',
        borderTopLeftRadius : moderateScale(15),
        borderTopRightRadius : moderateScale(15),
        paddingVertical : 20
    }
})