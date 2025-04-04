import { View, Text , StyleSheet , TouchableOpacity, Dimensions , Image, KeyboardAvoidingView, Platform , ScrollView} from 'react-native'
import React , {useEffect , useState} from 'react'
import LoaderScreen from '../../components/Loader.jsx'
import { scale , verticalScale , moderateScale } from 'react-native-size-matters'
import { useRouter , useLocalSearchParams} from 'expo-router'
import AppInput from '../../components/AppInput.jsx'
import RecentPayees from "../../components/RecentPayees/RecentPayees.jsx"
import AppButton from '../../components/AppButton.jsx'
import { Formik } from 'formik'

// used for validation (userSchema)
import {userNameandPhoneNumberSchema} from "../../validationYUP/authValidation.js"



export default function sendAmountPage2() {

    const [loader , setLoader] = useState(true)
    useEffect(() => {
        const timeOut = setTimeout(() => {
            setLoader(false)
        } , 2000)
        return () => clearTimeout(timeOut)
    } , [])

    const {contactName , email} = useLocalSearchParams()
   

    const {width : responsiveWidth , height : responsiveHeight } = Dimensions.get("window")
    const router = useRouter()

    const [name , setName] = useState("")
    const [number , setNumber] = useState("")

    const handleTransferPage = (values) => {
        if (!values) return; // Pehle check karo ki formData null hai ya nahi
    
        console.log("formData at handle next page: ", values);
        setName(values.userName)
        setNumber(values.phoneNumber)
       
    };
    
    useEffect(() => {
        if (name && number) { 
            console.log("Updated Name & Number:", name, number);
            setTimeout(() => {
                router.push({
                    pathname: "../sendMoneyServices/transfersDetails",
                    params: { contactName, email }
                });
            }, 500); 
        }
    } , [name , number])

    if (loader) {
        return <LoaderScreen message={"Please Wait.."}/>
    }

  return (
    
        <KeyboardAvoidingView 
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
        >
            <Formik
                initialValues={{userName : "" , phoneNumber : ""}}
                validationSchema={userNameandPhoneNumberSchema}
                onSubmit={(values) => {
                    console.log("values is : ",values)
                handleTransferPage(values)
                }}
                >
                {({values , touched , errors , handleChange , handleSubmit}) => (
                 <View style={style.container}>
                    <ScrollView 
                        contentContainerStyle={{ flexGrow: 1, paddingBottom: (60/812)*responsiveHeight }}
                         keyboardShouldPersistTaps="handled"
                    >

                    <View style={[style.sendContainer ]}>
                        {/*press karne pr back ho jayenge accountadd wale page pr */}
                        <TouchableOpacity onPress={() => router.back()}>
                            <Image source={require('../../assets/images/leftArrow.png')}
                                style={[style.leftArrow , {width : (24/375)*responsiveWidth , height : (24/812)*responsiveHeight}]}
                            />
                        </TouchableOpacity>

                        <View style={[style.sendTextContainer , {width : (145/375)*responsiveWidth , height : (25/812)*responsiveHeight}]}>
                            <Text style={style.sendText}>Send</Text>
                        </View>
                    </View>

                <View style={[{width : (375/375)*responsiveWidth , height : (600/812)*responsiveHeight , ...style.SecondContainer}]}>
                    <View style={[{width : (335/375)*responsiveWidth , height : (48/812)*responsiveHeight , ...style.InputContainer}]}>
                        <Image 
                            source={require("../../assets/images/search.png")}
                            style={[{width : (24/375)*responsiveWidth , height : (24/812)*responsiveHeight , ...style.image}]}
                        />

                        <View style={[{width : (125/375)*responsiveWidth , height : (22/812)*responsiveHeight , ...style.InputCon}] }>
                            <AppInput style={[{width : (125/375)*responsiveWidth , height : (22/812)*responsiveHeight , ...style.Input }]}
                                placeholder={"Search Contact"}
                                value={"name"}
                            />
                        </View>
                    </View>

                    <View style={[{width : (375/375)*responsiveWidth , height : (220/812)*responsiveHeight , ...style.recentPayeesContainer}]}>
                        <RecentPayees />
                    </View>

                    <View style={[{width : (375/375)*responsiveWidth , height : (2/812)*responsiveHeight , ...style.stripe}]}></View>

                    <View style={[{width : (335/375)*responsiveWidth , height : (240/812)*responsiveHeight , ...style.InputContainerMain }]}>
                        <View style={[{width : (335/375)*responsiveWidth , height : (50/812)*responsiveHeight , ...style.firstInputContainer}]}>
                            <Image 
                                source={require("../../assets/images/user.png")}
                                style={[{width : (20/375)*responsiveWidth , height : (20/812)*responsiveHeight , ...style.imageUser}]}
                            />

                            <View style={[{width : (180/375)*responsiveWidth , height : (30/812)*responsiveHeight}]}>
                                <AppInput 
                                    style={[{width : (180/375)*responsiveWidth , height : (25/812)*responsiveHeight , ...style.inputUser1}]}
                                    placeholder={"Type Your Name"}
                                    value={values.userName}
                                    onChangeText={handleChange('userName')}
                                />
                                {errors.userName && touched.userName && (
                                    <Text style={{color : '#e70e20' ,   textAlign:'center' , fontStyle:"Urbanist" , fontSize:moderateScale(14) ,marginTop : verticalScale(10) , textAlign:"left"}}>{errors.userName}</Text>
                                )}
                            </View>
                        </View>

                        <View style={[{width : (335/375)*responsiveWidth , height : (50/812)*responsiveHeight , ...style.secondInputContainer}]}>

                            <Image 
                                source={require("../../assets/images/India.png")}
                                style={[{width : (20/375)*responsiveWidth , height : (20/812)*responsiveHeight , ...style.imageUser}]}
                            />
                            <View style={[{width : (250/375)*responsiveWidth , height : (30/812)*responsiveHeight}]}>
                                <AppInput 
                                    style={[{width : (250/375)*responsiveWidth , height : (25/812)*responsiveHeight , ...style.inputUser1}]}
                                    placeholder={"Type your number"}
                                    value={values.phoneNumber}
                                    onChangeText={handleChange('phoneNumber')}
                                    keyboardType='numeric'
                                />
                                {errors.phoneNumber && touched.phoneNumber && (
                                    <Text style={{color : '#ff0000' ,  textAlign:'center' , fontStyle:"Urbanist" , fontSize:moderateScale(14) ,  marginTop : verticalScale(10) , textAlign : "left"}}>{errors.phoneNumber}</Text>
                                )}
                            </View>
                        </View>

                        <View style={[{width : (335/375)*responsiveWidth , height : (70/812)*responsiveHeight , ...style.thirdInputContainer}]}>
                            <AppInput 
                                style={[{width : "100%" , height : "50" , ...style.inputUser1}]}
                                placeholder={"Type notes"}
                            />
                        </View>
                    </View>
                </View>
                <View style={[{width : (375/375)*responsiveWidth , height : (180/812)*responsiveWidth , ... style.continueContainer}]}>
                    <View style={[style.modalButton , {width : (335/375)*responsiveWidth , height : (48/812)*responsiveHeight}]}>
                        <AppButton  
                            title={"Continue"} 
                            style={[style.modalButton]} 
                            textStyle={{fontWeight : "700" , fontStyle : "Urbanist" , fontSize : moderateScale(14) , color : "#FFFFFF"}}
                            onPress={handleSubmit}
                        />
                    </View>
                </View>
                    </ScrollView>
                    

                 </View>
                 )}
            </Formik>
        </KeyboardAvoidingView>

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
    SecondContainer : {
        marginTop : verticalScale(16),
        alignItems:"center"
    },
    InputContainer : {
        backgroundColor:"#F7F7F7",
        borderRadius : scale(40),
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start"
    },
    image : {
        marginLeft : scale(17)
    },
    InputCon : {
        marginLeft : scale(13),
    },
    Input : {
        fontStyle : "Urbanist",
        fontSize : moderateScale(14),
        fontWeight : "400",
        lineHeight : verticalScale(22),
        color : "#0048A6"
    },
    recentPayeesContainer : {
        marginTop : verticalScale(24),
    },
    stripe : {
        marginTop : verticalScale(24),
        backgroundColor:"#F7F7F7"
    },
    InputContainerMain : {
        marginTop : verticalScale(20),
        marginLeft : scale(20),
        marginRight : scale(20),
    },
    firstInputContainer : {
       flexDirection:"row",
       alignItems:"center",
       justifyContent:"flex-start",
       borderBottomColor:"#E9ECF2",
       borderBottomWidth:moderateScale(1),
       marginbottom : verticalScale(10),
      
    },
    imageUser : {
        marginLeft : scale(16)
    },
    inputUser1 : {
        fontStyle:"Urbanist",
        fontWeight:"400",
        fontSize:moderateScale(14),
        lineHeight : verticalScale(22),
        marginLeft : scale(10),
    },
    secondInputContainer : {
       
        marginTop : verticalScale(20),
        flexDirection:"row",
       alignItems:"center",
       justifyContent:"flex-start",
       borderBottomColor:"#E9ECF2",
       borderBottomWidth:moderateScale(1),
       marginbottom : verticalScale(10)
    },
    thirdInputContainer : {
        marginTop : verticalScale(5),
        alignItems:"center",
        justifyContent:"center",
        borderBottomColor:"#E9ECF2",
        borderBottomWidth:moderateScale(1)

    },
    
    continueContainer : {
        alignItems : "center",

    },
    modalButton : {
        backgroundColor : "#000000",
       width:"100%",
       height : "100%",
       fontSize:scale(14),
       fontWeight:"700",
       fontStyle:"Urbanist",
       borderRadius : moderateScale(4),

       alignItems : "center",
       justifyContent:"center"
   },
    textStyle : {
        fontStyle : "Urbanist",
        fontSize : moderateScale(14),
        fontWeight : "700",
        lineHeight : verticalScale(18)
    }
})