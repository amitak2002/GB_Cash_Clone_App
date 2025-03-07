import AppButton from '@/components/AppButton'
import AppInput from '@/components/AppInput'
import React, { useEffect , useState } from 'react'
import { View ,  Text , StyleSheet ,Alert} from 'react-native'
import { useLocalSearchParams , useRouter } from 'expo-router'
import { moderateScale , verticalScale } from 'react-native-size-matters'
import LoaderScreen from '@/components/Loader'
import axios from 'axios'
import {adharOtpVerify} from '../utils/AuthApi.js'
 

function VerifyAhdarOtp() {

  const { ref_id} = useLocalSearchParams()

  console.log("ref id is2 : ",ref_id)
  const router = useRouter()
  const [loader , setLoader] = useState(true)
  const [otp , setOtp] = useState("")
  

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoader(false)
    }, 3000);
    return () => clearTimeout(timeOut)
  },[])

  // to check or verify otp for adhar
  const handleAdharOtpVerify = async () => {

    try {
      setLoader(true)
      const response = await axios.post(adharOtpVerify , 
        {aadhaarOtp : otp , ref_id : ref_id} ,
        {headers : {
          "Content-Type" : "application/json"
        }}
      )  
      setLoader(false)
      console.log("response after adhar otp verify : ",response)
      let msg = (response?.data?.message)
      Alert.alert("Success" , msg)
      router.push("/panVerify")
    } 
    catch (error) {
      setLoader(false)
      let errors = error.response.data.message
      
      console.log("errro comes during otp verification : ",error)
      Alert.alert("Error" , errors )
      console.log('error is : ',errors)
    }


  }

  if (loader) {
    return <LoaderScreen/>
  }

  return (
    <View style={style.container}>

      <View style={style.header}><Text>Header</Text></View>

      <View style={style.footer}>

        <AppInput 
        style={style.input}
          placeholder={"enter Otp"}
          onChangeText={setOtp}
        />

        <AppButton
        style={style.button}
          title={"Verify Adhaar"}
          onPress={handleAdharOtpVerify}
        />
      </View>

    </View>
  )
}

export default VerifyAhdarOtp

const style = StyleSheet.create({
    container : {
      flex : moderateScale(1)
    },
    header : {
      flex : moderateScale(0.7),
      
    },
    footer : {
      flex : moderateScale(0.3),
      
      alignItems:"center",
      justifyContent:'center'
    },
    input : {
      borderBottomWidth:0.8,
      width : '80%',
      paddingVertical : verticalScale(15),
      marginBottom:verticalScale(8),
      textAlign : 'center',
      letterSpacing : 2,
      borderBottomColor:'#afa7a7',
      fontWeight:700,
      fontSize:15,
      borderTopColor:'white',
      borderBlockEndColor:'white'
    },
    button : {
      width:'80%',
      marginTop:verticalScale(5),
      marginBottom:verticalScale(8)
    }
})