import { View, Text , StyleSheet , TouchableOpacity , TextInput , Image} from 'react-native'
import React from 'react'
import { scale , verticalScale , moderateScale } from 'react-native-size-matters'
import { Ionicons } from '@expo/vector-icons'

export default function Electricity({onPress}) {
  return (
    <View style={style.container}>
       <View style={style.electricityContainer}>
            <Text style={style.electricityRecahrge}>Electricity</Text>
           <TouchableOpacity onPress={onPress} activeOpacity={0.5} style={{marginRight : scale(4)}}>
           <Ionicons name="arrow-back" color="black" size={28} />
           </TouchableOpacity>
        </View>

        <View style={style.inputContainer}>
          
          <TextInput  style={style.input}
            placeholder='*Select Electricity Board'
          />
         <TouchableOpacity activeOpacity={0.6}>
         <Image source={require("../../assets/images/electricityBill.png")} 
            style={style.electricityImage}
          />
         </TouchableOpacity>
        </View>
    </View>
  )
}

const style = StyleSheet.create({

    container : {
        flex : 1,
        backgroundColor : "white"
    },
    electricityContainer : {
      width : scale(335),
      height : verticalScale(28),
      marginTop : verticalScale(23),
      flexDirection : "row",
      alignItems:'center',
      justifyContent:'space-between',
      marginLeft : scale(18)
      
    },
    electricityRecahrge : {
      fontSize:moderateScale(20),
      fontWeight : "700",
      lineHeight : verticalScale(28),
      fontStyle : "Urbanist",
     
    },
    inputContainer : {
      width : scale(335),
      height : verticalScale(48),
      marginTop : verticalScale(17),
      marginLeft : scale(11),
      MarginRight : scale(20),
      borderRadius : moderateScale(40),
      backgroundColor:"#F7F7F7",
      flexDirection:"row",
      alignItems:"center",
      justifyContent : "left",
      
    },
    input : {
      marginLeft : scale(28),
      width : scale(146),
      height : verticalScale(37),
      fontStyle : "Urbanist",
      fontWeight : "400",
      fontSize : moderateScale(14),
      lineHeight : verticalScale(22),
      color : "#1D1E25",
    },
    electricityImage : {
      marginLeft : scale(118)
    }

})