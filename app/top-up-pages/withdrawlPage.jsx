import { View, Text , StyleSheet , Dimensions , TouchableOpacity , Image} from 'react-native'
import React , {useState , useEffect} from 'react'
import { scale , verticalScale , moderateScale} from 'react-native-size-matters'
import { useRouter } from 'expo-router'
import WithDrawlOptions from "../../components/AmountOptions/WithDrawlOptions"
import AppInput from "../../components/AppInput.jsx"
import AppButton from '../../components/AppButton.jsx'



export default function WithdrawlPage() {

    const {height : responsiveHeight , width : responsiveWidth} = Dimensions.get("window")
    const router = useRouter()

    const [paisa , setPaisa] = useState("00.00") // withDrawl Paisa
    const [selectPaisa , setSelectPaisa] = useState("00.00")

    useEffect(() => {
        setPaisa(selectPaisa)
    },[selectPaisa])

    const methods = {
        setSelectPaisaMethod : (data) => setSelectPaisa(data)
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
                    <Text style={style.sendText}>Withdrawl</Text>
                </View>
            </View>

            <View style={[{width : (184/375)*responsiveWidth , height : (55/812)*responsiveHeight , ...style.upperContainerText}]}>
                <Text style={style.UpperContainertext1}>Balance</Text>
                <Text style={style.UpperContainertext2}>INR 50.00</Text>
            </View>
        </View>
        
        {/**bottom Container */}
        <View style={[{width : (375/375)*responsiveWidth , height : (590/812)*responsiveHeight , ...style.BottomContainer}]}>
            <View style={[{width:(335/375)*responsiveWidth , height:(170/812)*responsiveHeight , ...style.bottomInnerContainer}]}>
                <View style={[{width:(250/375)*responsiveWidth,height:(25/812)*responsiveHeight , ...style.BottomContainertopUpMinimumContainer}]}>
                    <Text style={[{width:(250/375)*responsiveWidth,height:(25/812)*responsiveHeight , ...style.BottomContainertopUpMinimumContainerText}]}>
                        Top Up Minimum : <Text style={style.innerTextINR}>INR 10.00</Text>
                    </Text>
                </View >

                <View style={[{width:(335/375)*responsiveWidth , height:(135/812)*responsiveHeight , ...style.InnerContainerSecond}]}>
                   <View style={[{width:(250/375)*responsiveWidth , height:(60/812)*responsiveHeight , ...style.InputContainer}]}>
                   <AppInput 
                        style={[{width : (250/375)*responsiveWidth , height : (60/812)*responsiveHeight , ...style.input}]}
                        placeholder={'00.00'}
                        value={paisa}
                        onChangeText={setPaisa}
                        keyboardType='numeric'
                    />
                    </View> 

                    <View style={[{width:(335/375)*responsiveWidth , height:(1/812)*responsiveHeight , backgroundColor:"#E9ECF2" , marginTop : verticalScale(15.5)}]}></View>

                    <View style={[{width:(335/375)*responsiveWidth , height:(42/812)*responsiveHeight , marginTop : verticalScale(13)}]}>
                        <WithDrawlOptions methods={methods}/>
                    </View>
                </View>
            </View>

            <View style={[{width:(335/375)*responsiveWidth , height:(70/812)*responsiveHeight , ...style.BottomLastContainer}]}>
                <View style={[{width:(250/375)*responsiveWidth , height:(50/812)*responsiveHeight , ...style.BottomLastContainerLeft}]}>
                    <Image 
                        source={require("../../assets/images/BankWallet.png")}
                        style={[{width:(48/375)*responsiveWidth , height:(48/812)*responsiveHeight}]}
                    />
                    <View style={[{width:(187/375)*responsiveWidth , height:(48/812)*responsiveHeight , ...style.BottomLastContainerLeftTextCOntainer}]}>
                        <Text style={style.BottomLastContainerLeftTextCOntainerText1}>BCA</Text>
                        <Text style={style.BottomLastContainerLeftTextCOntainerText2}>*****8456</Text>
                    </View>
                </View>

                <TouchableOpacity>
                    <View style={[{width:(24/375)*responsiveWidth , height:(24/812)*responsiveHeight , ...style.BottomLastContainerRight}]}>
                        <Image 
                            style={[{width:(24/375)*responsiveWidth , height:(24/812)*responsiveHeight}]}
                            source={require("../../assets/images/dropDown.png")}
                        />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={[{width:(335/375)*responsiveWidth , height:(48/812)*responsiveHeight , ...style.ButtonCOntainer}]}>
                <TouchableOpacity>
                    <AppButton 
                        style={[{width : (335/375)*responsiveWidth , height : (48/812)*responsiveHeight , ...style.button}]}
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
        BottomContainer : {
            alignItems:"center"
        },
        bottomInnerContainer : {
            marginTop : verticalScale(32),
            alignItems : "center",
            
        },
        BottomContainertopUpMinimumContainer : {
            
        },
        BottomContainertopUpMinimumContainerText : {
            fontStyle : "Urbanist",
            fontWeight : "400",
            fontSize : moderateScale(14),
            lineHeight : verticalScale(22), 
            color : "#0048A6",
            textAlign : "center"
        },
        innerTextINR : {
            fontStyle : "Urbanist",
            fontWeight : "400",
            fontSize : moderateScale(14),
            lineHeight : verticalScale(22), 
            color : "#1D1E25",
            textAlign : "center"
        },
        InnerContainerSecond : {
            marginTop : verticalScale(14),
            alignItems:"center"
        },
        InputContainer : {
           
        },
        input : {
            fontStyle : "Urbanist",
            fontWeight : "700",
            fontSize : moderateScale(35),
            color : "Dark",
            textAlign : "center"
        },
        BottomLastContainer : {
           
            marginTop : verticalScale(25),
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center"
        },
        BottomLastContainerLeft : {
            marginLeft : scale(15),
           
            flexDirection:"row",
            justifyContent:"flex-start",
            alignItems:"center"
        },
        BottomLastContainerRight : {
            marginRight : scale(24),
        },
        BottomLastContainerLeftTextCOntainer : {
            
            marginLeft : scale(12)
        },
        BottomLastContainerLeftTextCOntainerText1 : {
            fontStyle : "Urbanist",
            fontWeight : "700",
            fontSize : moderateScale(16),
            color : "#1D1E25",
            lineHeight : verticalScale(20)
            
        },
        BottomLastContainerLeftTextCOntainerText2 : {
            fontStyle : "Urbanist",
            fontWeight : "400",
            fontSize : moderateScale(14),
            color : "#0048A6",
            lineHeight : verticalScale(22)
            
        },
        ButtonCOntainer : {
            backgroundColor:"black",
            marginTop : verticalScale(200),
            borderRadius : moderateScale(4)
        },
        button : {
            color : "#ffffff",
            borderRadius : moderateScale(4)
        }
    


})  