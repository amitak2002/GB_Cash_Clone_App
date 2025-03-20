import { View, Text, StyleSheet,  ImageBackground, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import AppInput from "../components/AppInput";
import AppButton from "../components/AppButton";
import axios from "axios";
import { useRouter, useLocalSearchParams } from 'expo-router';
import LoaderScreen from "../components/Loader";
import { authApiUtils } from "../utils/AuthApi.js";
import {END_POINT} from '../utils/endPoint.js'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { Formik } from "formik";
import { userOtpSchema } from "@/validationYUP/authValidation";
import Toast from 'react-native-toast-message';

export default function VerifyOtp() {
  const { number } = (useLocalSearchParams())
  
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  
  const [verify, setVerify] = useState(false);
  const [otp, setOTP] = useState("");
  const [timer, setTimer] = useState(`01:59`);
  let [time , setTime] = useState(false)
  
  const numberPrint  = `+91 ${number.substring(0,3)} ${number.substring(3,6)} ${number.substring(6)}`

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  // count down
  useEffect(() => {
    let min = 1;
    let sec = 59;

    const timerInterval = setInterval(() => {
      if (min === 0 && sec === 0) {
        setTimer(`OTP Expired`);
        clearInterval(timerInterval); // Timer stop karega
        setTime(true)
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

  // handleBack Page to change number
  const handleBackPage = () => {
    router.push("/signup")
  }

  // otp verify
  const handleOtpVerify = async (otpVerify) => {
    try {
      setLoading(true);

      const response = await axios.post(`${authApiUtils}${END_POINT.SIGN_UP_VERIFICATION}`, { phone: `+91${number}`, otp: otpVerify }, {
        headers: { 'Content-Type': 'application/json' }
      });
      
      setLoading(false);
      console.log('response verify is : ', response);
      let msg = (response?.data?.message);
      
      Toast.show({
        type:'success',
        text1:msg,
        
        visibilityTime:2000,
        position:'top'
      })
      setVerify(true)
      if (number || otp) {
        router.push("/panVerify"); 
      }
    } catch (error) {
      setLoading(false);
      console.log('error is : ',error)
      let err = (error?.response?.data?.message);
      setVerify(false)
      Toast.show({
        type:'error',
        text1:err,
        visibilityTime:2000,
        position:'top'
      })
    }
    finally{
      setLoading(false)
    }
  };

  if (loading) {
    return <LoaderScreen />;
  }

  return (
    <Formik
      initialValues={{otp : ""}}
      validationSchema={userOtpSchema}
      onSubmit={ (values) => {
        console.log("submitted otp values is : ",values)
        setOTP(values.otp)
         handleOtpVerify(values.otp)
      }}
    >

    {({values , errors , touched , handleChange , handleSubmit}) => (
      <View style={styles.container}>
      <ImageBackground source={require("../assets/images/backGround.png")} style={styles.imageBackground}>
      <View style={styles.header}>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.bottomContainerNumber}>
          <Text style={styles.inputText}>OTP Sent to {numberPrint}</Text>
          <TouchableOpacity activeOpacity={0.5} onPress={handleBackPage}>
            <Text style={styles.changeNumber}>Change Number</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <AppInput
            style={styles.input}
            placeholder="OTP CODE"
            value={values.otp}
            onChangeText={handleChange('otp')}
            keyboardType="numeric"
          />
        </View>
        {errors.otp && touched.otp && (
         <Text style={{ color: '#FFD700' , marginTop : verticalScale(5) , textAlign:'center' , fontStyle:"Urbanist" , fontSize:moderateScale(14)}}>{errors.otp}</Text>
        )}

        <View style={styles.resendOtpContainer}>
          <Text style={styles.resendText}>RESEND OTP</Text>
          <Text style={styles.timer}>{timer}</Text>
        </View>
        
        <View style={styles.buttonContainer}>
          <AppButton style={styles.button} title="VERIFY" onPress={handleSubmit} />
        </View>
      </View>

      </ImageBackground>
    </View>
    )}

    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
   flex : 1,
   alignItems:'center',
   justifyContent:'end'
  },
  imageBackground:{
    width:'100%',
    height:'100%'
  },
  header : {
    flex : 0.5
  },
  bottomContainer: {
    flex: 0.5,
    justifyContent: "center",
  },
  bottomContainerNumber:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    columnGap:scale(10),
    paddingVertical : verticalScale(5)
    
  },
  inputText: {
    fontStyle:"Urbanist",
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: scale(12),
    fontWeight: 600,
    lineheight : verticalScale(14),
    
  },
  inputContainer: {
    width: "94%",
    alignItems:'center',
    justifyContent:'center',
    
    borderBottomWidth:moderateScale(1),
    marginLeft : scale(6),
    borderBottomColor:'#ffffff'

   
  },
  input: {
    width: "95%",  // ✅ Sahi width set ki
    fontStyle:"Urbanist",
    fontSize: scale(14),
    paddingVertical: verticalScale(4),
    color: "#FFFFFF",
    fontWeight: 400,   
    lineheight : verticalScale(22),
    textAlign:'left',
    letterSpacing : scale(6)
  },
  
  buttonContainer: {
    width:'100%',
    marginTop: verticalScale(18),
    alignItems: "center",
  },
  button: {

    width: "60%",
    backgroundColor: "#110606",
    color: "#fff",
  },
  details: {
    flex: 0.7,
    marginBottom: verticalScale(180),
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: moderateScale(40),
  },
  detailsImage: {
    width: scale(150),
    height: verticalScale(100),
  },
  detailsText: {
    marginTop: verticalScale(20),
    fontSize: moderateScale(12),
    color: "#c2c0c0",
  },  
  resendOtpContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:verticalScale(15)
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
  changeNumber : {
    fontStyle:"Urbanist",
    textAlign: "center",
    color: "#FFC046",
    fontSize: scale(12),
    fontWeight: 700,
    lineheight : verticalScale(14),
  }
});
