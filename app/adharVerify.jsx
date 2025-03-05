import { View, Text , StyleSheet , Image} from 'react-native'
import React , {useState , useEffect} from 'react'
import LoaderScreen from '@/components/Loader'
import AppInput from '@/components/AppInput'
import AppButton from '@/components/AppButton'
import {  scale , verticalScale , moderateScale} from 'react-native-size-matters';
import {useRouter} from 'expo-router'




export default function AdharVerify() {

  const router = useRouter()
  const [loader , setLoader] = useState(true)
  const [adharNum , setAdharNum] = useState("")

  console.log('adharnumber is : ',adharNum)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoader(false)
    } , 2000)
    return () => clearTimeout(timeOut)
  },[])

  // to generate otp using adhar Number
  const handleGenerateOtp = async() => {

    // api call to generate

    let checkAdharNumber = adharNum.trim()
    if (checkAdharNumber.length != 12) {
      console.log("invalid adharnumber")
      return
    }

    router.push({path : '/verifyAdharOtp' , params : {checkAdharNumber}})
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
    flex : 1,
    alignItems : 'center',
    justifyContent : 'space-around'
  },
  header : {
    flex : 0.3,
    
  },
  headerText : {
    marginTop : verticalScale(45),
    fontSize : 25,
    fontWeight : 600
  },
  imageContainer : {
    flex : 0.3,
   
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
    flex : 0.3,
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
    fontSize:moderateScale(13),
    alignItems:'center',
    letterSpacing : 1

  },
  generateOtp : {
    width:'80%'
  }

})