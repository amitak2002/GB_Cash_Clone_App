import { View, Text , StyleSheet, TouchableOpacity , Image , TextInput} from 'react-native'
import React ,{useState , useEffect} from 'react'
import { scale , verticalScale , moderateScale } from 'react-native-size-matters'
import { Ionicons } from '@expo/vector-icons'
import { Formik } from 'formik'
import { userMobileSchema } from '@/validationYUP/authValidation'


export default function Mobile({onPress}) {

  const [number , setNumber] = useState("")
  console.log("phone Number is : ",number)

  useEffect(() => {
    if (number.length === 3 || number.length === 7) {
      setNumber((prev) => prev += " ")
    }
  } , [number])

  const initialValues = {
    phoneNumber : ""
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userMobileSchema}
      onSubmit={(values) => {
        console.log("values is : ",values)
        setNumber(values.phoneNumber)
        console.log("number is : ",number)
      }}

    >
    {({values , handleChange , handleSubmit , errors , touched}) => (

      <View style={style.container}>
      <View style={style.mobileRecahrgeContainer}>
          <Text style={style.mobileRecahrge}>Mobile Recharge</Text>
          <TouchableOpacity onPress={onPress} activeOpacity={0.5} style={{marginRight : scale(2)}}>
          <Ionicons name="arrow-back" color="black" size={28} />
          </TouchableOpacity>
      </View>

      <View style={style.inputContainer}>
        <Image source={require("../../assets/images/India.png")} style={style.image}/>
        <Text style={style.inputText}>{`+91`}</Text>
        <TextInput style={style.input} 
        value={values.phoneNumber}
        onChangeText={handleChange('phoneNumber')}
        defaultValue=''
        keyboardType='default'
        
        />
          <TouchableOpacity onPress={handleSubmit}>
            <Image source={require("../../assets/images/simcard.png")} style={style.simImage}/>
          </TouchableOpacity>
      </View>
        {errors.phoneNumber && touched.phoneNumber && (
          <Text style={{textAlign : "center" , marginTop : verticalScale(4) , color : "red" , fontSize:moderateScale(12) , fontWeight : "700" , fontStyle : "Urbanist"}}>{errors.phoneNumber}</Text>
        )}
      </View>
    )}
    </Formik>
  )
}

const style = StyleSheet.create({

    container : {
        flex : 1,
        backgroundColor : "white",
        width : scale(375)
    },
    mobileRecahrgeContainer : {
      width : scale(335),
      height : verticalScale(28),
      marginTop : verticalScale(23),
      flexDirection : "row",
      alignItems:'center',
      justifyContent:'space-between',
      marginLeft : scale(20)
      
    },
    mobileRecahrge : {
      fontSize:moderateScale(20),
      fontWeight : "700",
      lineHeight : verticalScale(28),
      fontStyle : "Urbanist",
     
    },
    inputContainer : {
      width : scale(335),
      height : verticalScale(48),
      marginTop : verticalScale(17),
      marginLeft : scale(20),
      MarginRight : scale(20),
      borderRadius : moderateScale(40),
      backgroundColor:"#F7F7F7",
      flexDirection:"row",
      alignItems:"center",
      justifyContent : "left",
      
    },
    image : {
      marginLeft : scale(20),
      width : scale(22),
      height : verticalScale(22)
    },
    inputText : {
      marginLeft : scale(7),
      width : scale(22),
      height : verticalScale(22),
      fontStyle : "Urbanist",
      fontWeight : "400",
      lineHeight : verticalScale(22),
      fontSize:moderateScale(14)
    },
    input : {
      marginLeft : scale(4),
      width : scale(85),
      height : verticalScale(37),
      fontStyle : "Urbanist",
      fontWeight : "400",
      fontSize : moderateScale(14),
      lineHeight : verticalScale(22),
      color : "#1D1E25",
      
    },
    simImage : {
      marginLeft : scale(130)
    }
  

})