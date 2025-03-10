import { View, Text, StyleSheet, Alert, Image, ImageBackground, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import AppInput from "../components/AppInput";
import AppButton from "../components/AppButton";
import axios from "axios";
import { useRouter, useLocalSearchParams } from 'expo-router';
import LoaderScreen from "../components/Loader";
import { verifyApi } from "../utils/AuthApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";


export default function VerifyOtp() {
  const { number } = (useLocalSearchParams())
  const router = useRouter();
  const [loading, setLoading] = useState(true);
 
  const [verify, setVerify] = useState(false);
  const [otp, setOTP] = useState("");
  const [timer, setTimer] = useState(`01:59`);
  let [time , setTime] = useState(false)
  
  const numberPrint  = `+91${number.substring(0,3)} ${number.substring(3,6)} ${number.substring(6)}`

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
  const handleOtpVerify = async () => {
    try {
      setLoading(true);

      const response = await axios.post(verifyApi, { phone: `+91${number}`, otp: otp }, {
        headers: { 'Content-Type': 'application/json' }
      });
      
      setLoading(false);
      console.log('response verify is : ', response);
      let msg = (response?.data?.message);
      Alert.alert("Success", msg);
      
      setVerify(true)
      if (number || otp) {
        router.push("panVerify");
        
      }
    
    } catch (error) {
      setLoading(false);
      let err = (error?.response?.data?.message);
      setVerify(false)
      
      Alert.alert("Error", err);
  
      
    }
  };

  if (loading) {
    return <LoaderScreen />;
  }

  return (
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
            value={otp}
            onChangeText={(e) => setOTP(e)}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.resendOtpContainer}>
          <Text style={styles.resendText}>RESEND OTP</Text>
          <Text style={styles.timer}>{timer}</Text>
        </View>
        
        <View style={styles.buttonContainer}>
          <AppButton style={styles.button} title="VERIFY" onPress={handleOtpVerify} />
        </View>
      </View>

      </ImageBackground>
    </View>
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
    width: "100%",
    paddingVertical: verticalScale(5),
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
   
  },
  input: {
    width: "90%",  // ✅ Sahi width set ki
    borderBottomWidth: moderateScale(1),
    borderBottomColor: "#FFFFFF",
    fontStyle:"Urbanist",
    textAlign: "left",
    fontSize: scale(14),
    paddingVertical: verticalScale(8),
    letterSpacing: scale(5),
    color: "#FFFFFF",
    fontWeight: 400,   
    lineheight : verticalScale(22),

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
