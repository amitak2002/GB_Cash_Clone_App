import { View, Text, Image, StyleSheet , TouchableOpacity } from "react-native"; // ✅ Ensure Image is imported correctly
import React from "react";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";

export default function OptionComponent({onPress}) {
  const fonts = ["phone", "internet", "educationFee", "water", "electricity", "insurance", "houseRent", "more"];

  // ✅ Create a mapping for images
  const fontImages = {
    internet: require("../assets/images/internet.png"),
    more: require("../assets/images/more.png"),
    houseRent: require("../assets/images/houseRent.png"),
    insurance: require("../assets/images/insurance.png"),
    electricity: require("../assets/images/electricity.png"),
    water: require("../assets/images/water.png"),
    educationFee: require("../assets/images/educationFee.png"),
    phone: require("../assets/images/phone.png"),
  };

  return (
    <View style={style.container}>
      <View style={style.Content}>
        {fonts.map((font, index) => (
          <View key={index} style={style.Div}>
            <TouchableOpacity onPress={() => onPress(font)}>
            <Image source={fontImages[font]} style={style.DivImage} />
            </TouchableOpacity >
            <Text style={style.text}>{font.charAt(0).toUpperCase() + font.substring(1)}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width : '100%',
    height:'100%',
    marginTop:verticalScale(10),
    paddingTop : verticalScale(5),
    backgroundColor:"#ffffff"
  },
  Content: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    columnGap:scale(8),
    rowGap:verticalScale(5),
    
  },
  Div: {
    width : "20%",
    height: verticalScale(80),
    alignItems: "center",
    margin: scale(5),
   
  },
  DivImage: {
    width: scale(56),
    height: verticalScale(52),
    backgroundColor:"#F7F7F7",
    borderRadius : moderateScale(50)
  },
  text: {
    marginTop:verticalScale(7),
    fontStyle: "Urbanist",
    fontWeight: "400",
    fontSize: moderateScale(12),
    lineHeight: verticalScale(16),
    textAlign: "center",
  },
});
