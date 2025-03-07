import { View, Text , StyleSheet , Image , Alert} from 'react-native'
import React , {useState , useEffect} from 'react'
import LoaderScreen from '@/components/Loader'
import AppInput from '@/components/AppInput'
import AppButton from '@/components/AppButton'
import {  scale , verticalScale , moderateScale} from 'react-native-size-matters';
import {useRouter} from 'expo-router'
import axios from 'axios'
import {panVerify} from '../utils/AuthApi.js'


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
    }, 3000);
    return () => clearTimeout(timeOut)
  },[])

  console.log('pan Number is : ',panNum)

  // to generate otp using adhar Number
  const handleGenerateOtp = async() => {

    try {
      setLoader(true)
      const response = await axios.post(panVerify , 
        {PAN : panNum , name : name} , 
        {headers : {
          "Content-Type" : "application/json"
        }}
      )  
      console.log('response of pan verification is : ',response)
      let msg = (response.data.message)
      console.log("pan verified is : ",message)
      Alert.alert("Success" , msg)
      router.push({
      pathname: "/end-user"
      });
      setLoader(false)
    } 
    catch (error) {
      setLoader(false)
      let err = (error.response.data.message)
      console.log('error comes at pan verification : ',error)
      console.log("erro pan verification is : ",err)
      Alert.alert("Error" , err)
    }

    
    
  }

  if (loader) {
    return <LoaderScreen />
  }
  return (
    <View style={style.container}>

      <View style={style.header}>
        <Text style={style.headerText}>Pan Verification</Text>
      </View>

      <View style={style.imageContainer}>
        <Image 
          source={require("../assets/images/Pan.png")}
          style={style.image}
        />
      </View>

      <View style={style.footer}>
      <AppInput 
          placeholder={'Enter Name '}
          style={style.inputAdharNumber}
          onChangeText={setName}
          keyboardType='text'
          value={name}
        />
        <AppInput 
          placeholder={'Enter Pan Number'}
          style={style.inputAdharNumber}
          onChangeText={setPanNum}
          keyboardType='number'
          value={panNum}
        />
        <AppButton 
          title = "Verify"
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
    height:verticalScale(50),
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
    fontSize:moderateScale(13),
    alignItems:'center',
    letterSpacing : 1

  },
  generateOtp : {
    width:'80%'
  }

})