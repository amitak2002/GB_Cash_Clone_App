import { View, Text , StyleSheet , Dimensions , TouchableOpacity , Image , } from 'react-native'
import React , {useState} from 'react'
import { useRouter } from 'expo-router'
import { scale , moderateScale , verticalScale } from 'react-native-size-matters'
import AppInput from "../../components/AppInput.jsx"
import TopUpAmountOptions from "../../components/AmountOptions/TopUpAmountOptions.jsx"
import AppButton from '../../components/AppButton.jsx'



export default function TopUpPage() {

    const {height : responsiveHeight , width : responsiveWidth} = Dimensions.get("window")
    const router = useRouter()

    const [amount , setAmount] = useState("00.00")

    const topUpMethods = {
        addAmountMathods : (data) => setAmount(data)
    }

    const handleSendPage = () => {
        // top up recharge karne ke baad send krne wale page pr navigate karenge sbse phle bank transfer k page pr navigate karenge uske kaad ssend wale pages pr
        router.push("../sendMoneyServices/banktransfer")
    }

  return (
    <View style={style.container}>

        <View style={[{width : (375/375)*responsiveWidth , height : (205/812)*responsiveHeight , ...style.upperContainer}]}>
        
            <View style={[style.sendContainer ]}>
                {/*press karne pr back ho jayenge accountadd wale page pr */}
                <TouchableOpacity onPress={() => router.back()}>
                    <Image source={require('../../assets/images/leftArrowWhite.png')}
                        style={[style.leftArrow , {width : (24/375)*responsiveWidth , height : (24/812)*responsiveHeight}]}
                    />
                </TouchableOpacity>

                <View style={[style.sendTextContainer , {width : (145/375)*responsiveWidth , height : (25/812)*responsiveHeight}]}>
                    <Text style={style.sendText}>Send</Text>
                </View>
            </View>

            <View style={[{width : (184/375)*responsiveWidth , height : (55/812)*responsiveHeight , ...style.upperContainerText}]}>
                <Text style={style.UpperContainertext1}>Balance</Text>
                <Text style={style.UpperContainertext2}>INR 895.500</Text>
            </View>
        </View>
        
        {/**bottom container */}
        <View style={[{width : (375/375)*responsiveWidth , height : (598/812)*responsiveHeight , ...style.lowerContainer}]}>
            <View style={[{width : (330/375)*responsiveWidth, height : (166/812)*responsiveHeight , ...style.lowerContainerData}]}>
                <View>
                    <Text style={style.lowerContainerText1}>Top up minimum INR {amount?.substring(3,)}</Text>
                </View>

                <View style={[{width : (180/375)*responsiveWidth, height:(60/812)*responsiveHeight , ...style.lowerContainerInput}]}>
                    <AppInput 
                        style={[{width : (180/375)*responsiveWidth , height : (60/812)*responsiveHeight , ...style.input}]}
                        placeholder={'00.00'}
                        value={amount}
                        keyboardType='numeric'
                    />
                </View>

                <View style={[{width: (330/375)*responsiveWidth, height:(1/812)*responsiveHeight , ...style.stripe}]}></View>

                <View style={[{width : (332/375)*responsiveWidth , height : (42/812)*responsiveHeight , ...style.optionContainer}]}>
                    <TopUpAmountOptions topUpMethods={topUpMethods}/>
                </View>
            </View>

            {/**button ke liye lower ke andr hi hai ye container*/}
            <TouchableOpacity style={[{width : (335/375)*responsiveWidth , height : (48/812)*responsiveHeight , marginTop : verticalScale(315),}]}>
                <View style={[{width : (335/375)*responsiveWidth , height : (48/812)*responsiveHeight , ...style.buttonContainer}]}>
                    <AppButton 
                        style={[{width : (335/375)*responsiveWidth , height : (48/812)*responsiveHeight , ...style.button}]}
                        textStyle={[{color : "#ffffff"}]}
                        title={"Continue"}
                        onPress={handleSendPage}
                    />
                </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor:"#ffffff"
    },
    upperContainer : {
        backgroundColor:"#242424"
    },
    sendContainer : {
        width : "100%",
        height : verticalScale(56),
        alignItems : "center",
        flexDirection : "row",
        justifyContent : "flex-start",
            
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
    upperContainerText : {
        marginTop : verticalScale(36),
        marginLeft : scale(20),

        marginRight : scale(171)
    },
    UpperContainertext1 : {
        fontStyle : "Urbanist",
        fontWeight : "400",
        fontSize : moderateScale(14),
        lineHeight : verticalScale(25), 
        color : "#7F8088"

    },
    UpperContainertext2 : {
        fontStyle : "Urbanist",
        fontWeight : "700",
        fontSize : moderateScale(24),
        lineHeight : verticalScale(25), 
        color : "#FFFFFF"
    },
    lowerContainer : {
        alignItems:"center",
    },
    lowerContainerData : {
        marginTop : verticalScale(32),
        alignItems:"center"
    },
    lowerContainerText1 : {
        fontStyle : "Urbanist",
        fontWeight : "400",
        fontSize : moderateScale(14),
        lineHeight : verticalScale(22), 
        color : "#0048A6"
    },
    lowerContainerInput : {
        marginTop : verticalScale(14),
        alignItems:"center",
        justifyContent:"center"
    },
    input : {
        fontStyle : "Urbanist",
        fontWeight : "700",
        fontSize : moderateScale(35),
        color : "Dark",
        textAlign : "center"
    },
    stripe : {
        backgroundColor:'#E9ECF2',
        marginTop : verticalScale(15.5)
    },
    optionContainer : {
        marginTop : verticalScale(13),
    },
    buttonContainer : {
        backgroundColor:"#242424",
        borderRadius : moderateScale(4)
    },
    button : {
        color : "#ffffff"
    }

})