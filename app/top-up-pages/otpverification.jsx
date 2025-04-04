import { View, Text , StyleSheet , Dimensions , Image , TouchableOpacity} from 'react-native'
import React , {useState} from 'react'
import { scale , verticalScale , moderateScale } from 'react-native-size-matters'
import OTPInput from "@codsod/react-native-otp-input";
import AppButton from '../../components/AppButton';
import { useRouter } from 'expo-router';



export default function Otpverification() {

    const router = useRouter()

    const {height : responsiveHeight , width : responsiveWidth} = Dimensions.get("window")
    const [otp, setOTP] = useState("");
    console.log("otp is : ",otp)

    const handleWithSucessPage = () => {
        router.push("../top-up-pages/withdrawlsucess")
    }

  return (
    <View style={style.container}>
        {/*header*/}
        <View style={[{width : (375/375)*responsiveWidth , height : (110/812)*responsiveHeight , ...style.upperContainer}]}>
            <View style={[style.sendContainer ]}>
                {/*press karne pr back ho jayenge accountadd wale page pr */}
                <TouchableOpacity onPress={() => router.back()}>
                    <Image source={require('../../assets/images/leftArrowWhite.png')}
                        style={[style.leftArrow , {width : (24/375)*responsiveWidth , height : (24/812)*responsiveHeight}]}
                    />
                </TouchableOpacity>

                <View style={[style.sendTextContainer , {width : (145/375)*responsiveWidth , height : (25/812)*responsiveHeight}]}>
                    <Text style={style.sendText}>Withdrawl</Text>
                </View>
            </View>

        </View>

        {/**verification part otp verification */}
        <View style={[{width : (375/375)*responsiveWidth , height : (702/812)*responsiveHeight , ...style.verificationContainer}]}>
            <View style={[{width : (375/375)*responsiveWidth , height:(26/812)*responsiveHeight , ...style.VertifcationTextContainer}]}>
                <Text style={style.verificationText}>
                    Verification
                </Text>
            </View>

            <View style={[{width : (321/375)*responsiveWidth , height:(50/812)*responsiveHeight , ...style.enterCodeContiner}]}>
                <Text style={style.textCode}>
                    Enter the 4-digits code to process your withdraw
                </Text>
            </View> 

            {/*enter otp container* */}
            <View style={[{width : (270/375)*responsiveWidth, height:(55/812)*responsiveHeight , ...style.otpContainer}]}>   
                <OTPInput
                    length={4}
                    onOtpComplete={(txt) => setOTP(txt)}
                    inputStyle={[{width : (52/375)*responsiveWidth , height:(52/812)*responsiveHeight ,...style.otpInput}]}
                    
                />
            </View>

            <View style={[{width:(180/375)*responsiveWidth, height:(50/812)*responsiveHeight , ...style.resendOtpContainer}]}>
                <Text style={style.otpresendtext1}>Didn't received the code ?</Text>
                <TouchableOpacity>
                    <Text style={style.otpresendtext2}>Resend Otp</Text>
                </TouchableOpacity>
            </View>

            <View style={[{width:(335/375)*responsiveWidth, height:(48/812)*responsiveHeight , marginTop : verticalScale(32)}]}>
                <AppButton 
                    style={[{width:(335/375)*responsiveWidth, height:(48/812)*responsiveHeight , ...style.button}]}
                    textStyle={[{color : "#ffffff"}]}
                    title={"Verify Withdraw"}
                    onPress={handleWithSucessPage}
                />
            </View>
        </View>
      
    </View>
  )
}


const style = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor:"#242424"
    },
    upperContainer : {
        justifyContent:"center",
        alignItems:"center"
    },
    sendContainer : {
        width : "100%",
        height : verticalScale(56),
        alignItems : "center",
        flexDirection : "row",
        justifyContent : "flex-start",
        backgroundColor : "#242424",
            
    },
    leftArrow : {
        width : scale(24),
        height : verticalScale(24),
        marginLeft : scale(20),
        color : "white"
    },
    sendTextContainer : {
        marginLeft : scale(70),
        alignItems : "center",
        flexDirection : "row",
        justifyContent : "center",
        
    },
    sendText : {
        fontStyle : "Urbanist",
        fontWeight : "700",
        fontSize : moderateScale(20),
        lineHeight : verticalScale(28),
        color : "#ffffff"
    },
    verificationContainer : {
        backgroundColor:"#ffffff",
        alignItems:"center"
    },
    VertifcationTextContainer : {
        marginTop : verticalScale(40)
    },
    verificationText : {
        fontStyle : "Urbanist",
        fontWeight : "700",
        fontSize : moderateScale(24),
        lineHeight : verticalScale(28),
        color : "#1D1E25",
        marginLeft : scale(20)
    },
    enterCodeContiner : {
        marginTop : verticalScale(12),
       
    },
    textCode : {
        fontStyle : "Urbanist",
        fontWeight : "400",
        fontSize : moderateScale(16),
        lineHeight : verticalScale(24),
        color : "#0048A6",
       
    },
    otpContainer : {
        marginTop : verticalScale(36),

    },
    otpInput : {
        borderColor : "#E9ECF2",
        borderRadius : moderateScale(4),
        // gap:scale(16),
        fontStyle : "Urbanist",
        fontWeight : "700",
        fontSize : moderateScale(24),
        lineHeight : verticalScale(24),
        color : "#1D1E25",
    },
    resendOtpContainer : {

        alignItems:"center",
        marginTop : verticalScale(24),

    },
    otpresendtext1 : {
        fontStyle : "Urbanist",
        fontWeight : "400",
        fontSize : moderateScale(14),
        lineHeight : verticalScale(22),
        color : "#9CA3AF",
    },
    otpresendtext2 : {
        fontStyle : "Urbanist",
        fontWeight : "700",
        fontSize : moderateScale(14),
        lineHeight : verticalScale(18),
        color : "#1D1E25",
        marginTop : verticalScale(4)
    },
    button : {
        color : "#ffffff",
        borderRadius : moderateScale(4)
    }

})