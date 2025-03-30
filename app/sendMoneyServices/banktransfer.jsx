import { View, Text, StyleSheet , Image , TouchableOpacity , Dimensions , Modal , TouchableWithoutFeedback} from "react-native";
import React , {useState , useEffect} from "react";
import {scale , verticalScale , moderateScale} from "react-native-size-matters"
import {useRouter} from 'expo-router'
import AppInput from "../../components/AppInput.jsx"
import { contactObject } from "../../utils/contactsObject/ContactObject.js";
import LoaderScreen from "../../components/Loader.jsx"
import AppButton from '../../components/AppButton.jsx'

import RecentContact from "../../components/contactsComponents/RecentContact.jsx";
import AllContacts from "../../components/contactsComponents/AllContacts.jsx";
import Toast from 'react-native-toast-message';



export default function Contacts() {

    const [loader , setLoader] = useState(true); 

    useEffect(() => {
        Toast.show({
            type : "success",
            text1 : "welcome",
            visibilityTime : 1000,
            position : "top"
        })
        const timeOut = setTimeout(() => {
            setLoader(false)
        } , 3000)
        return () => clearTimeout(timeOut);
    } , [])

    const [nameUsers , setNameUser] = useState("")
    const [email , setEmail] = useState("")

    // when pressed on any contact use this methods to perform function
    const methods = {
        setUserNameMethod : (data) => setNameUser(data),
        setSendMethod : (nameUsers) => (nameUsers.length == 0) ? setSend(false) : setSend(true),
        setEmailMethod : (data) => setEmail(data)
    }

    const {width : responsiveWidth , height : responsiveHeight} = Dimensions.get("window")
    const scaleFactor = responsiveWidth / 375

    const router = useRouter()
    const [send , setSend] = useState(false) //modal show or not for continue
    
    const usersData = contactObject.filter((item) => (item.name.toLowerCase()).startsWith(nameUsers.toLowerCase()))
    const filteredData = (usersData.length === 0 )? contactObject : usersData

    const handleToSendAmountPage = () => {
        // this used to push or navigate to sendAmountPage1 (chek and apply validation left work)
        router.push({pathname : "./sendAmountPage1" , params : {contactName : nameUsers , email : email}})
    }

    if (loader) {
        return <LoaderScreen />
    }

    return (
        <View style={style.container}>
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

            {/*view for search , recent and all contacts*/}
            <View style={style.secondContainer}>
                <View style={[style.second , {width : (336/375) * responsiveWidth , height : (692/812)*responsiveHeight}]}>
                    <View style={[style.inputNumberContainer ,
                         {width : (335/375)*responsiveWidth ,
                          height : (48/812)*responsiveHeight , 
                          borderRadius : 40 * scaleFactor
                    }]}>
                        <View style={[style.searchContainer , {width : (24/375)*responsiveWidth , height : (24/812)*responsiveHeight}]}>
                            <TouchableOpacity>
                                <Image source={require("../../assets/images/search.png")}
                                    style={[style.image , {width : (24/375)*responsiveWidth , height : (24/812)*responsiveHeight}]}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={[style.searchContactContainer , {width : (125/375)*responsiveWidth , height : (22/812)*responsiveHeight}] }>
                            <AppInput style={[{width : (125/375)*responsiveWidth , height : (22/812)*responsiveHeight , ... style.searchContactNumber}]}
                                placeholder={"Search Contact"}
                                value={nameUsers}
                                onChangeText={setNameUser}
                            />
                        </View>

                    </View>

                    <View style={[style.recentContainer , {width : (198/375)*responsiveWidth , height : (264/812)*responsiveHeight}]}>
                        <View style={[{width : (150/375)*responsiveWidth , height : (20/812)*responsiveHeight}]}>
                            <Text style={[style.recentText , {width : (150/375)*responsiveWidth , height : (20/812)*responsiveHeight}]}>Recent Contacts</Text> 
                        </View>

                        {/* recent contact component */}
                        <RecentContact 
                            filteredData={filteredData} 
                            methods={methods}
                        />
                    </View>

                    {/*all contacts container are here */} 
                    <View style={[style.recentContainer , {width : (375/375)*responsiveWidth , height : (290/812)*responsiveHeight , flexDirection:"row" , justifyContent : "space-between"}]}>
                        <View style={{width : (111/375)*responsiveWidth , height : (20/812)*responsiveHeight}}>
                            <View style={[{width : (111/375)*responsiveWidth , height : (20/812)*responsiveHeight}]}>
                                <Text style={[style.recentText , {width : (111/375)*responsiveWidth , height : (20/812)*responsiveHeight}]}>All Contact</Text> 
                            </View>

                            {/* All contacts components*/}
                            <AllContacts 
                                filteredData={filteredData}  
                                methods={methods}
                            />
                        </View>

                        {(send === false) ? (
                            <View style={[style.scannerAddContainer , {width : (150/375)*responsiveWidth , height : (224/812)*responsiveHeight}]}>
                            <View style={[style.scannerAdd , {width : (150/375)*responsiveWidth , height : (100/812)*responsiveHeight}]}>
                                <TouchableOpacity>
                                    <View style={{width : (60/375)*responsiveWidth , height : (80/812)*responsiveHeight }}>
                                        <Image source={require("../../assets/images/scannerPay.png")}
                                            style={{width : (60/375)*responsiveWidth , height : (100/812)*responsiveHeight}}
                                        />
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <View style={{width : (60/375)*responsiveWidth , height : (80/812)*responsiveHeight , marginLeft : scale(6)}}>
                                        <Image source={require("../../assets/images/addContact.png")}
                                            style={{width : (60/375)*responsiveWidth , height : (100/812)*responsiveHeight}}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        ) : ""}
                    </View>
                </View>

                <Modal
                    visible={send}
                    animation={'slide'}
                    transparent={true}
                    backgroundColor={'#00000060'}
                    style={{}}
                >
                    <TouchableWithoutFeedback onPress={() => setSend(false)}>
                        <View style={[style.modalContainer]}>
                            <View style={[style.modal , {width : (375/375)*responsiveWidth , height : (140/812)*responsiveHeight}]}>
                                <View style={[style.modalButton , {width : (335/375)*responsiveWidth , height : (48/812)*responsiveHeight}]}>
                                    <AppButton  
                                        title={"Continue"} 
                                        style={[style.modalButton]} 
                                        textStyle={{fontWeight : "700" , fontStyle : "Urbanist" , fontSize : moderateScale(14) , color : "#FFFFFF"}}
                                        onPress={handleToSendAmountPage}
                                    />
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>

                </Modal>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        
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
    secondContainer : {
        width : "100%",
        height : verticalScale(692),
        marginTop : verticalScale(16),
        alignItems : "center",    
    },
    second : {
        backgroundColor : "#FFFFFF"
    },
    inputNumberContainer : {
        backgroundColor : "#F7F7F7",
        flexDirection : "row" , 
        alignItems : "center",
        justifyContent : "flex-start",
        
    },
    searchContainer : {
        marginLeft : scale(17),
        
    },
    searchContactContainer : { 
        color : "black",
        marginLeft : scale(13),
        
    },
    searchContactNumber : {
        color : "#0048A6",
        fontStyle : "Urbanist",
        fontWeight : "400",
        lineHeight : verticalScale(22),
        fontSize : moderateScale(14),
        borderWidth : 0,
        marginBottom : verticalScale(13)
    },
    recentContainer : {
        marginTop : verticalScale(24)
    },
    recentText : {
        fontStyle : "Urbanist",
        fontWeight : "700",
        fontSize : moderateScale(16),
        lineHeight : verticalScale(20)
    },
    scannerAddContainer : {
        marginTop : verticalScale(18),
        justifyContent : "flex-end",
    },
    scannerAdd : {
        flexDirection:"row",
        justifyContent : "flex-start",
        alignItems : "flex-end",
        
    },
    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.1)", 
    },
    modal : {
        backgroundColor:"#FFFFFF",
        justifyContent : "center",
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
    }
});
