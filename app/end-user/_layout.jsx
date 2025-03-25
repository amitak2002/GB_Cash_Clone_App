import {View,Text,Image, StyleSheet, Modal, TouchableOpacity,ImageBackground } from "react-native";
import { Stack, useRouter } from "expo-router";
import { verticalScale,scale,  moderateScale, moderateVerticalScale,} from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import OptionContainer from "../../components/OptionComponent.jsx";
import HistoryContainer from "../../components/HistoryComponent.jsx";
import Topup from "../../components/TopUp/Topup.jsx";
import Mobile from "../../components/serviceComponents/Mobile.jsx";
import Electricity from "../../components/serviceComponents/Electricity.jsx";
import LoaderScreen from "../../components/Loader.jsx";

export default function Layout() {

    const [loader , setLoader] = useState(true)
    useEffect(() => {
        const timeOut = setTimeout(() => {
            setLoader(false)
        },3000)
        return () => clearInterval(timeOut)
    },[])

    console.log("enter at home page")
    
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

    const fonts = ["add", "transfer", "drawl", "scanner"];

    const fontImages = {
        add: require("../../assets/images/add.png"),
        transfer: require("../../assets/images/transfer.png"),
        drawl: require("../../assets/images/drawl.png"),
        scanner: require("../../assets/images/scanner.png"),
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
                    source={require("../../assets/images/homeBg.png")}
                >
                    <View style={style.headerTop}>
                        <View style={style.headerLeftSection}>
                            <View style={style.headerLeftSecText}>
                                <Text style={style.leftText1}>
                                    Welcome Back
                                </Text>
                                <Text style={style.leftText2}>Admin</Text>
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
                                source={require("../../assets/images/coins.png")}
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
                            <OptionContainer
                                onPress={(data) => setState(data)}
                            />
                        </View>

                        <View style={style.historyContainer}>
                            <HistoryContainer />
                        </View>
                    </>
                )}
            </View>

            <View style={style.content}>
            <Stack screenOptions={{ headerShown: false }} />
                <View style={style.bottomSlider}>
                    <TouchableOpacity
                        onPress={() => setAddState((prev) => !prev)}
                    >
                        <View style={style.bottomStrip}></View>
                    </TouchableOpacity>
                </View>

            </View>

            {/* make a model when click on valulet icon */}
            <Modal transparent={true} visible={addState} animationType="slide">
                <View style={{ flex: 1, backgroundColor: "#00000080" }}>
                    <View style={{ flex: 0.5 }}></View>
                    <View style={{ flex: 0.5 }}>
                        {/*ye top up bank add ke liye hi hai baki me condition lga ke krenge addWala hai*/}
                        <Topup
                            setAdd={() => setAddState((prev) => !prev)}
                            bankTransfer={() => {
                                setAddState((prev) => !prev);

                                // {/*agar account add hoga jbhi navigate karega wrna add aoount wale page pr navigate karega*/}
                                router.push("../sendMoneyServices/banktransfer")
                            }}
                            creditCardService = {() => {
                                setAddState((prev) => !prev)
                                router.push("../sendMoneyServices/creditcardtransfer")
                            }}
                        />
                    </View>
                </View>
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
        width: scale(24),
        height: verticalScale(24),
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
