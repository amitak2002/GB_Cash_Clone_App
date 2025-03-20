import AppButton from '@/components/AppButton'
import AppInput from '@/components/AppInput'
import React, { useEffect , useState } from 'react'
import { View ,  Text , StyleSheet , ImageBackground, TouchableOpacity} from 'react-native'
import { useLocalSearchParams , useRouter } from 'expo-router'
import { moderateScale , verticalScale } from 'react-native-size-matters'
import LoaderScreen from '@/components/Loader'
import axios from 'axios'
import { authApiUtils } from "../utils/AuthApi.js";
import {END_POINT} from '../utils/endPoint.js'
import { scale } from 'react-native-size-matters'
import { Formik } from 'formik'
import { userAdharOtpSchema } from '@/validationYUP/authValidation.js'
import Toast from 'react-native-toast-message';


function VerifyAhdarOtp() {

  const { ref_id} = useLocalSearchParams()

  const router = useRouter()
  const [loader , setLoader] = useState(true)
  const [otp , setOtp] = useState("")
  const [timer, setTimer] = useState(`01:59`);
  const number = '+918287485227'
  const numberPrint  = `${number.substring(0,3)} ${number.substring(3,6)} ${number.substring(6,9)} ${number.substring(9)}`
   // count down
    useEffect(() => {
      let min = 1;
      let sec = 59;
  
      const timerInterval = setInterval(() => {
        if (min === 0 && sec === 0) {
          setTimer(`OTP Expired`);
          clearInterval(timerInterval); // Timer stop karega
          
          return
        } else {
          if (sec === 0) {
            min -= 1;
            sec = 59;
          } else {
            sec -= 1;
          }
        }
  
        let time = `0${min}:${sec < 10 ? '0' + sec : sec}`;
        setTimer(time);
      }, 1000);
  
      return () => clearInterval(timerInterval);
    }, []);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoader(false)
    }, 3000)
    return () => clearTimeout(timeOut)
  },[])

  // to check or verify otp for adhar
  const handleAdharOtpVerify = async (adharOtpVerify) => {

    try {
      setLoader(true)
      const response = await axios.post(`${authApiUtils}${END_POINT.ADHAR_VERIFICATION}` , 
        {aadhaarOtp : adharOtpVerify , ref_id : ref_id} ,
        {headers : {
          "Content-Type" : "application/json"
        }}
      )  
      setLoader(false)
      console.log("response after adhar otp verify : ",response)
      let msg = (response?.data?.message)
      Toast.show({
        type: 'success',
        text1: msg,
        
        visibilityTime: 2000,
        position: 'top',
      });
      
      router.push("/end-user")
    } 
    catch (error) {
      setLoader(false)
      let errors = error.response.data.message
      
      console.log("errro comes during otp verification : ",error)
     
      Toast.show({
        type: 'error',
        text1: errors,
        
        visibilityTime: 2000,
        position: 'top',
      });
    }
  }
  const handleBackAdhar = () => {
    router.push("/adharVerify")
  }

  if (loader) {
    return <LoaderScreen/>
  }

  return (
    <Formik
      initialValues={{adharOtp : ""}}
      validationSchema={userAdharOtpSchema}
      onSubmit={ (values) => {
        console.log("submitted adhar otp is : ",values)
        setOtp(values.adharOtp)
         handleAdharOtpVerify(values.adharOtp)
      }}
    >
      {({values , touched , errors , handleSubmit , handleChange}) => (
        <View style={style.container}>
        <ImageBackground source={require("../assets/images/backGround.png")}
          style={style.ImageContainer}
        >
        <View style={style.header}>

        </View>
  
        <View style={style.footer}>
  
          <View style={style.changeNumberContainer}>
            <Text style={style.inputText}>OTP SENT TO {numberPrint}</Text>
            <TouchableOpacity onPress={handleBackAdhar}>
              <Text style={style.changeNumber}>Change Number</Text>
            </TouchableOpacity>
          </View>
  
          <AppInput 
          style={style.input}
            placeholder={"OTP CODE"}
            onChangeText={handleChange('adharOtp')}
            value={values.adharOtp}
          />

          {errors.adharOtp && touched.adharOtp && (
            <Text style={{color : '#FFD700' , marginTop:verticalScale(4) , textAlign:'center' , fontStyle:"Urbanist" , fontSize:moderateScale(14)}}>{errors.adharOtp}</Text>
          )}
          <View style={style.resendOtpContainer}>
            <Text style={style.resendText}>RESEND OTP</Text>
            <Text style={style.timer}>{timer}</Text>
          </View>
  
          <AppButton
          style={style.button}
            title={"VERIFY"}
            onPress={handleSubmit}
          />
        </View>
  
        </ImageBackground>
      </View>
      )}
    </Formik>
  )
}

export default VerifyAhdarOtp

const style = StyleSheet.create({
    container : {
      flex : moderateScale(1)
    },
    ImageContainer : {
      width:'100%',
      height:'100%'
    },
    header : {
      flex : moderateScale(0.6),
      
    },
    footer : {
      flex : moderateScale(0.45),
      alignItems:"center",
      justifyContent:'center'
    },
    input : {
      borderBottomWidth:0.8,
      width : '92%',
      paddingVertical : verticalScale(4),
      marginBottom:verticalScale(8),
      color:"#F7F7F7",
      borderBottomColor:'#afa7a7',
      fontWeight:400,
      fontSize:moderateScale(16),
      borderTopColor:'white',
      borderBlockEndColor:'white',
      lineHeight : moderateScale(22),
      fontStyle:"Urbanist",
      paddingHorizontal : scale(3)
    },
    resendOtpContainer:{
      // width : '90%',
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:verticalScale(15),
      columnGap:scale(195)
    },
    resendText : {
      marginLeft : scale(15),
      fontStyle:"Urbanist",
      fontWeight:400,
      fontSize:moderateScale(12),
      color : "#FFFFFF"
    },
    timer : {
      marginRight:scale(14),
      fontStyle:"Urbanist",
      fontWeight:400,
      fontSize:moderateScale(12),
      color : "#FFFFFF"
    },
    button : {
      width:'65%',
      marginTop:verticalScale(20),
      marginBottom:verticalScale(8)
    },
      changeNumberContainer : {
        width:'100%',
        flexDirection:'row',
        justifyContent:"space-evenly",
        columnGap:scale(10),
        marginBottom:verticalScale(15)
      },
      changeNumber : {
        fontStyle:"Urbanist",
        textAlign: "center",
        color: "#FFC046",
        fontSize: scale(12),
        fontWeight: 700,
        lineheight : verticalScale(14),
      },
      inputText: {
        fontStyle:"Urbanist",
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: scale(12),
        fontWeight: 600,
        lineheight : verticalScale(14),
        
      },
})