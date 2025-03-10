import { View, Text , StyleSheet , Image , Alert} from 'react-native'
import React , {useState , useEffect} from 'react'
import LoaderScreen from '@/components/Loader'
import AppInput from '@/components/AppInput'
import AppButton from '@/components/AppButton'
import {  scale , verticalScale , moderateScale} from 'react-native-size-matters';
import {useRouter} from 'expo-router'
import axios from 'axios'
import {panVerify} from '../utils/AuthApi.js'
import { ImageBackground } from 'react-native-web'


export default function PanVerify() {

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoader(false)
    } , 2000)
    return () => clearTimeout(timeOut)
  },[])

  const router = useRouter()
  const [loader , setLoader] = useState(true)
  const [panNum , setPanNum] = useState("")
  const [name , setName] = useState("")
  
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoader(false)
    }, 3000)
    return () => clearTimeout(timeOut)
  },[])

  

  // to generate otp using adhar Number
  const handleAdharVerify = async() => {

    router.push("adharVerify")
  }

  if (loader) {
    return <LoaderScreen />
  }
  return (
    <View style={style.container}>

      <ImageBackground source={require("../assets/images/backGround.png")}
        style={style.ImageBackground}
      >
      <View style={style.header}>
       </View>

      <View style={style.footer}>
    
        <AppInput 
          placeholder={'PAN VERIFICATION'}
          style={style.inputAdharNumber}
          onChangeText={setPanNum}
          keyboardType='number'
          value={panNum}
        />
        <AppButton 
          title = "CONTINUE"
          style={style.generateOtp}
          onPress={handleAdharVerify}
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