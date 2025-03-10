import { View, Text, Image, StyleSheet, Modal, TouchableOpacity, ImageBackground } from "react-native";
import { Stack } from "expo-router";
import { verticalScale, scale, moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import OptionComponent from "../../components/OptionComponent";

export default function Layout() {
  const [state, setState] = useState(false);

  const fonts = ["add", "transfer", "drawl", "scanner"];

  const fontImages = {
    add: require("../../assets/images/add.png"),
    transfer: require("../../assets/images/transfer.png"),
    drawl: require("../../assets/images/drawl.png"),
    scanner: require("../../assets/images/scanner.png"),
  };


  return (
    <View style={style.container}>
      {/* header */}
      <View style={style.header}>
        <ImageBackground style={style.headerBackGround} source={require("../../assets/images/homeBg.png")}>
          <View style={style.headerTop}>
            <View style={style.headerLeftSection}>
              <View style={style.headerLeftSecText}>
                <Text style={style.leftText1}>Welcome Back</Text>
                <Text style={style.leftText2}>Admin</Text>
              </View>
            </View>

            <View style={style.rightSection}>
              <TouchableOpacity onPress={() => setState((prev) => !prev)}>
              <Ionicons name="notifications-outline" color={"#ffffff"} size={25} />

              </TouchableOpacity>
            </View>
          </View>

          <View style={style.balanceContainer}>
            <View style={style.balanceContainerLeft}>
              <Text style={style.balanceContainerLeftText1}>Balance</Text>
              <Text style={style.balanceContainerLeftText2}>INR : 100000000 </Text>
            </View>
            <View style={style.balanceContainerRight}>
              <Image source={require("../../assets/images/coins.png")} style={style.balanceContainerRightImage} />
              <Text style={style.balanceContainerRightText}>9,500</Text>
            </View>
          </View>

          <View style={style.headerFontContainer}>
            {fonts.map((font, index) => (
              <View key={index} style={style.fontDiv}>
                <TouchableOpacity>
                <Image source={fontImages[font]} style={style.fontDivImage} />
                </TouchableOpacity>
              </View>
            ))}
          </View>;
        </ImageBackground>
      </View>

      <View style={style.optionCOntainer}>
        <OptionComponent/>
      </View>

      <View style={style.historyContainer}></View>

      <View style={style.content}>
        <Stack screenOptions={{ headerShown: false }} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent : "space-between",
    backgroundColor:"#ffffff"
  },
  header: {
    flex: 0.38,
    backgroundColor: "#242424",
    width : '100%'
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
  content: {
    flex : 0.1,
    width : '100%',
    backgroundColor:'green'
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
    alignItems: "left",
  },
  leftText1: {
    fontWeight: "400",
    fontSize: moderateScale(14),
    color: "#7F8088",
    lineHeight: verticalScale(18),
    fontStyle :  "Urbanist",
  },
  leftText2: {
    fontWeight: "700",
    fontSize: moderateScale(16),
    color: "#FFFFFF",
    lineHeight: verticalScale(20),
    fontStyle :  "Urbanist",
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
    fontStyle :  "Urbanist",
    fontWeight: "400",
    fontSize: moderateScale(14),
    lineHeight: verticalScale(22),
    color: "#7F8088",
  },
  balanceContainerLeftText2: {
    fontStyle :  "Urbanist",
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
  },
  balanceContainerRightImage: {
    width: scale(20),
    height: verticalScale(18),
    alignItems:'center',
  
  },
  balanceContainerRightText: {
    fontSize: moderateScale(14),
    fontWeight: "700",
    lineHeight: verticalScale(18),
    fontStyle :  "Urbanist",
    color: "#FFFFFF",
  },
  headerFontContainer: {
    flex: 0.3,
    flexDirection: "row",
    justifyContent: "center",
    columnGap: scale(18),
  },
  fontDiv: {
    marginTop:verticalScale(15),
    width: scale(55),
    height: verticalScale(50),
    borderRadius: scale(30),
    backgroundColor: "#F7F7F7",
    alignItems: "center",
    justifyContent: "center",
  },
  fontDivImage: {
    width: scale(24),
    height: verticalScale(24),
  },
  optionCOntainer : {
    flex : 0.3,
    width : '100%',
    marginTop : verticalScale(8)
  },
  historyContainer : {
    flex : 0.28,
    ImageBackground:'green'
  }
});
