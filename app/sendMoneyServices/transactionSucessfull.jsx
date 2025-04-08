import { View, StyleSheet, Dimensions, Image,Text ,TouchableOpacity } from 'react-native';
import React , {useState , useEffect} from 'react';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import {useRouter} from "expo-router"
import LoaderScreen from '../../components/Loader';

const TransactionSucessfull = () => {
    const [loader , setLoader] = useState(true)
    useEffect(() => {
        const timeOut = setTimeout(() => {
            setLoader(false)
        } , 4000)
        return () => clearTimeout(timeOut)
    } , [])

    const { height: responsiveHeight, width: responsiveWidth } = Dimensions.get("window");
    const router = useRouter()

    const handleHomePage = () => {
        router.replace("../end-user")
    }

    // if (loader) {
    //     return <LoaderScreen message={"please wait.."}/>
    // }

    return (
        <View style={style.container}>
            <View style={[{ width: (305 / 375) * responsiveWidth, height: (649 / 812) * responsiveHeight, ...style.midContainer }]}>

                {/* Success Icon (Overlapping) */}
                <View style={[{ width: (164 / 375) * responsiveWidth, height: (170 / 812) * responsiveHeight, ...style.imageContainer }]}>
                    <Image 
                        source={require("../../assets/images/successIcon.png")}
                        style={[{ width: (168 / 375) * responsiveWidth, height: (170 / 812) * responsiveHeight }]}
                    />
                </View>

                {/* Below Image Container */}
                <View style={[{ width: (305 / 375) * responsiveWidth, height: (558 / 812) * responsiveHeight, ...style.belowImage }]}>
                    <View style={[{width : (257/375)*responsiveWidth, height:(22/812)*responsiveHeight , ...style.sucessText1Container}]}>
                        <Text style={[{width : (257/375)*responsiveWidth, height:(22/812)*responsiveHeight , ...style.SucessText1}]} >Transfer Money Was Successfull</Text>
                    </View>

                    <View style={[{width : (257/375)*responsiveWidth, height:(22/812)*responsiveHeight , ...style.sucessText2Container}]}>
                        <Text style={[{width : (257/375)*responsiveWidth, height:(22/812)*responsiveHeight , ...style.SucessText2}]} >You Earned 120 Points</Text>
                    </View>

                    <View style={[{width:(241/375)*responsiveWidth, height:(95/812)*responsiveHeight, ...style.sucess3Container}]}>
                        <View style={[{width:(146/375)*responsiveWidth, height:(40/812)*responsiveHeight , ...style.sucees3insideContainer}]}>
                            
                            <View style={[{width:(146/375)*responsiveWidth, height:(40/812)*responsiveHeight , flexDirection:"row" , alignItems:"center" , justifyContent:"center"}]}>

                                <View><Text style={style.INR}>INR</Text></View>
                                <View ><Text style={style.Paise}>55.00</Text></View>
                            </View>
                        </View>
                        <View style={[{width:(205/375)*responsiveWidth, height:(20/812)*responsiveHeight , ...style.youPaidContainer}]}>
                            <Text style={style.paid}>You Paid</Text>
                        </View>
                    </View>

                    <View style={[{width:(241/375)*responsiveWidth ,  ...style.sucess4Container}]}>
                        
                        <View style={[{width : (241/375)*responsiveWidth , height:(55/812)*responsiveHeight , ...style.sucess4ContainerView1}]}>
                            <View style={[{width:(241/375)*responsiveWidth , height:(18/812)*responsiveHeight , ...style.sucess4FromContainer}]}>
                                <Text style={style.text1}>From</Text>
                                <Text style={style.text2}>XYZZ....</Text>
                            </View>

                            
                            <View style={[{width:(241/375)*responsiveWidth , height:(18/812)*responsiveHeight , ...style.sucess4FromDataContainer}]}>
                                <Text style={style.text3}>togiah</Text>
                                <Text style={style.text3}>****8456</Text>
                            </View>
                            
                        </View>

                        <View style={[{width : (241/375)*responsiveWidth , height:(55/812)*responsiveHeight , ...style.sucess4ContainerView2}]}>
                            <View style={[{width:(241/375)*responsiveWidth , height:(18/812)*responsiveHeight , ...style.sucess4FromContainer}]}>
                                <Text style={style.text1}>To</Text>
                                <Text style={style.text2}>XYZZ....</Text>
                            </View>

                                
                            <View style={[{width:(241/375)*responsiveWidth , height:(18/812)*responsiveHeight , ...style.sucess4FromDataContainer}]}>
                                <Text style={style.text3}>Credit Card</Text>
                                <Text style={style.text3}>****8456</Text>
                            </View>                            
                        </View>

                        <View style={[{width : (241/375)*responsiveWidth , height:(40/812)*responsiveHeight , ...style.sucess4ContainerView3}]}>
                            <View style={[{width:(241/375)*responsiveWidth , height:(30/812)*responsiveHeight , ...style.sucess4FromContainer}]}>
                                <Text style={style.text1}>Date</Text>
                                <View>
                                    <Text style={style.text2}>15/08/2002</Text>
                                    <Text style={style.text3}>15:30</Text>
                                </View>
                            </View>
                        </View>
                        
                    </View>

                    <View style={[{width:(150/357)*responsiveWidth , height : (20/812)*responsiveHeight  , marginTop:verticalScale(20)}]}>
                        <TouchableOpacity onPress={handleHomePage}>
                            <Text style={style.gotohome}>Go To Home Page</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",
        alignItems: "center",
        justifyContent: "center"
    },
    midContainer: {
        alignItems: "center",
        position: "relative",
        marginTop: verticalScale(56)
    },
    imageContainer: {
        position: "absolute", // Makes the success icon overlap
        top: -verticalScale(80), // Adjust this to fine-tune position
        zIndex: 10, // Ensures it stays above the belowImage container
    },
    belowImage: {
        backgroundColor: "#ffffff",
        marginBottom: verticalScale(105),
        alignItems:"center",
    },
    sucessText1Container : {
        marginTop : verticalScale(82),
        marginLeft : scale(24),
        marginRight : scale(24),
    },
    SucessText1 : {
        color : "#242B42",
        textAlign:"center",
        fontStyle:"Urbanist",
        fontWeight : "700",
        fontSize : moderateScale(16),
        
    },
    sucessText2Container : {
        marginTop : verticalScale(12),
        marginLeft : scale(24),
        marginRight : scale(24),
    },
    SucessText2 : {
        color : "#7E8CA0",
        textAlign:"center",
        fontStyle:"Urbanist",
        fontWeight : "400",
        fontSize : moderateScale(14),
    },
    sucess3Container : {
        marginTop:verticalScale(20),
        backgroundColor:"#F6F7FA",
        alignItems:"center",
        justifyContent:"center"
    },
    sucees3insideContainer : {
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    youPaidContainer : {
        marginTop:verticalScale(3)
    },
    INR : {
        color : "#000000",
        textAlign:"center",
        fontStyle:"Urbanist",
        fontWeight : "400",
        fontSize : moderateScale(16),
    },
    Paise:{
        color : "#000000",
        textAlign:"center",
        fontStyle:"Urbanist",
        fontWeight : "700",
        fontSize : moderateScale(34),
        marginLeft:scale(6)
    },
    paid : {
        color : "#7A869A",
        textAlign:"center",
        fontStyle:"Urbanist",
        fontWeight : "400",
        fontSize : moderateScale(12),
    },
    sucess4Container : {
        marginTop: verticalScale(28),
    },
    sucess4ContainerView1 : {
       borderBottomWidth:moderateScale(1),
       borderBottomColor : "#E6E9ED"
    },
    sucess4ContainerView2:{
        marginTop:verticalScale(14),
        borderBottomWidth:moderateScale(1),
       borderBottomColor : "#E6E9ED"
    },
    sucess4ContainerView3 : {
        marginTop:verticalScale(14),
    },
    sucess4FromContainer : {
        flexDirection:"row",
        justifyContent:"space-between"
    },
    sucess4FromDataContainer : {
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:verticalScale(4)
    },
    text1 : {
        color : "#242B42",
        fontStyle:"Urbanist",
        fontWeight : "600",
        fontSize : moderateScale(14),
        lineHeight:verticalScale(18)
    },
    text2:{
        color : "#242B42",
        fontStyle:"Urbanist",
        fontWeight : "400",
        fontSize : moderateScale(14),
        lineHeight:verticalScale(18)
    },
    text3 : {
        color : "#7E8CA0",
        fontStyle:"Urbanist",
        fontWeight : "400",
        fontSize : moderateScale(12),
        lineHeight:verticalScale(16)
    },
    gotohome : {
        color : "#000000",
        fontStyle:"Urbanist",
        fontWeight : "700",
        fontSize : moderateScale(14),
        lineHeight:verticalScale(18)
    }

});

export default TransactionSucessfull;
