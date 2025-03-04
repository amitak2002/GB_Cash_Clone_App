import { View, Text, StyleSheet, Image, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import AppInput from "../components/AppInput";
import AppButton from "../components/AppButton";
import { useRouter } from "expo-router";
import LoaderScreen from "../components/Loader";
import { signUpApi } from "../utils/AuthApi";
import axios from "axios";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

export default function Signup() {
  const [number, setNumber] = useState("+91");
  const router = useRouter();
  const [loading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [otp , setOtp] = useState("")

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  console.log("number is : ", number);
  const handleGenerateOtp = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(signUpApi, { phone: number }, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setIsLoading(false);
      console.log("response is : ", response);

      setNumber(number);
      setMessage(response?.data?.message);
      setOtp(response?.data?.data?.otp)
      Alert.alert("Success", "OTP created successfully");

      if (response.data.success) {
        router.push({ pathname: "/verifyOtp", params: { number } });
      }
    } catch (error) {
      setIsLoading(false);
      console.log("error at signup: ", error);
      setMessage(error?.response?.data?.message);
      Alert.alert("Error", message || "Something went wrong");
    }
  };

  if (loading) {
    return <LoaderScreen />;
  }

  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <Image style={style.image} source={require("../assets/images/react-logo.png")} />
      </View>

      <View style={style.details}>
        <Image source={require("../assets/images/localKonnectLogo.png")}
          style = {style.detailsImage}
        />
        <Text style={style.detailsText}>
          Pay bills , Recharge , Pay Education Fees and do much with us
        </Text>
        <Text style={[style.detailsText, { color: otp ? 'green' : 'red'}]}>{message}</Text>

      </View>

      <View style={style.bottomContainer}>
        <View style={style.inputContainer}>
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
          <AppButton style={style.button} title={"Generate Otp"} onPress={handleGenerateOtp} />
        </View>

        <View style={style.termContainer}>
          <Text style={style.termText}>
            By continuing, you agree to our <Text style={style.termscolor}>T&C</Text> and {" "}
            <Text style={style.termscolor}>Policies</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'space-between'
  },
  imageContainer: {},
  image: {
    width: scale(100),
    height: verticalScale(100),
    alignSelf: "center",
  },
  details: {
    flex : 0.7,
    marginBottom : verticalScale(180),
    width:'100%',
    alignItems:'center',
    justifyContent :'center',
    backgroundColor:'white',
    padding:moderateScale(40)
  },
  detailsImage : {
    width: scale(150),
    height:verticalScale(100),
  },
  detailsText: {
    marginTop : verticalScale(20),
    fontSize:moderateScale(12),
    color:'#c2c0c0'
  },  
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingBottom: verticalScale(10),
    backgroundColor: "white",
  },
  inputContainer: {
    width: "100%",
    paddingVertical: verticalScale(10),
    justifyContent: "center",
    alignContent: "center",
  },
  input: {
    width: "90%",
    borderBottomWidth: moderateScale(0.7),
    borderBottomColor: "rgb(231, 221, 221)",
    textAlign: "left",
    paddingHorizontal: scale(10),
    padding: moderateScale(10),
    fontSize: moderateScale(18),
    fontWeight: "500",
    letterSpacing: moderateScale(2),
    marginLeft: scale(25),
  },
  inputText: {
    textAlign: "center",
    marginTop: verticalScale(10),
    padding: moderateScale(10),
    color: "#1e77e5",
    fontSize: moderateScale(12),
    fontWeight: "bold",
    lineHeight: moderateScale(25),
  },
  buttonContainer: {
    marginTop: verticalScale(15),
    alignItems: "center",
  },
  button: {
    width: "85%",
    fontWeight: "bold",
    marginBottom: verticalScale(10),
    backgroundColor: "#110606",
    color: "#fff",
  },
  termContainer: {
    marginTop: verticalScale(10),
    alignItems: "center",
  },
  termText: {
    fontSize: moderateScale(15),
    color: "#0e0d0d",
    fontWeight: "bold",
  },
  termscolor: {
    color: "#287eff",
  },
});
