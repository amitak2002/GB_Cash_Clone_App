import AppButton from '@/components/AppButton'
import AppInput from '@/components/AppInput'
import React , {useEffect , useState} from 'react'
import { View ,  Text , StyleSheet } from 'react-native'
import { useLocalSearchParams , useRouter } from 'expo-router'
import { moderateScale , verticalScale } from 'react-native-size-matters'
import LoaderScreen from '@/components/Loader'

function VerifyPanOtp() {

  const {panNum} = useLocalSearchParams()
  console.log('pan num is : ',panNum)
  const router = useRouter()

  const [loader , setLoader] = useState(true)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoader(false)
    }, 3000);
    return () => clearTimeout(timeOut)
  },[])

  // to check or verify otp for adhar
  const handlePanOtpVerify = () => {

        router.push('/end-user')  
    }

    if (loader) {
        return <LoaderScreen />
    }

  return (
    <View style={style.container}>

      <View style={style.header}><Text>Header</Text></View>

      <View style={style.footer}>

        <AppInput 
        style={style.input}
          placeholder={"enter Otp"}
        />

        <AppButton
        style={style.button}
          title={"Verify Pan"}
          onPress={handlePanOtpVerify}
        />
      </View>

    </View>
  )
}

export default VerifyPanOtp

const style = StyleSheet.create({
    container : {
      flex : moderateScale(1)
    },
    header : {
      flex : moderateScale(0.7),
      
    },
    footer : {
      flex : moderateScale(0.3),
      
      alignItems:"center",
      justifyContent:'center'
    },
    input : {
      borderBottomWidth:0.8,
      width : '80%',
      paddingVertical : verticalScale(15),
      marginBottom:verticalScale(8),
      textAlign : 'center',
      letterSpacing : 2,
      borderBottomColor:'#afa7a7',
      fontWeight:700,
      fontSize:15,
      borderTopColor:'white',
      borderBlockEndColor:'white'
    },
    button : {
      width:'80%',
      marginTop:verticalScale(5),
      marginBottom:verticalScale(8)
    }
})