import { View, Text , StyleSheet , TouchableOpacity , Image , Dimensions} from 'react-native'
import React from 'react'
import { scale , verticalScale , moderateScale } from 'react-native-size-matters'
import {useRouter} from "expo-router"
import { FontAwesome } from '@expo/vector-icons'



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

        {/**pan verification */}
        <View style={[{width:(350/375)*responsiveWidth, height:(90/812)*responsiveHeight , ...style.verificationContainer}]}>
          <View style={[{width : (250/375)*responsiveWidth,height:(80/812)*responsiveHeight , ...style.panLeft}]}>
            <View  style={[{width : (70/375)*responsiveWidth , height:(80/812)*responsiveHeight , ...style.panImageContainer}]}>
              <Image
                source={require("../../assets/images/pancard.png")}
                style={[{width:(70/375)*responsiveWidth, height:(60/812)*responsiveHeight}]}
              />
            </View>
            <View style={[{width:(170/375)*responsiveWidth,height:(80/812)*responsiveHeight , ...style.textContainer}]}>
              <Text style={style.panText1}>
                Step : 1
              </Text>
              <Text style={style.panText2}>
                PAN Verification
              </Text>
            </View>
          </View>
          <View style={[{width:(50/375)*responsiveWidth, height:(80/812)*responsiveHeight , ...style.panRight}]}>
            <FontAwesome name="check-square" size={24} color="#63E6BE" />
          </View>
        </View>

        {/**aadhar verification */}
        <View style={[{width:(350/375)*responsiveWidth, height:(90/812)*responsiveHeight , ...style.verificationContainer}]}>
          <View style={[{width : (250/375)*responsiveWidth,height:(80/812)*responsiveHeight , ...style.panLeft}]}>
            <View  style={[{width : (70/375)*responsiveWidth , height:(80/812)*responsiveHeight , ...style.panImageContainer}]}>
              <Image
                source={require("../../assets/images/adharcard.png")}
                style={[{width:(70/375)*responsiveWidth, height:(60/812)*responsiveHeight , marginTop : verticalScale(4)}]}
              />
            </View>
            <View style={[{width:(170/375)*responsiveWidth,height:(80/812)*responsiveHeight , ...style.textContainer}]}>
              <Text style={style.panText1}>
                Step : 1
              </Text>
              <Text style={style.panText2}>
                Aadhaar Verification
              </Text>
            </View>
          </View>
          <View style={[{width:(50/375)*responsiveWidth, height:(80/812)*responsiveHeight , ...style.panRight}]}>
            <FontAwesome name="check-square" size={24} color="#63E6BE" />
          </View>
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
      alignItems :"center"
    },
    verificationContainer : {
      
      marginTop : verticalScale(20),
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      backgroundColor:"#F7F7F7",
      borderRadius : moderateScale(15)
    },
    panLeft : {
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      marginLeft:scale(8)
    },
    textContainer : {
      
      alignItems:"flex-start",
      justifyContent : "center"
    },
    panText1 : {
      color : "#7E8CA0",
      fontWeight: "400",
      fontSize: moderateScale(12),
  
      lineHeight: verticalScale(18),
      fontStyle: "Urbanist",
    },
    panText2 : {
      color : "#080808",
      fontWeight: "600",
      fontSize: moderateScale(16),
  
      lineHeight: verticalScale(20),
      fontStyle: "Urbanist",
    },
    panImageContainer : {

      alignItems:"center",
      
    },
    panRight : {
     
      alignItems:"center",
      justifyContent:"center"
    }

})