import { View, Text, Image, StyleSheet,Modal, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router';
import { verticalScale , scale , moderateScale } from 'react-native-size-matters';
import { Ionicons } from '@expo/vector-icons';
import React , {useState} from 'react';
import OptionComponent from "../../components/OptionComponent"

export default function Layout() {

  const [state , setState] = useState(false)

    return (
        <View style={style.container}>
          {/* header */} 
          <View style={style.header}>

            <View style={style.headerLeftSection}>
              <Image 
              source={require("../../assets/images/favicon.png")}
              style={style.image}
              />
              <View style={style.headerLeftSecText}>
                <Text style={style.leftText1}>Welcome Back</Text>
                <Text style={style.leftText2}>Admin</Text>
              </View>
            </View>
            
            <View style={style.rightSection}>
              <TouchableOpacity onPress={() => setState(prev => !prev)}>
              <Ionicons name="notifications" color={"#ffffff"} size={25} />
            </TouchableOpacity>

            </View>

        </View>

        
          <View style={style.content}>
              <Stack screenOptions={{ headerShown: false  }} />
          </View>
        </View>
    );
}
const style = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        height: verticalScale(70), 
        backgroundColor: '#242424',
        alignItems: 'center',
        flexDirection:'row',
        borderBottomLeftRadius: scale(15), 
        borderBottomRightRadius: scale(15),
        justifyContent:'space-between'
    },
    
    content: {
        flex:1,
    },
    headerLeftSection : {
      marginLeft : scale(8),
      display:'flex',
      flexDirection:'row',
      alignContent : 'center',
      columnGap:scale(6)
    },
    image : {
      width:scale(40),
      height:verticalScale(50),
      borderRadius:moderateScale(50),
      borderWidth:2
    },
    rightSection : {
      marginRight:scale(8)
    },
    headerLeftSecText : {
      alignItems:'left',
      
    },
    leftText1 : {
      fontWeight:600,
      fontSize:moderateScale(14),
      color:"#FFFFFF"
    },
    leftText2 : {
      fontWeight:500,
      fontSize:moderateScale(12),
      color:"#FFFFFF"
    },
   
}); 