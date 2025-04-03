import { View, Text , StyleSheet , Dimensions , Image, TouchableOpacity} from 'react-native'
import React , {useState , useEffect, useCallback} from 'react'
import {scale , verticalScale , moderateScale} from "react-native-size-matters"
import { FontAwesome } from '@expo/vector-icons'
import {getData} from '../../utils/LocalStoragemethods/LocalStorage'


const {height : responsiveHeight , width : responsiveWidth} = Dimensions .get("window")

export default function HeaderComponent({onPress}) {

    const [userName , setUserName] = useState("Admin")

    const fetchUserAsyncData =  useCallback(async () => {
            const data = await getData("user")
            console.log("data at headerComponentPage : ",data)
            setUserName(data.care_of)
    } , [])
    useEffect(() => {
        fetchUserAsyncData();
    } , [])

  return (
    <View style={[{width : (375/375)*responsiveWidth , height : (80/812)*responsiveHeight , ...style.container}]}>
        <View style={[{width : (375/375)*responsiveWidth , height : (80/812)*responsiveHeight , ...style.headerContainer}]}>
            {/**header right */}
            <View style={[{width:(180/375)*responsiveWidth, height:(80/812)*responsiveHeight , ...style.headerLeftContainer}]}>
                <View style={[{width:(50/375)*responsiveWidth, height:(50/812)*responsiveHeight , ...style.headerLeftImageContainer}]}>
                    <Image 
                        style={[{width:(50/375)*responsiveWidth, height:(50/812)*responsiveHeight }]}
                    />
                </View>
                
                <View style={[{width:(170/375)*responsiveWidth, height:(70/812)*responsiveHeight , ...style.headerLeftTextContainer}]}>
                    <Text style={style.headerLeftText1}>Welcome Back</Text>
                    <Text style={style.headerLeftText2}>{userName}</Text>
                </View>
            </View>

            {/**header right */}
            <View style={[{width:(50/375)*responsiveWidth, height:(75/812)*responsiveHeight , ...style.headerRightContainer}]}>
                <TouchableOpacity onPress={onPress}>
                    <FontAwesome name='bars' color={"#F7F7F7"} size={25}/>
                </TouchableOpacity>
            </View>
        </View>

        
        
    </View>
  )
}

const style = StyleSheet.create({
    container : {
        backgroundColor:"#242424"
    },
    headerContainer : {
        flexDirection:"row",
        justifyContent : "space-between",
        alignItems:"center"
    },
    headerLeftContainer : {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    headerRightContainer : {
        alignItems:"center",
        justifyContent:"center"
    },
    headerLeftImageContainer : {
        backgroundColor:"#F7F7F7",
        borderRadius : moderateScale(50),
        marginLeft : scale(6)
    },
    headerLeftTextContainer : {
        marginLeft : scale(6),
        
        alignItems:"flex-start",
        justifyContent:"center"
    },
    headerLeftText1 : {
        fontWeight: "700",
        fontSize: moderateScale(18),
        color: "#F7F7F7",
        lineHeight: verticalScale(20),
        fontStyle: "Urbanist",
    },
    headerLeftText2 : {
        fontWeight: "400",
        fontSize: moderateScale(14),
        color: "#d8d8d5",
        lineHeight: verticalScale(20),
        fontStyle: "Urbanist",
    },
    modal : {
        flex : 1,
        backgroundColor:"#00000070"
    }
})