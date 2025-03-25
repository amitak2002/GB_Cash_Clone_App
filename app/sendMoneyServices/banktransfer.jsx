import { View, Text, StyleSheet , Image , TouchableOpacity , Dimensions, FlatList } from "react-native";
import React , {useState , useEffect} from "react";
import {scale , verticalScale , moderateScale} from "react-native-size-matters"
import {useRouter} from 'expo-router'
import AppInput from "../../components/AppInput.jsx"
import { contactObject } from "../../utils/contactsObject/ContactObject.js";
import Animated, { FadeInUp } from "react-native-reanimated";
import LoaderScreen from "../../components/Loader.jsx"



export default function Contacts() {

    const [loader , setLoader] = useState(true)
    useEffect(() => {
        const timeOut = setTimeout(() => {
            setLoader(false)
        } , 3000)
        return () => clearTimeout(timeOut)
    } , [])

    const {width : responsiveWidth , height : responsiveHeight} = Dimensions.get("window")
    const scaleFactor = responsiveWidth / 375
    const router = useRouter()
    const [nameUsers , setNameUser] = useState("")

    const usersData = contactObject.filter((item) => (item.name.toLowerCase()).startsWith(nameUsers.toLowerCase()))
    const filteredData = (usersData.length === 0 )? contactObject : usersData

    if (loader) {
        return <LoaderScreen />
    }

    return (
        <View style={style.container}>
            <View style={[style.sendContainer ]}>
                {/*press karne pr back ho jayenge accountadd wale page pr */}
                <TouchableOpacity onPress={() => router.back()}>
                    <Image source={require('../../assets/images/leftArrow.png')}
                        style={style.leftArrow}
                    />
                </TouchableOpacity>

                <View style={style.sendTextContainer}>
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
                                    style={[style.image , {width : (18/375)*responsiveWidth , height : (30/812)*responsiveHeight}]}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={[style.searchContactContainer , {width : (125/375)*responsiveWidth , height : (22/812)*responsiveHeight}] }>
                            <AppInput style={[style.searchContactNumber, {width : (125/375)*responsiveWidth , height : (22/812)*responsiveHeight}]}
                                placeholder={"Search Contact"}
                                value={nameUsers}
                                onChangeText={setNameUser}
                            />
                        </View>

                    </View>

                    <View style={[style.recentContainer , {width : (198/375)*responsiveWidth , height : (264/812)*responsiveHeight}]}>
                        <View style={[{width : (111/375)*responsiveWidth , height : (20/812)*responsiveHeight}]}>
                            <Text style={[style.recentText , {width : (111/375)*responsiveWidth , height : (20/812)*responsiveHeight}]}>Recent Contacts</Text> 
                        </View>

                        <View style={[style.recentContactData , {width : (198/375)*responsiveWidth , height : (224/812)*responsiveHeight}]}>
                            <FlatList 
                                data={filteredData}
                                showsVerticalScrollIndicator={false}
                                keyExtractor={(item, index) => index.toString()} 
                                renderItem={({ item, index }) => (  
                                    <Animated.View 
                                        entering={FadeInUp.delay(index * 100).duration(500)} 
                                        style={[style.flatListViewContainer , {width : (163/375)*responsiveWidth , height : (42/812)*responsiveHeight}]}
                                    >
                                        <View style={{width : (42/375)*responsiveWidth , height : (42/812)*responsiveHeight , borderRadius: "100%" ,backgroundColor:"#E9ECF2"}}>
                                            <Image />
                                        </View>

                                        <View style={[style.flatListDataContainer , {height : (42/812)*responsiveHeight}]}>
                                            <Text style={style.dataText1}>{item.name}</Text>
                                            <Text style={style.dataText2}>{item.email}</Text>
                                        </View>
                                    </Animated.View>
                                )}
                            />
                        </View>
                    </View>

                    {/*all contacts container are here */} 
                    <View style={[style.recentContainer , {width : (198/375)*responsiveWidth , height : (264/812)*responsiveHeight}]}>
                        <View style={[{width : (111/375)*responsiveWidth , height : (20/812)*responsiveHeight}]}>
                            <Text style={[style.recentText , {width : (111/375)*responsiveWidth , height : (20/812)*responsiveHeight}]}>All Contact</Text> 
                        </View>

                        <View style={[style.recentContactData , {width : (198/375)*responsiveWidth , height : (224/812)*responsiveHeight}]}>
                            <FlatList 
                                data={filteredData}
                                showsVerticalScrollIndicator={false}
                                keyExtractor={(item, index) => index.toString()} 
                                renderItem={({ item, index }) => (  
                                    <Animated.View 
                                        entering={FadeInUp.delay(index * 100).duration(500)} 
                                        style={[style.flatListViewContainer , {width : (163/375)*responsiveWidth , height : (42/812)*responsiveHeight}]}
                                    >
                                        <View style={{width : (42/375)*responsiveWidth , height : (42/812)*responsiveHeight , borderRadius: "100%" ,backgroundColor:"#E9ECF2"}}>
                                            <Image />
                                        </View>

                                        <View style={[style.flatListDataContainer , {height : (42/812)*responsiveHeight}]}>
                                            <Text style={style.dataText1}>{item.name}</Text>
                                            <Text style={style.dataText2}>{item.email}</Text>
                                        </View>
                                    </Animated.View>
                                )}
                            />
                        </View>
                    </View>
                </View>
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
        marginTop : verticalScale(44)
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
        marginLeft : scale(17)
    },
    searchContactContainer : { 
        color : "black",
        marginLeft : scale(13)
    },
    searchContactNumber : {
        color : "#0048A6",
        fontStyle : "Urbanist",
        fontWeight : "400",
        lineHeight : verticalScale(22),
        fontSize : moderateScale(14),
        borderWidth : 0
    },
    recentContainer : {
        marginTop : verticalScale(24),
    },
    recentText : {
        fontStyle:"Urbanist",
        fontWeight : "700",
        fontSize : moderateScale(16),
        lineHeight : verticalScale(20),
        color : "#1D1E25"
    },
    recentContactData : {
        marginTop : verticalScale(16),
    },
    flatListViewContainer : {
        marginBottom : verticalScale(16),
        flexDirection : "row",
        alignItems:"center",
        justifyContent : "flex-start"
    },
    flatListDataContainer : {
        marginLeft : scale(12),
        justifyContent : "center"
    },
    dataText1 : {
        fontStyle : "Urbanist",
        fontWeight:"700",
        fontSize:moderateScale(14),
        color : "#1D1E25",
        lineHeight : verticalScale(18)
    },
    dataText2 : {
        fontStyle : "Urbanist",
        fontWeight:"400",
        fontSize:moderateScale(12),
        color : "#1D1E25",
        lineHeight : verticalScale(16)
    }
});
