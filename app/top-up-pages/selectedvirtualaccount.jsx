import { View, Text , StyleSheet ,  TouchableOpacity , Image , Dimensions} from 'react-native'
import React , {useState , useEffect} from 'react'
import { useRouter } from 'expo-router'
import { scale , verticalScale , moderateScale } from 'react-native-size-matters'
import ATM from "../../components/BankingComponents/ATM.jsx"
import MBanking from "../../components/BankingComponents/MBanking.jsx"
import IBankig from "../../components/BankingComponents/IBankig.jsx"
import AppButton from '../../components/AppButton.jsx'





export default function Selectedvirtualaccount() {

    const [selectPage , setSelectPage] = useState("ATM")

    
    const page = (selectPage) => {
        switch (selectPage) {
            case "ATM":
                return <ATM />;
            case "M-Banking":
                return <MBanking />;
            case "I-Banking":
                return <IBankig />;
            default:
                return <Text>Select an option</Text>;
        }
    }
        
    

    const {height : responsiveHeight , width : responsiveWidth} = Dimensions.get("window")
    const router = useRouter()

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

        <View style={[{width:(76/375)*responsiveWidth,height : (36/812)*responsiveHeight , ...style.banKContainer}]}>
            <View style={[{width : (36/375)*responsiveWidth , height:(36/812)*responsiveHeight , }]}>
                <Image 
                    source={require("../../assets/images/user.png")}
                    style={[{width : (36/375)*responsiveWidth , height:(36/812)*responsiveHeight}]}
                />
            </View>

            <View style={[{width : (36/375)*responsiveWidth , height:(36/812)*responsiveHeight , ...style.bankContainerRight}]}>
                <Text style={style.rightText}>BCA</Text>
            </View>
        </View>

        <View style={[{width : (335/375)*responsiveWidth, height:(46/812)*responsiveHeight , ...style.bankDetailsContainer}]}>
            <View style={[{width:(180/375)*responsiveWidth, height:(46/812)*responsiveHeight , ...style.bankDetailsLeftContainer}]}>
                <Text style={style.bankDetailsLeftText1}>Normal Virtual Account</Text>
                <Text style={style.bankDetailsLeftText2}>11110000001100</Text>
            </View>

            <View style={[{width:(72/375)*responsiveWidth, height:(28/812)*responsiveHeight , ...style.bankDetailsRightContainer}]}>
                <TouchableOpacity>
                    <Image 
                        source={require("../../assets/images/copy.png")}
                        style={[{width:(72/375)*responsiveWidth, height:(28/812)*responsiveHeight}]}
                    />
                </TouchableOpacity>
            </View>
        </View>

        <View style={[{width:(374/375)*responsiveWidth, height:(38/812)*responsiveHeight , ...style.bacnkOptionsContainer}]}>
            {
                ["ATM" , "M-Banking" , "I-Banking"].map((item , index) => (
                    <TouchableOpacity onPress={() => setSelectPage(item)} key={index}>
                        <View style={[{width:(101/375)*responsiveWidth , ...style.bankNameChoose , borderBottomColor : (item === selectPage) ? 'black' : "#E7E8EB", borderBottomWidth : (item === selectPage) ? 2 : 0}]} key={index}>
                            <Text style={style.bankNameText} key={index}>
                                {item}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))
            }
        </View>

        <View style={[{width : (375/375)*responsiveWidth, height:(392/812)*responsiveHeight , ...style.bottomContainer}]}>
            {/**yaha component use karenge jisko show karna hai */} 
            {
                page
            }
        </View>

        <View style={[{width : (375/375)*responsiveWidth, height:(50/812)*responsiveHeight , ...style.bottonContainer }]}>
            <View style={[{width : (335/375)*responsiveWidth, height:(50/812)*responsiveHeight , marginTop : verticalScale(30) }]}>
                <TouchableOpacity>
                    <AppButton 
                        style={[{width : (335/375)*responsiveWidth , height : (50/812)*responsiveHeight , borderRadius : moderateScale(4)}]}
                        textStyle={[{color : "#ffffff"}]}
                        title={"Continue"}
                        
                    />
                </TouchableOpacity>
            </View>
        </View>

    </View>
  )
}

const style = StyleSheet.create({
    container : {
        flex : 1
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
    banKContainer : {
        marginTop : verticalScale(15),
        marginLeft : scale(20),
        marginRight : scale(279),
        flexDirection:"row",
        alignItems:"flex-start",
        justifyContent:"center",
    },
    bankContainerRight:{
        alignItems:"center",
        justifyContent:"center",
        marginLeft:scale(5)
    },
    rightText:{
        fontStyle : "Urbanist",
        fontWeight : "700",
        fontSize : moderateScale(16),
        lineHeight : verticalScale(20),
        textAlign : "center"
    },
    bankDetailsContainer : {
        marginTop : verticalScale(15),
        
        marginLeft : scale(20),
        marginRight : scale(20),
        flexDirection:"row",
        justifyContent : "space-between",
        alignItems:"center"
    },
    bankDetailsLeftContainer:{
        
    },
    bankDetailsRightContainer:{

    },
    bankDetailsLeftText1 : {
        fontStyle : "Urbanist",
        fontWeight : "400",
        fontSize : moderateScale(12),
        lineHeight : verticalScale(16),
       color : "#0048A6"
    },
    bankDetailsLeftText2 : {
        fontStyle : "Urbanist",
        fontWeight : "700",
        fontSize : moderateScale(20),
        lineHeight : verticalScale(28),
       color : "#1D1E25"
    },
    bacnkOptionsContainer : {
        marginTop : verticalScale(30),
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        borderBottomWidth:moderateScale(1),
        borderBottomColor : "#E7E8EB",
        
    },
    bankNameChoose : {
        alignItems:"center",
    },
    bankNameText : {
        fontWeight : "700",
        fontSize : moderateScale(16),
        lineHeight : verticalScale(28),
       color : "#1D1E25",
       fontStyle : "Urbanist",
    },
    bottomContainer : {
      marginTop : verticalScale(20),
        alignItems:"center",
      
    },
    bottonContainer : {
        alignItems:"center"
    }
    
})