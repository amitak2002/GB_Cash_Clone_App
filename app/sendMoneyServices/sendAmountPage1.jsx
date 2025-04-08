import { View, Text, Dimensions , StyleSheet , TouchableOpacity , Image } from 'react-native'
import React , {useEffect, useState} from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { scale , verticalScale , moderateScale } from 'react-native-size-matters'
import AppInput from '../../components/AppInput.jsx'
import AmountOptions from '../../components/AmountOptions/AmountOptions.jsx'
import AppButton from "../../components/AppButton.jsx"
import LoaderScreen from '../../components/Loader.jsx'


export default function sendAmountPage1() {

    const [loader , setLoader] = useState(true)

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setLoader(false)
        } , 2000)
        return () => clearTimeout(timeOut)
    } , [])

    const router = useRouter()
    
    const {contactName , email} = useLocalSearchParams()
    console.log("name and email is : ",contactName , email)
    
    const {height : responsiveHeight , width : responsiveWidth} = Dimensions.get("window")
    const responsiveScale = responsiveWidth / 375
    const [selectAmount , setSelectAmount] = useState("00.00")

    const methods = {
        setAmountMethod : (amount) => setSelectAmount(amount), // amount set karne k liye amountOptions components s
    }   

    const handleSendAmountPage2 = () => {
        if (selectAmount != '00.00') {
            router.push({pathname : "../sendMoneyServices/sendAmountPage2" , params : {contactName : contactName  , email : email}})
        }
    }

    // if (loader) {
    //     return <LoaderScreen />
    // }

  return (
    <View style={style.container}>
        <View style={[style.sendContainer , {width : (375/375)*responsiveWidth , height : (56/812)*responsiveHeight}]}>
            {/*press karne pr back ho jayenge accountadd wale page pr */}
            <TouchableOpacity onPress={() => router.back()}>
                <Image source={require('../../assets/images/leftArrow.png')}
                    style={[style.leftArrow , {width : (24/375)*responsiveWidth , height : (24/812)*responsiveHeight}]}
                />
            </TouchableOpacity>

            <View style={[style.sendTextContainer , {width : (145/375)*responsiveWidth , height : (25/812)*responsiveHeight}]}>
                <Text style={[style.sendText]}>Send</Text>
            </View>
        </View>

        <View style={[style.userDetailsContainer , {width : (335/375)*responsiveWidth , height : (80/812)*responsiveHeight}]}>
            <View style={[style.userDetailsView , {width : (198/375)*responsiveWidth , height : (44/812)*responsiveHeight}]}>
                <Image 
                    style={[style.userDetailsImage , {width : (42/375)*responsiveWidth , height : (42/812)*responsiveHeight}]}
                />
                <View style={[style.userDetails , {width : (140/375)*responsiveWidth , height : (42/812)*responsiveHeight}]}>
                    <Text style={[style.userDetailsText1]}>{contactName}</Text>
                    <Text style={[style.userDetailsText2]}>{email}</Text>
                </View>
            </View>
        </View>

        <View style={[style.amountContainer , {width : (340/375)*responsiveWidth , height : (180/812)*responsiveHeight}]}>
            <AppInput 
                style={[{width : (250/375)*responsiveWidth , height : (45/812)*responsiveHeight , ...style.amountInput }]}
                value={selectAmount}
                onChangeText={setSelectAmount} 
                keyboardType='numeric'
            />

            <View style={[{width : (330/375)*responsiveWidth , height : (1/812)*responsiveHeight , ...style.stripe}]}></View>

            <View style={[{width : (332/375)*responsiveWidth , height : (42/812)*responsiveHeight , ...style.payOption}]}>
                <AmountOptions methods={methods}/> {/** ek component hai jo hme amount ke options show karega */}
            </View>
        </View>

        <View style={[{width : "100%" , height : (48/812)*responsiveWidth , ... style.continueContainer}]}>
            <View style={[style.modalButton , {width : (335/375)*responsiveWidth , height : (48/812)*responsiveHeight}]}>
                <AppButton  
                    title={"Continue"} 
                    style={[style.modalButton]} 
                    textStyle={{fontWeight : "700" , fontStyle : "Urbanist" , fontSize : moderateScale(14) , color : "#FFFFFF"}}
                    onPress={handleSendAmountPage2}
                />
            </View>
        </View>

    </View>
  )
}

const style = StyleSheet.create({
    container : {
        flex : 1,
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
    },
    sendTextContainer : {
        width : scale(145),
        height : verticalScale(25),
        marginLeft : scale(70),
    
        alignItems : "center",
        flexDirection : "row",
        justifyContent : "center"
    },
    sendText : {
        fontStyle : "Urbanist",
        fontWeight : "700",
        fontSize : moderateScale(20),
        lineHeight : verticalScale(28),
    },
    userDetailsContainer : {
        marginLeft : scale(20),
        marginRight : scale(20),
        marginTop : verticalScale(23),
        justifyContent:"center",
        backgroundColor:"#FFFFFF"
    },
    userDetailsView : {
        marginLeft : scale(18),
        marginRight : scale(119),
        flexDirection:"row",
        justifyContent :"flex-start"
    },
    userDetailsImage : {
        borderRadius : moderateScale(50),
        backgroundColor:"#E9ECF2"
    } , 
    userDetails : {
        marginLeft : scale(16)
    },
    userDetailsText1 : {
        fontStyle : "Urbanist",
        fontWeight : "700",
        fontSize : moderateScale(14),
        lineHeight : verticalScale(18),
        color : "#242B42"
    },
    userDetailsText2 : {
        width : "100%",
        fontStyle : "Urbanist",
        fontWeight : "400",
        fontSize : moderateScale(12),
        lineHeight : verticalScale(16),
        color : "#7E8CA0"
    },
    amountContainer : {
        marginLeft : scale(21),
        marginRight : scale(22),
        marginTop : verticalScale(25)
    },
    amountInput : {
        backgroundColor:"red",
        color : "#111827",
        fontSize : moderateScale(40),
        fontWeight : "700",
        fontStyle : "Urbanist",
        marginLeft : scale(50),
        marginRight : scale(114),
        
    },
    stripe : {
        backgroundColor : "#E5E7EB",
        marginTop : verticalScale(15.5)
    },
    payOption : {
        marginTop : verticalScale(13),
    },
    continueContainer : {
        justifyContent : "cetner",
        alignItems : "center"
    },
    modalButton : {
        backgroundColor : "#000000",
       width:"100%",
       height : "100%",
       fontSize:scale(14),
       fontWeight:"700",
       fontStyle:"Urbanist",
       borderRadius : moderateScale(4)
   },
    textStyle : {
        fontStyle : "Urbanist",
        fontSize : moderateScale(14),
        fontWeight : "700",
        lineHeight : verticalScale(18)
    }

})