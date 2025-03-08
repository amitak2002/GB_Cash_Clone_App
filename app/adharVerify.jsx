import { View, Text , StyleSheet , Image , Alert, ImageBackground} from 'react-native'
import React , {useState , useEffect} from 'react'
import LoaderScreen from '@/components/Loader'
import AppInput from '@/components/AppInput'
import AppButton from '@/components/AppButton'
import {  scale , verticalScale , moderateScale} from 'react-native-size-matters';
import {useRouter} from 'expo-router'
import axios from "axios"
import {adharOtpGenerate} from "../utils/AuthApi.js"



export default function AdharVerify() {

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoader(false)
    } , 2000)
    return () => clearTimeout(timeOut)
  },[])

  const router = useRouter()
  const [loader , setLoader] = useState(true)
  const [adharNum , setAdharNum] = useState("")
  console.log('adharnumber is : ',adharNum)

  // to generate otp using adhar Number
  const handleGenerateOtp = async() => {

    try {
      setLoader(true)
      const response = await axios.post(adharOtpGenerate , 
        {aadhaarNumber : adharNum} , 
        {headers : {
          "Content-Type" : "application/json"
        }}
      )
      setLoader(false)
      console.log('response of adharotp generate is : ',response)
      const referenceid = response?.data?.reference_id
      
      let msg = (response?.data?.message)
      Alert.alert("Sucess" , msg)
      console.log('reference id is1 : ',referenceid)
      router.push({
        pathname: "/verifyAdharOtp",
        params: { ref_id : referenceid}
      });
    } 
    catch (error) {
      setLoader(false)
      console.log('error comes at adhatotp generate : ',error)
      let Err = (error?.response?.data?.message)
      Alert.alert("Error" , Err)
      
    }
    
  }

  if (loader) {
    return <LoaderScreen />
  }
  return (
    <View style={style.container}>

      <ImageBackground source={require("../assets/images/backGround.svg")} style={style.ImageBackground}>

      <View style={style.header}>
        
        </View>
  
        
        <View style={style.footer}>
          <AppInput 
            placeholder={'ADHAR VERIFICATION'}
            style={style.inputAdharNumber}
            onChangeText={setAdharNum}
            keyboardType='number'
            value={adharNum}
          />
          <AppButton 
            title = "CONTINUE"
            style={style.generateOtp}
            onPress={handleGenerateOtp}
          />
        </View>

      </ImageBackground>
     
    </View>
  )
}

const style = StyleSheet.create({
  container : {
    flex : moderateScale(1),
    alignItems : 'center',
    justifyContent : 'space-around'
  },
  ImageBackground: {
    width:'100%',
    height : '100%',
  },
  header : {
    flex : moderateScale(1),
    
  },
  headerText : {
    marginTop : verticalScale(45),
    fontSize : 25,
    fontWeight : 600
  },

  footer : {
    flex : moderateScale(1),
    width : '100%',
    alignItems : 'center',
    justifyContent:'center'
  },
  inputAdharNumber : {
    width:'80%',
    paddingHorizontal : scale(2),
    paddingVertical : verticalScale(15),
    marginBottom:verticalScale(15),
    borderBottomWidth: moderateScale(1),   
    borderBottomColor: "#F7F7F7",  
    fontWeight:400,
    fontSize:moderateScale(18),
    textAlign: "left",
    fontStyle:'Urbanist',
    lineheight : verticalScale(22),
    color:'#F7F7F7'

  },
  generateOtp : {
    marginTop:verticalScale(14),
    width:'65%',
    color:'#1D1E25'
  }

})