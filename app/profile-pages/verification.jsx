import { View, Text , StyleSheet , TouchableOpacity , Image , Dimensions} from 'react-native'
import React from 'react'
import { scale , verticalScale , moderateScale } from 'react-native-size-matters'
import {useRouter} from "expo-router"

const {height : responsiveHeight , width : responsiveWidth} = Dimensions.get("window")



export default function verification() {

  const router = useRouter()

  return (
    <View style={style.container}>
      <View style={[{width:(375/375)*responsiveWidth, height:(75/812)*responsiveHeight ,  ...style.headerContainer}]}>
        <View style={[{width:(35/375)*responsiveWidth, height:(30/812)*responsiveHeight , marginLeft : scale(12) , alignItems:"center" , justifyContent : "center"}]}>
          <TouchableOpacity onPress={() => router.back()}>        
            <Image 
              source={require('../../assets/images/leftArrowWhite.png')}
              style={[{width:(24/375)*responsiveWidth, height:(24/812)*responsiveHeight}]}
            />
          </TouchableOpacity>
        </View>

        <View style={[{width:(150/375)*responsiveWidth, height:(42/812)*responsiveHeight , ...style.textProfileContainer}]}>
          <Text style={style.headerText}>Verification</Text>
        </View>
      </View>

      <View style={[{...style.secondContainer , width : (375/375)*responsiveWidth , height : (730/812)*responsiveHeight }]}>

        <View style={[{width:(375/375)*responsiveWidth, height:(200/812)*responsiveHeight , ...style.verificationContainer}]}>
          <View>
            <Image/>
          </View>
          <View></View>
        </View>

      </View>

    </View>
  )
}

const style = StyleSheet.create({
  container : {
    flex : 1
  },
  headerContainer : {
      backgroundColor:"#242424" ,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"flex-start"
    },
    headerProfile : {
      justifyContent:"center"
    },
    textProfileContainer : {
      justifyContent:"center",
      alignItems:"center",
      marginLeft : scale(16)
    },
    headerText : {
      color : "#ffffff",
      fontWeight: "700",
      fontSize: moderateScale(18),
  
      lineHeight: verticalScale(20),
      fontStyle: "Urbanist",
    },
    secondContainer : {
      backgroundColor:"#1ef13a"
    },
    verificationContainer : {
      
      marginTop : verticalScale(20)
    }

})