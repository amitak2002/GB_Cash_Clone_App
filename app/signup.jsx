import { View, Text, StyleSheet, Image, Alert, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import AppInput from "../components/AppInput";
import AppButton from "../components/AppButton";
import { useRouter , useLocalSearchParams } from "expo-router";
import LoaderScreen from "../components/Loader";
import { authApiUtils } from "../utils/AuthApi.js";
import {END_POINT} from '../utils/endPoint.js'
import axios from "axios";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import {userMobileSchema} from '../validationYUP/authValidation.js'
import {Formik} from 'formik'
import Toast from 'react-native-toast-message';

export default function Signup() {

  const [number, setNumber] = useState("");
  const router = useRouter();
  const [loading, setIsLoading] = useState(true);
  const [otp, setOtp] = useState("");

  useEffect(() => {
    Toast.show({
      type: 'success',
      text1: 'Welcome to Signup Page',
      visibilityTime: 2000, // 2 seconds
      position: 'top',
    });
  }, []);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timeOut);
  }, []);

  const handleGenerateOtp = async (phNum) => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${authApiUtils}${END_POINT.SIGN_UP}`,
        { phone: `+91${phNum}` },
        { headers: { "Content-Type": "application/json" } }
      );

      setIsLoading(false);
      console.log("response is : ", response);
      setNumber(phNum); // ✅ State update
      let msg = response?.data?.message;
      setOtp(response?.data?.data?.otp); 
      Toast.show({
        type:'success',
        text1:msg,
        visibilityTime:2000,
        position:'top'
      })
      if (response.data.success === true) {
        router.push({ pathname: "verifyOtp", params: { number: phNum } }); 
      }
    } catch (error) {
      setIsLoading(false);
      console.log("error at signup: ", error);
      let Err = error?.response?.data?.message;
     
      Toast.show({
        type:'error',
        text1:Err,
       
        visibilityTime:2000,
        position:'top'
      })
    }finally {
      setIsLoading(false); // ✅ Loader control
    }
  };

  if (loading) {
    return <LoaderScreen />;
  }

  return (
    <Formik 
      initialValues={{ phoneNumber: "" }}
      validationSchema={userMobileSchema}
      onSubmit={ (values) => {
        console.log("submitted values: ", values);
        setNumber(values.phoneNumber)
        handleGenerateOtp(values.phoneNumber); 
        }}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <View style={style.mainContainer}>
        <ImageBackground
        source={require("../assets/images/backGround.png")}
        style={style.container}
        >
        <View style={style.bottomContainer}>
          <View style={style.inputContainer}>
            <Image source={require('../assets/images/India.png')} />
            <AppInput
              style={style.input}
              placeholder="Type contact number"
              value={values.phoneNumber}
              onChangeText={handleChange('phoneNumber')}
              keyboardType="numeric"
            />
          </View>

          {/* Display Error Message */}
          {errors.phoneNumber && touched.phoneNumber && (
            <Text style={{ color: '#FFD700', marginTop : verticalScale(5) , textAlign:'center' , fontSize:moderateScale(14) , fontStyle:"Urbanist"}}>{errors.phoneNumber}</Text>
          )}

          <Text style={style.inputText}>
            * Use Aadhaar registered mobile number for instant Payments
          </Text>

          <View style={style.buttonContainer}>
            <AppButton 
              style={style.button} 
              title="CONTINUE" 
              onPress={handleSubmit} 
            />
          </View>

          <View style={style.termContainer}>
            <Text style={style.termText}>
              By continuing, you agree to our <Text style={style.termscolor}>T&C</Text> and {" "}
              <Text style={style.termscolor}>Policies</Text>
            </Text>
          </View>
        </View>
        </ImageBackground>
      </View>
      )}
    </Formik>

  );
}

const style = StyleSheet.create({
  mainContainer : {
    flex:1
  },
  container: {
    width:'100%',
    height:'100%'
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingBottom: verticalScale(20),
    alignItems:'center',
  },
  inputContainer: {
    width: "90%",
    flexDirection:'row',
    borderBottomWidth:moderateScale(1),
    borderBottomColor:"#FFFFFF",
    alignItems: "center",
  },
  input: {
    width: "90%",
    textAlign: "left",
    fontSize: moderateScale(15),
    fontWeight: "400",
    letterSpacing: moderateScale(2),
    marginLeft: scale(2),
    color:'#F7F7F7',
    fontStyle:'Urbanist',
    backgroundColor: '#0048A6',
  },
  inputText: {
    textAlign: "center",
    marginTop: verticalScale(10),
    padding: moderateScale(10),
    color: "#ffffff",
    fontSize: moderateScale(12),
    fontWeight: "400",
    lineHeight: moderateScale(16),
    fontStyle:"Urbanist",
  },
  buttonContainer: {
    widht:'100%',
    marginTop: verticalScale(20),
    alignItems: "center",
  },
  button: {
    width: "100%",
    fontWeight: "600",
    paddingHorizontal : scale(70),
    marginBottom: verticalScale(8),
    backgroundColor: "#110606",
    color: "#e7e7e7",
    fontSize:moderateScale(11)
  },
  termContainer: {
    marginTop: verticalScale(10),
    alignItems: "center",
  },
  termText: {
    lineheight : verticalScale(16),
    fontSize: moderateScale(11),
    color: "#ffffff",
    fontWeight: "400",
    fontStyle:'Urbanist'
  },
  termscolor: {
    color: "#FFFFFF",
    fontStyle:'Urbanist',
    fontWeight:"700",
    fontSize:moderateScale(12),
    lineheight : verticalScale(16),
  },
});
