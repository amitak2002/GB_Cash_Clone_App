import { View, Text , StyleSheet , Image , TouchableOpacity  ,Dimensions} from 'react-native'
import React from 'react'
import { scale , verticalScale , moderateScale } from 'react-native-size-matters'
import {useRouter} from "expo-router"
import AppInput from "../../components/AppInput"
import CardnumberInput from "../../components/CardNumberInput/CardnumberInput"



const {height : responsiveHeight , width : responsiveWidth} = Dimensions .get("window")

export default function creditcardadd() {

  const [cardNumber , setCardNumber] = React.useState("")

  const router = useRouter()


  return (
    <View style={style.container}>
      
        <View style={[{width : (375/375)*responsiveWidth , height : (75/812)*responsiveHeight , ...style.headerContainer}]}>
            <TouchableOpacity onPress={() => router.back()}>
                <Image 
                    source={require('../../assets/images/leftArrowWhite.png')}
                    style={[{width:(24/375)*responsiveWidth, height:(24/812)*responsiveHeight , ...style.imageLeft}]}
                />
            </TouchableOpacity>
            <Text style={style.cardText}>Add Credit Card</Text>
        </View>

        <View style={[{width : (355/375)*responsiveWidth, height:(720/812)*responsiveHeight , ...style.innerMainContainer}]}>

          <View style={[{width : (355/375)*responsiveWidth , height : (45/812)*responsiveHeight , ...style.creeditCardContainertext}]}>
            <Text style={style.creditCardText}>Please add only Credit Card . Debit card is not accepted</Text>
          </View>

          <View style={[{width : (355/375)*responsiveWidth , height : (50/812)*responsiveHeight , ...style.inputNameContainer}]}>
            <AppInput 
              placeholder={"Card Holder Name"}
              style={[{width : (250/375)*responsiveWidth , height : (50/812)*responsiveHeight , ...style.inputName}]}
            />
          </View>

          <View style={[{width:(355/375)*responsiveWidth, height:(120/812)*responsiveHeight , borderWidth:1 , ...style.cardNumberContainer}]}>
            <Text style={style.cardInputText}>Card Number* (Start 4 Digits & Last 4 Digits Only)</Text>
            <View style={[{width:(355/375)*responsiveWidth, height:(80/812)*responsiveHeight , ...style.cardInputContainer}]}>
              <CardnumberInput 
                inputContainer={[{width:(280/375)*responsiveWidth, height:(80/812)*responsiveHeight , ...style.inputContainer}]}
                textContainer = {[{width:(280/375)*responsiveWidth, height:(80/812)*responsiveHeight , ...style.textContainer}]}
                value={cardNumber}
                onChangeText={(e) => setCardNumber(e)}
              />
            </View>
          </View>
        </View>

    </View>
  )
}
const style = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : "center"
  },
  headerContainer : {
      backgroundColor:"#020101",
      flexDirection:"row",
      justifyContent:"flex-start",
      alignItems:"center"
    },
    imageLeft : {
      marginLeft : scale(10)
    },
    cardText : {
      fontWeight: "700",
      fontSize: moderateScale(24),
      color: "#ffffff",
      lineHeight: verticalScale(22),
      fontStyle: "Urbanist",
      marginLeft : scale(16)
    },
    innerMainContainer : {
      alignItems:"center"
    },
    inputNameContainer : {
      
      backfaceVisibility:"gray",
      marginTop : verticalScale(18),
      backgroundColor:"#F7F7F7",
      borderRadius : moderateScale(15)
    },
    inputName : {
      color : "black",
    },
    creeditCardContainertext : {
      marginTop : verticalScale(12),
      alignItems:"center",
      justifyContent : "center"
    },
    creditCardText : {
      fontWeight: "600",
      fontSize: moderateScale(18),
      color: "#0048A6",
      lineHeight: verticalScale(20),
      fontStyle: "Urbanist",
    },
    cardNumberContainer : {
      marginTop : verticalScale(15)
    },
    cardInputText : {
      fontWeight: "400",
      fontSize: moderateScale(14),
      color: "#4e4c4c",
      lineHeight: verticalScale(18),
      fontStyle: "Urbanist",
      textAlign : "center"
  
    },
    cardInputContainer :{
      justifyContent:"center",
      alignItems:"center"
    },
    inputContainer : {
      alignItems:"center",
      justifyContent:"center",
    },
    textContainer : {
      fontWeight: "600",
      fontSize: moderateScale(24),
      color: "#0048A6",
      lineHeight: verticalScale(24),
      fontStyle: "Urbanist",
      letterSpacing : scale(2),
      marginLeft : scale(4)
    }


})

