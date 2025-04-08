import { View, Text , StyleSheet , Dimensions , Image , TouchableOpacity} from 'react-native'
import React , {useState , useEffect} from 'react'
import LoaderScreen from '../../components/Loader.jsx'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { scale , verticalScale , moderateScale } from 'react-native-size-matters'


export default function transfersDetails() {

    const [loader , setLoader] = useState(true)

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setLoader(false)
        } , 2000)
        return () => clearTimeout(timeOut)
    },[])
    const router = useRouter()
    const {height : responsiveHeight , width : responsiveWidth} = Dimensions.get("window")

    const {contactName , email} = useLocalSearchParams()
    console.log("name and email is : ",contactName , email)

    const handleTransactionSucessFull = () => {
        router.push("../sendMoneyServices/transactionSucessfull")
    }

    // if (loader) {
    //     return <LoaderScreen message={"please wait"}/>
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
                <Text style={style.sendText}>Transfer Details</Text>
            </View>
        </View>

        {/**details container start */}
        <View style={[{width : (375/375)*responsiveWidth , height : (286/812)*responsiveHeight , ...style.detailsContainer}]}>
            <View style={[{width : (335/375)*responsiveWidth , height : (286/812)*responsiveHeight }]}>

                <View style={[{width : (335/375)*responsiveWidth , height: (95/812)*responsiveHeight , ...style.detailsContainer1}]}>
                    <View style={[{width : (200/375)*responsiveWidth , height : (45/812)*responsiveHeight , ...style.detailsContaineroneData}]}>
                        <View style={[{width : (45/375)*responsiveWidth , height : (42/812)*responsiveHeight , borderRadius : scale(100) }]}>
                            <Image 
                                source={require("../../assets/images/user.png")}
                                style={[{width : (45/375)*responsiveWidth , height : (42/812)*responsiveHeight , borderRadius : scale(100)}]}
                            />
                        </View>

                        <View style={[{width : (145/375)*responsiveWidth , height : (45/812)*responsiveHeight , ...style.detailsOne}]}>
                            <Text style={style.details1Text1}>{contactName}</Text>
                            <Text style={style.details1Text2}>{email}</Text>
                        </View>
                    </View>
                </View>

                <View style={[{width : (335/375)*responsiveWidth , height : (97/812)*responsiveHeight , ...style.detailsContainer2}]}>
                    <View style={[{width : (282/375)*responsiveWidth , height : (24/812)*responsiveHeight , ...style.details2Div}]}>
                        <View style={[{ height : (22/812)*responsiveHeight}]}>
                            <Text style={style.details2Text1}>You sent</Text>
                        </View>
                        <View style={[{ height : (22/812)*responsiveHeight}]}>
                            <Text style={style.details2Text2}>
                                INR 50.00
                            </Text>
                        </View>
                    </View>

                    <View style={[{width : (282/375)*responsiveWidth , height : (24/812)*responsiveHeight , ...style.details2Div}]}>
                        <View style={[{  height : (22/812)*responsiveHeight}]}>
                            <Text style={style.details2Text1}>Fee</Text>
                        </View>
                        <View style={[{height : (22/812)*responsiveHeight}]}>
                            <Text style={style.details2Text2}>
                                INR 50.00
                            </Text>
                        </View>
                    </View>

                    <View style={[{width : (282/375)*responsiveWidth , height : (1/812)*responsiveHeight , backgroundColor:"#E9ECF2" , marginTop : verticalScale(16)}]}></View>
                </View>

                <View style={[{width : (335/375)*responsiveWidth , height : (90/812)*responsiveHeight ,  ...style.details3container}]}>
                    <View style={[{width : (282/375)*responsiveWidth , height : (55/812)*responsiveHeight , ...style.details3Text}]}>
                        <View >
                            <Text style={style.details3Text1}>You Paid</Text>
                        </View>
                        <View >
                            <Text style={style.details3Text2}>
                                INR 50.00
                            </Text>
                        </View>
                    </View>
                </View>

            </View>
        </View>


        {/**button container start */}
        <View style={[{width : (375/375)*responsiveWidth , height:(92/812)*responsiveHeight , ...style.bottomButtonContainer}]}>
            <TouchableOpacity onPress={handleTransactionSucessFull}>
                <View style={[{width : (335/375)*responsiveWidth , height : (45/812)*responsiveHeight , ...style.buttonContainer}]}>
                    <Text style={style.textButton}>Send now</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#ffffff"
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
        detailsContainer : {
            marginTop : verticalScale(16),
            alignItems:"center",
            justifyContent : "center"

        },
        bottomButtonContainer : {
            marginTop : verticalScale(280),
            alignItems:"center",
            justifyContent:"center"
        },
        buttonContainer : {
            backgroundColor:"black",
            borderRadius : scale(4),
            alignItems:"center",
            justifyContent : "center"
        },
        textButton : {
            fontWeight:"700",
            fontSize:moderateScale(14),
            fontStyle:"Urbanist",
            color : "#FFFFFF",
            lineHeight : verticalScale(18)
        },
        detailsContainer1 : {
            
            alignItems:"flex-start",
            justifyContent:"center",
           borderBottomColor:"#E9ECF2",
           borderBottomWidth:moderateScale(1)
        },
        detailsContaineroneData : {
            
            marginLeft : scale(24),
            flexDirection:"row",
            alignItems:"flex-start",
            justifyContent:"flex-start"
        },
        detailsOne : {
           
            marginLeft : scale(16)
        },
        details1Text1 : {
            fontStyle : "Urbanist",
            fontSize:moderateScale(14),
            fontWeight:"700",
            color : "#1D1E25",
            lineHeight : verticalScale(18)
        },
        details1Text2 : {
            fontStyle : "Urbanist",
            fontSize:moderateScale(12),
            fontWeight:"400",
            color : "#7E8CA0",
            lineHeight : verticalScale(16)
        },
        detailsContainer2 : {
            alignItems:"center"
        },
        details2Div: {
           marginTop: verticalScale(16),
           flexDirection:"row",
           justifyContent:"space-between"
        },
        details2Text1 : {
            fontStyle:"Urbanist",
            fontSize:moderateScale(14),
            fontWeight:"400",
            color : "#000000"
        },
        details2Text2 : {
            fontStyle:"Urbanist",
            fontSize:moderateScale(14),
            fontWeight:"700",
            color : "#000000"
        },
        details3container : {
            marginTop : verticalScale(25),
            alignItems:"center",
            justifyContent:"center"
        },
        details3Text : {
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between"
        },
        details3Text1 : {
            fontStyle:"Urbanist",
            fontSize:moderateScale(14),
            fontWeight:"400",
            color : "#000000"
        },
        details3Text2 : {
            fontStyle:"Urbanist",
            fontSize:moderateScale(36),
            fontWeight:"700",
            color : "#000000"
        }
        
})