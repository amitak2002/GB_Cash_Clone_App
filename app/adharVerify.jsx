import { View, Text , StyleSheet , ImageBackground} from 'react-native'
import React , {useState , useEffect} from 'react'
import LoaderScreen from '@/components/Loader'
import AppInput from '@/components/AppInput'
import AppButton from '@/components/AppButton'
import {  scale , verticalScale , moderateScale} from 'react-native-size-matters';
import {useRouter} from 'expo-router'
import axios from "axios"
import { authApiUtils } from "../utils/AuthApi.js";
import {END_POINT} from '../utils/endPoint.js'
import { Formik } from 'formik'
import { userAdharSchema } from '@/validationYUP/authValidation.js'
import Toast from 'react-native-toast-message';


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
  
  // to generate otp using adhar Number
  const handleGenerateOtp = async(adharNumberVerify) => {

    try {
      setLoader(true)
      const response = await axios.post(`${authApiUtils}${END_POINT.ADHAR_OTP_GENERATE}` , 
        {aadhaarNumber : adharNumberVerify} , 
        {headers : {
          "Content-Type" : "application/json"
        }}
      )
      setLoader(false)
      console.log('response of adharotp generate is : ',response)
      const referenceid = response?.data?.reference_id
      
      let msg = (response?.data?.message)
     
      Toast.show({
        type: 'success',
        text1: msg,
        
        visibilityTime: 2000,
        position: 'top',
      });
      
      console.log('reference id is : ',referenceid)
      router.push({
        pathname: "/verifyAdharOtp",
        params: { ref_id : referenceid}
      });
    } 
    catch (error) {
      setLoader(false)
      console.log('error comes at adhatotp generate : ',error)
      let Err = (error?.response?.data?.message)
     
      Toast.show({
        type: 'error',
        text1: Err,
        
        visibilityTime: 2000,
        position: 'top',
      });
      
    }
    
  }

  if (loader) {
    return <LoaderScreen />
  }
  return (
    <Formik
      initialValues={{adharNumber : ""}}
      validationSchema={userAdharSchema}
      onSubmit={ (values) => {
        console.log("submitted adhar number is : ",values)
        setAdharNum(values.adharNumber)
         handleGenerateOtp(values.adharNumber)
      }}
    >
      {({values , touched , errors , handleChange , handleSubmit}) => (
        <View style={style.container}>

        <ImageBackground source={require("../assets/images/backGround.png")} style={style.ImageBackground}>
  
        <View style={style.header}>
          
          </View>
    
          
          <View style={style.footer}>
            <View style={style.input}>
              <AppInput 
                placeholder={'AADHAAR VERIFICATION'}
                style={style.inputAdharNumber}
                onChangeText={handleChange("adharNumber")}
                keyboardType='number'
                value={values.adharNumber}
              />
            </View>

            {errors.adharNumber && touched.adharNumber && (
             <Text style={{color : "#FFD700" , marginTop : verticalScale(5) , textAlign :     'center', fontStyle:"Urbanist" , fontSize:moderateScale(14)}}>{errors.adharNumber}</Text>
            )}
            <AppButton 
              title = "CONTINUE"
              style={style.generateOtp}
              onPress={handleSubmit}
            />
          </View>
        </ImageBackground>
       
      </View>
      )}
    </Formik>
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
  input : {
    width : '90%',
    borderBottomWidth: moderateScale(1),   
    borderBottomColor: "#F7F7F7",  
    
  },
  inputAdharNumber : {
    width:'100%',
    paddingHorizontal : scale(2),
    fontWeight:400,
    fontSize:moderateScale(18),
    textAlign: "left",
    fontStyle:'Urbanist',
    lineheight : verticalScale(22),
    color:'#F7F7F7',
    paddingVertical : verticalScale(4)

  },
  generateOtp : {
    marginTop:verticalScale(14),
    width:'65%',
    color:'#1D1E25'
  }

})