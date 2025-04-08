import { View, Text , TouchableOpacity , StyleSheet } from 'react-native'
import React , {useState} from 'react'
import { scale , verticalScale , moderateScale } from 'react-native-size-matters'

export default function Atm() {

    const {height : responsiveHeight , width : responsiveWidth} = Dimensions.get("window")

  return (
    <View style={[{width : (375/375)*responsiveWidth, height:(390/812)*responsiveHeight , ...style.container}]}>
        <View style={[{width : (180/375)*responsiveWidth, height:(20/812)*responsiveHeight , }]}>
            <Text style={[{width : (180/375)*responsiveWidth, height:(20/812)*responsiveHeight , ...style.PaymentInstructionText}]}>
                Payment Instructions
            </Text>
        </View>
    
     
    </View>
  )
}

const style = StyleSheet.create({
    container : {
        flex : 1
    },
    PaymentInstructionText : {
        fontWeight : "700",
        fontSize : moderateScale(16),
        lineHeight : verticalScale(20),
        color : "#000000",
        fontStyle : "Urbanist",
        backgroundColor:"red"
    }
})