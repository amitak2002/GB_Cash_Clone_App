import { View, Text, StyleSheet, Image, Alert, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import AppInput from "../components/AppInput";
import AppButton from "../components/AppButton";
import { useRouter , useLocalSearchParams } from "expo-router";
import LoaderScreen from "../components/Loader";
import { signUpApi } from "../utils/AuthApi";
import axios from "axios";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

export default function Signup() {
  const [number, setNumber] = useState("");
  const router = useRouter();
  const [loading, setIsLoading] = useState(true);
 
  const [otp , setOtp] = useState("")

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsLoading(false);
    }, 3000)
    return () => clearTimeout(timeOut)
  }, []);

  console.log("number is : ", number);

  const handleGenerateOtp = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(signUpApi, { phone: `+91${number}` }, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setIsLoading(false);
      console.log("response is : ", response);

      setNumber(number);
      let msg = response?.data?.message
      
      setOtp(response?.data?.data?.otp)
      Alert.alert("Success", msg);
      
      if (response.data.success == true) {
        router.push({ pathname: "/verifyOtp", params: { number} });
      }
    } 
    catch (error) {
      setIsLoading(false);
      console.log("error at signup: ", error);
      let Err = error?.response?.data?.message
      Alert.alert("Error", Err);
     
    }
  };

  
  if (loading) {
    return <LoaderScreen />;
  }

  return (
    <View style={style.mainContainer}>
      <ImageBackground source={require("../assets/images/backGround.svg")}
        style={style.container}
      >
    
      <View style={style.bottomContainer}>
       
        <View style={style.inputContainer}>
        <Image source={require('../assets/images/India.svg')}/>
        <AppInput
          style={style.input}
          placeholder={"Phone Number"}
          value={number}
          onChangeText={(e) => setNumber(e)}
          keyboardType="numeric"
        />
        </View>

        <Text style={style.inputText}>
          * Use Aadhaar registered mobile number for instant Payments
        </Text>

        <View style={style.buttonContainer}>
          <AppButton style={style.button} title={"CONTINUE"} onPress={handleGenerateOtp} />
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
    width: "80%",
    textAlign: "left",
    paddingHorizontal: scale(10),
    padding: moderateScale(10),
    fontSize: moderateScale(18),
    fontWeight: 400,
    letterSpacing: moderateScale(2),
    marginLeft: scale(25),
    color:'#ffffff',
    borderTopWidth:0,borderLeftWidth:0,borderRightWidth:0
  },
  inputText: {
    textAlign: "center",
    marginTop: verticalScale(10),
    padding: moderateScale(10),
    color: "#FFFFFF",
    fontSize: moderateScale(12),
    fontWeight: 400,
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
    fontWeight: 600,
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
    fontWeight: 400,
    fontStyle:'Urbanist'
  },
  termscolor: {
    color: "#FFFFFF",
    fontStyle:'Urbanist',
    fontWeight:700,
    fontSize:moderateScale(12),
    lineheight : verticalScale(16),
  },
});
