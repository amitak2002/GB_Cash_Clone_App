import { View, Text, StyleSheet, Alert, Image } from "react-native";
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
  const { number } = useLocalSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [verify, setVerify] = useState(false);
  const [otp, setOTP] = useState("");
  const [timer, setTimer] = useState(`01:59`);

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
        return;
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

  const handleOtpVerify = async () => {
    try {
      setLoading(true);
      setMessage("")
      setOTP("")

      const response = await axios.post(verifyApi, { phone: number, otp: otp }, {
        headers: { 'Content-Type': 'application/json' }
      });

      setLoading(false);
      console.log('response verify is : ', response);
      setMessage(response?.data?.message);
      Alert.alert("Success", "OTP Verified Successfully");
      setVerify(true)
      if (number || otp) {
        router.push("/adharVerify");
      }
    
    } catch (error) {
      setLoading(false);
      setMessage(error?.response?.data?.message);
      setVerify(false);
      console.log('error comes at verify otp : ', error);
      Alert.alert("Error", message || "Error during verification");
      setMessage("")
      setOTP("")
    }
  };

  if (loading) {
    return <LoaderScreen />;
  }

  return (
    <View style={styles.container}>
      <View>
        <Image />
      </View>

      <View style={styles.details}>
        <Image  
          source={require("../assets/images/localKonnectLogo.png")}
          style={styles.detailsImage}
        />
        <Text style={styles.detailsText}>
          Pay bills, Recharge, Pay Education Fees, and do much more with us
        </Text>
        <Text style={[styles.detailsText, { color: verify ? `green` : `red` }]}>{message}</Text>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.inputText}>OTP Sent to {number}</Text>

        <View style={styles.inputContainer}>
          <AppInput
            style={styles.input}
            placeholder="Enter OTP"
            value={otp}
            onChangeText={(e) => setOTP(e)}
            keyboardType="numeric"
          />
          <Text style={styles.timer}>{timer}</Text>
        </View>
        
        <View style={styles.buttonContainer}>
          <AppButton style={styles.button} title="Verify" onPress={handleOtpVerify} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(20),
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: verticalScale(20),
  },
  inputText: {
    textAlign: "center",
    marginTop: verticalScale(15),
    padding: moderateScale(15),
    color: "#1e77e5",
    fontSize: scale(15),
    fontWeight: "bold",
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
    width: "65%",  // ✅ Sahi width set ki
    borderBottomWidth: 2,
    borderBottomColor: "rgb(231, 221, 221)",
    textAlign: "center",
    fontSize: scale(18),
    paddingVertical: verticalScale(5),
    letterSpacing: scale(5),
    color: "#4d4d4d",
    fontWeight: "600",
    marginLeft : scale(50)
      
    
  },
  timer: {
    fontSize: scale(12),
    fontWeight: 600,
    color: "#151313",
    marginRight : 35
  },
  buttonContainer: {
    marginTop: verticalScale(15),
    alignItems: "center",
  },
  button: {
    width: "85%",
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
});
