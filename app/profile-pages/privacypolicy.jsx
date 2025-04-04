import { View, Text , StyleSheet , TouchableOpacity,Image , Dimensions } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { scale , verticalScale , moderateScale } from 'react-native-size-matters'
import PrivacyPolicy from '../../components/PrivacyPolicyComponent/PrivacyPolicy'



const {height : responsiveHeight , width : responsiveWidth} = Dimensions.get("window")

export default function privacypolicy() {

  const router = useRouter()

  return (
    <View style={style.container}>

      <View style={[{width:(375/375)*responsiveWidth, height:(75/812)*responsiveHeight ,  ...style.headerContainer}]}>
        <View style={[{width:(35/375)*responsiveWidth, height:(35/812)*responsiveHeight , marginLeft : scale(12)}]}>
          <TouchableOpacity onPress={() => router.back()}> 
            <Image 
              source={require('../../assets/images/leftArrowWhite.png')}
              style={[{width:(24/375)*responsiveWidth, height:(24/812)*responsiveHeight}]}
            />
          </TouchableOpacity>
        </View>

        <View style={[{width:(180/375)*responsiveWidth, height:(42/812)*responsiveHeight , ...style.textProfileContainer}]}>
          <Text style={style.headerText}>Privacy Policy</Text>
        </View>
      </View>

      <View style={[{width : (357/357)*responsiveWidth , height:(732/812)*responsiveHeight}]}>
        <PrivacyPolicy />
      </View>
      
    </View>
  )
}

const style = StyleSheet.create({
  container : {
    flex : 1,
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
      marginLeft : scale(8)
    },
    headerText : {
      color : "#ffffff",
      fontWeight: "700",
      fontSize: moderateScale(18),
  
      lineHeight: verticalScale(20),
      fontStyle: "Urbanist",
    },
})