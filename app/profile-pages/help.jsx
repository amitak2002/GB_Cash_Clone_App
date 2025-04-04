import { View, Text , StyleSheet , TouchableOpacity , Image , Dimensions} from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { scale , moderateScale , verticalScale } from 'react-native-size-matters'



const {height : responsiveHeight , width : responsiveWidth} = Dimensions.get("window")

export default function help() {

  const router = useRouter()

  return (
    <View style={style.container}>
      <View style={[{width:(375/375)*responsiveWidth, height:(75/812)*responsiveHeight ,  ...style.headerContainer}]}>
        <View style={[{width:(35/375)*responsiveWidth, height:(30/812)*responsiveHeight , marginLeft : scale(12)}]}>
          <TouchableOpacity onPress={() => router.back()}> 
            <Image 
              source={require('../../assets/images/leftArrowWhite.png')}
              style={[{width:(24/375)*responsiveWidth, height:(24/812)*responsiveHeight }]}
            />
          </TouchableOpacity>
        </View>

        <View style={[{width:(180/375)*responsiveWidth, height:(42/812)*responsiveHeight , ...style.textProfileContainer}]}>
          <Text style={style.headerText}>Help</Text>
        </View>
      </View>

      <View style={[{width:(375/375)*responsiveWidth,height : (700/812)*responsiveHeight , ...style.bottomContainer}]}>
        <View style={[{width : (330/375)*responsiveWidth , height : (500/812)*responsiveHeight , ...style.top}]}>
          {/**content baaki hai */}
        </View>

        <View style={[{width : (330/375)*responsiveWidth , height : (150/812)*responsiveHeight , ...style.down}]}>
            <TouchableOpacity>
              <View style={[{width:(330/375)*responsiveWidth, height : (70/812)*responsiveHeight , ...style.whatsapp}]}>
                <Image 
                  source={require("../../assets/images/whatsapp.png")}
                  style={[{width:(50/375)*responsiveWidth , height : (50/812)*responsiveHeight , marginLeft : scale(18)}]}
                />
                <Text style={style.whatsappText}>WhatsApp</Text>
                <Image 
                  source={require("../../assets/images/next.png")}
                  style={[{width:(10/375)*responsiveWidth, height:(10/812)*responsiveHeight }]}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={[{width:(330/375)*responsiveWidth, height : (70/812)*responsiveHeight , ...style.phone}]}>
                <Image 
                    source={require("../../assets/images/phone-call.png")}
                    style={[{width:(48/375)*responsiveWidth,height : (48/812)*responsiveHeight , marginLeft : scale(18)}]}
                  />
                <Text style={style.callText}>Call us</Text>
                <Image 
                    source={require("../../assets/images/next.png")}
                  style={[{width:(10/375)*responsiveWidth, height:(10/812)*responsiveHeight , marginLeft : scale(25)}]}
                />
              </View>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
} 

const style = StyleSheet.create({
  container : {
    flex : 1,
    alignItems:"center"
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
    bottomContainer : {
      alignItems:"center",
      marginTop : verticalScale(10)
    },
    top : {
       
    },
    down : {
      
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"space-between",
      marginBottom : verticalScale(25),
      

    },
    whatsapp : {
      
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"flex-start",
      
    },
    phone : {
      
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"flex-start"
    },
    whatsappText : {
      color : "#0c6dec",
      fontWeight: "700",
      fontSize: moderateScale(18),
  
      lineHeight: verticalScale(20),
      fontStyle: "Urbanist",
      marginLeft : scale(10)
    },
    callText : {
      color : "#0c6dec",
      fontWeight: "700",
      fontSize: moderateScale(18),
  
      lineHeight: verticalScale(20),
      fontStyle: "Urbanist",
      marginLeft : scale(10)
    }
})