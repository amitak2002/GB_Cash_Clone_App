import { View, Text , StyleSheet , Image , TouchableOpacity, Dimensions } from 'react-native'
import React , { useState , useEffect }from 'react'
import { useRouter } from 'expo-router'
import { scale , verticalScale , moderateScale } from 'react-native-size-matters'
import VirtualAccountsComponent from "../../components/VirtualAccountsCompoonent/VirtualAccountsComponent.jsx"
import LoaderScreen from '../../components/Loader.jsx'


export default function VirtualAccount() {

    const [loader , setLoader] = useState(true)

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setLoader(false)
        } , 2000)
        return() => clearTimeout(timeOut)
    } , [])

    const {height : responsiveHeight , width : responsiveWidth} = Dimensions.get("window")
    const router = useRouter()

    // if (loader) {
    //     return <LoaderScreen message={"Please wait.."}/>
    // }


  return (
    <View style={style.container}>
        
        <View style={[style.sendContainer ]}>
            {/*press karne pr back ho jayenge accountadd wale page pr */}
            <TouchableOpacity onPress={() => router.back()}>
                <Image source={require('../../assets/images/leftArrow.png')}
                    style={[style.leftArrow , {width : (24/375)*responsiveWidth , height : (24/812)*responsiveHeight}]}
                />
            </TouchableOpacity>

            <View style={[style.sendTextContainer , {width : (180/375)*responsiveWidth , height : (25/812)*responsiveHeight}]}>
                <Text style={style.sendText}>Virtual Account</Text>
            </View>
        </View>

        <View style={[{width:(335/375)*responsiveWidth , height:(100/812)*responsiveHeight , ...style.VirtualImageContainer}]}>
            <Image 
                source={require("../../assets/images/virtualAccountNotice.png")}
                style={[{width:(335/375)*responsiveWidth , height:(100/812)*responsiveHeight}]}
            />
        </View>

        <View style={[{width : (335/375)*responsiveWidth , height : (27/812)*responsiveHeight , ...style.ChooseBankContainer}]}>
            <Text style={style.chooseText}>Choose Bank</Text>
        </View>

        <View style={[{width : (337/375)*responsiveWidth , height : (495/812)*responsiveHeight , ...style.virtualBankList}]}>
            <VirtualAccountsComponent onPress={() => router.push("../top-up-pages/topuppage")}/>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center"
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
    VirtualImageContainer : {
        marginTop : verticalScale(16),
        backgroundColor:"gray"
    },
    ChooseBankContainer : {
        marginTop : verticalScale(30)
    },
    chooseText : {
        fontStyle : "Urbanist",
        fontWeight : "700",
        fontSize : moderateScale(20),
        lineHeight : verticalScale(28),
    },
    virtualBankList : {
        marginTop : verticalScale(8),
    },

})