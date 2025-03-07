import { View, Text , StyleSheet , Image , Alert} from 'react-native'
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

      <View style={style.header}>
        <Text style={style.headerText}>Aadhaar Verification</Text>
      </View>

      <View style={style.imageContainer}>
        <Image 
          source={require("../assets/images/adharVerification.png")}
          style={style.image}
        />
      </View>

      <View style={style.footer}>
        <AppInput 
          placeholder={'Enter Aadhaar Number'}
          style={style.inputAdharNumber}
          onChangeText={setAdharNum}
          keyboardType='number'
          value={adharNum}
        />
        <AppButton 
          title = "Generate Otp"
          style={style.generateOtp}
          onPress={handleGenerateOtp}
        />
      </View>
     
    </View>
  )
}

const style = StyleSheet.create({
  container : {
    flex : moderateScale(1),
    alignItems : 'center',
    justifyContent : 'space-around'
  },
  header : {
    flex : moderateScale(1),
    
  },
  headerText : {
    marginTop : verticalScale(45),
    fontSize : 25,
    fontWeight : 600
  },
  imageContainer : {
    flex : moderateScale(1),
   
    width:scale(100),
    width:'100%',
    alignItems : 'center',
    
  },
  image : {
    width:scale(150),
    height:scale(100),
    marginBottom : 100
  },
  footer : {
    flex : moderateScale(1),
    width : '100%',
    alignItems : 'center',
    justifyContent:'center'
  },
  inputAdharNumber : {
    width:'80%',
    paddingHorizontal : scale(60),
    paddingVertical : verticalScale(15),
    marginBottom:verticalScale(15),
    borderBottomWidth: 1,   
    borderBottomColor: "gray",  
    fontWeight:500,
    fontSize:moderateScale(14),
    alignItems:'center',
    letterSpacing : 2

  },
  generateOtp : {
    width:'80%'
  }

})