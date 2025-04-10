import {View,Text,Image, StyleSheet, Modal, TouchableOpacity,ImageBackground , TouchableWithoutFeedback  } from "react-native";
import {  useRouter } from "expo-router";
import { verticalScale,scale,  moderateScale, moderateVerticalScale,} from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import OptionComponent from "../../../components/OptionComponent.jsx";
import HistoryComponent from "../../../components/HistoryComponent/HistoryComponent.jsx";
import Topup from "../../../components/TopUp/Topup.jsx";
import Mobile from "../../../components/serviceComponents/Mobile.jsx";
import Electricity from "../../../components/serviceComponents/Electricity.jsx";
import LoaderScreen from "../../../components/Loader.jsx";
import Toast from 'react-native-toast-message';

import { getData } from "../../../utils/LocalStoragemethods/LocalStorage.js";
import {fonts , fontImages} from "../../../utils/Fonts/Fonts.js"

export default function Index() {
    
    const [loader , setLoader] = useState(true)
    const [userData , setUserData] = useState({}) //local storagedata of user

    useEffect(() => {
        const checkAuthentication = () => {
            try {
                const localStorageData = getData("user");
    
                if (localStorageData != undefined) {
                    setUserData(localStorageData);
                    localStorageData.then((data) => {
                        console.log("local storage get data is : ",data)
                        setUserData(data)
                    })
    
                    Toast.show({
                        type: "success",
                        text1: "Welcome on home page",
                        visibilityTime: 2000,
                        position: "top"
                    });
                }
            } catch (error) {
                console.log("Error in authIndexPage:", error);
            } finally {
                setLoader(false);
            }
        };
    
        checkAuthentication();
    
    }, []);
    

    const router = useRouter();

    // card add karne ke liye same sabka header wale icon ka kerna hoga
    const [addState, setAddState] = useState(false);
    const [transfer, setTransferState] = useState(false);
    const [drawl, setDrawlState] = useState(false);
    const [scanner, setScannerState] = useState(false);

    const [state, setState] = useState("");
    console.log("state is : ", state);

    const serviceState = (state) => {
        switch (state) {
            case "phone":
                return <Mobile onPress={() => setState("")}/>;
            case "electricity":    
                return <Electricity onPress={() => setState("")} />;
            default:
                setState("");
        }
    };
     
    const handleModalState = (state) => {
        if (state === "add") {
            setAddState((prev) => !prev);
        } else if (state === "transfer") {
            setTransferState((prev) => !prev);
        } else if (state === "drawl") {
            setDrawlState((prev) => !prev);
        } else if (state === "scanner") {
            setScannerState((prev) => !prev);
        }
    };

    if (loader) {
        return <LoaderScreen/>
    }
    // use local storage to store and retrievee data

    return (
        <View style={[style.container]}>
            <View style={style.header}>
                <ImageBackground
                    style={style.headerBackGround}
                    source={require("../../../assets/images/homeBg.png")}
                >
                    <View style={style.headerTop}>
                        <View style={style.headerLeftSection}>
                            <View style={style.headerLeftSecText}>
                                <Text style={style.leftText1}>
                                    Welcome Back
                                </Text>
                                
                                <Text style={style.leftText2}>{(userData?.care_of) ? userData.care_of.substring(5) : "Admin"}</Text>
                                
                            </View>
                        </View>

                        <View style={style.rightSection}>
                            <TouchableOpacity    
                            >
                                <Ionicons
                                    name="notifications-outline"
                                    color={"#ffffff"}
                                    size={25}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={style.balanceContainer}>
                        <View style={style.balanceContainerLeft}>
                            <Text style={style.balanceContainerLeftText1}>
                                Balance
                            </Text>
                            <Text style={style.balanceContainerLeftText2}>
                                INR : 100000000{" "}
                            </Text>
                        </View>
                        <View style={style.balanceContainerRight}>
                            <Image
                                source={require("../../../assets/images/coins.png")}
                                style={style.balanceContainerRightImage}
                            />
                            <Text style={style.balanceContainerRightText}>
                                9,500
                            </Text>
                        </View>
                    </View>

                    <View style={style.headerFontContainer}>
                        {fonts.map((font, index) => (
                            <View key={index} style={style.fontDiv}>
                                <TouchableOpacity
                                    onPress={() => handleModalState(font)}
                                    key={index}
                                >
                                    <Image
                                        source={fontImages[font]}
                                        style={style.fontDivImage}
                                        key={index}
                                    />
                                </TouchableOpacity> 
                            </View>
                        ))}
                    </View>
                </ImageBackground>
            </View>

            <View style={{ flex: 0.6 }}>
                {state !== "" ? (
                    serviceState(state)
                ) : (
                    <>
                        <View style={style.optionCOntainer}>
                            <OptionComponent
                                onPress={(data) => setState(data)}
                            />
                        </View>

                        <View style={style.historyContainer}>
                            <HistoryComponent style={[{width : "100%" , height:"100%" }]}/>
                        </View>
                    </>
                )}
            </View>

            {/* make a model when click on valulet icon */}
            <Modal
            transparent={true}
            visible={addState} // ✅ react-native ke Modal me visible use hota hai
            onRequestClose={() => setAddState(false)}
            animationType="slide" // ✅ react-native ka animationType
        >
            <TouchableWithoutFeedback onPress={() => setAddState(false)}>
                <View style={{ flex: 1, backgroundColor: "#00000080" }}>
                    <View style={{ flex: 0.5 }}></View>
                    <View style={{ 
                        flex: 0.5, 
                        backgroundColor: "#fff", 
                        borderTopLeftRadius: 20, 
                        borderTopRightRadius: 20, 
                        padding: 20 
                    }}>
                        <Topup
                            setAdd={() => setAddState(false)}
                            bankTransfer={() => {
                                setAddState(false);
                                router.push("../../top-up-pages/virtualAccountlist");
                            }}
                            creditCardService={() => {
                                setAddState(false);
                                router.push("../../sendMoneyServices/creditcardtransfer");
                            }}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
            {/*model for mobile*/}
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1.5,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#ffffff",
        width: "100%",
    },
    header: {
        flex: 0.38,
        backgroundColor: "#242424",
        width: "100%",
    },
    headerBackGround: {
        width: "100%",
        height: "100%",
    },
    headerTop: {
        flex: 0.3,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    bottomSlider: {
        width: "100%",

        justifyContent: "center",
        alignItems: "center",
        height: "30%",
    },
    bottomStrip: {
        width: scale(132),
        height: verticalScale(3),
        backgroundColor: "#1D1E25",
        borderRadius: moderateVerticalScale(100),
        marginTop: verticalScale(2),
    },
    headerLeftSection: {
        marginLeft: scale(18),
        marginTop: verticalScale(19),
    },
    rightSection: {
        marginRight: scale(18),
        marginTop: verticalScale(19),
    },
    headerLeftSecText: {
        alignItems: "flex-start",
    },
    leftText1: {
        fontWeight: "400",
        fontSize: moderateScale(14),
        color: "#7F8088",
        lineHeight: verticalScale(18),
        fontStyle: "Urbanist",
    },
    leftText2: {
        fontWeight: "700",
        fontSize: moderateScale(16),
        color: "#FFFFFF",
        lineHeight: verticalScale(20),
        fontStyle: "Urbanist",
    },
    balanceContainer: {
        flex: 0.3,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: verticalScale(20),
    },
    balanceContainerLeft: {
        marginLeft: scale(18),
    },
    balanceContainerLeftText1: {
        fontStyle: "Urbanist",
        fontWeight: "400",
        fontSize: moderateScale(14),
        lineHeight: verticalScale(22),
        color: "#7F8088",
    },
    balanceContainerLeftText2: {
        fontStyle: "Urbanist",
        fontWeight: "700",
        fontSize: moderateScale(24),
        lineHeight: verticalScale(22),
        color: "#FFFFFF",
    },
    balanceContainerRight: {
        marginRight: scale(18),
        flexDirection: "row",
        alignItems: "center",
        columnGap: scale(3),
        paddingTop: verticalScale(18),
    },
    balanceContainerRightImage: {
        width: scale(20),
        height: verticalScale(18),
        alignItems: "center",
    },
    balanceContainerRightText: {
        fontSize: moderateScale(14),
        fontWeight: "700",
        lineHeight: verticalScale(18),
        fontStyle: "Urbanist",
        color: "#FFFFFF",
    },
    headerFontContainer: {
        flex: 0.3,
        flexDirection: "row",
        justifyContent: "center",
        columnGap: scale(26),
    },
    fontDiv: {
        marginTop: verticalScale(15),
        width: scale(55),
        height: verticalScale(50),
        borderRadius: moderateScale(30),
        backgroundColor: "#F7F7F7",
        alignItems: "center",
        justifyContent: "center",
    },
    fontDivImage: {
        width: scale(61),
        height: verticalScale(57),
    },
    optionCOntainer: {
        flex: 0.5,
        width: "100%",
        marginLeft: scale(13),
    },

    historyContainer: {
        flex: 0.5,
        width: "100%",
        marginLeft: scale(12),
        
    },

    content: {
        flex: 0.1,
        width: "100%",
    },
});
