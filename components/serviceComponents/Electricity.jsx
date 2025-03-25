import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Ionicons } from '@expo/vector-icons';
import { Menu, Divider, PaperProvider } from 'react-native-paper';


export default function Electricity({ onPress }) {

  // responsive
  const {height : responsiveHeight , width : responsiveWidth} = Dimensions.get("window")
  
  const [visible, setVisible] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState("Select Electricity Board");

  const electricityBoard = ["NTPC", "NPCL", "PTPC", "JIO"];

  // Function to handle menu selection
  const handleSelect = (option) => {
    setSelectedBoard(option);
    setVisible(false); // Close menu after selection
  };

  return (
    <PaperProvider>
      <View style={style.container}>
        <View style={style.electricityContainer}>
          <Text style={style.electricityRecharge}>Electricity</Text>
          <TouchableOpacity onPress={onPress} activeOpacity={0.5} style={{ marginRight: scale(4) }}>
            <Ionicons name="arrow-back" color="black" size={28} />
          </TouchableOpacity>
        </View>

        {/* Input Box & Menu Container */}
        <View style={style.inputWrapper}>
          <TouchableOpacity onPress={() => setVisible((prev) => (!prev))} style={style.inputContainer}>
            <Text style={style.dropdownText}>{selectedBoard}</Text>
            <Image source={require("../../assets/images/electricityBill.png")} style={style.electricityImage} />
          </TouchableOpacity>

          {/* Menu - Opens Just Below Input */}
          <View style={style.menuContainer}>
            <Menu
              visible={visible}
              onDismiss={() => setVisible(false)}
              anchor={<View style={style.anchorView} />} // Fixes position issue
              anchorPosition="bottom"
              contentStyle={style.menuContent} // Custom styling
            >
              {electricityBoard.map((board, index) => (
                <React.Fragment key={board}>
                  <Menu.Item onPress={() => handleSelect(board)} title={board} />
                  {index < electricityBoard.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </Menu>
          </View>
        </View>
      </View>
    </PaperProvider>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  electricityContainer: {
    width: scale(335),
    height: verticalScale(28),
    marginTop: verticalScale(23),
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: scale(18),
  },
  electricityRecharge: {
    fontSize: moderateScale(20),
    fontWeight: "700",
    lineHeight: verticalScale(28),
    fontStyle: "Urbanist",
  },
  inputWrapper: {
    alignItems: "center",
    width: "100%",
    marginTop: verticalScale(17),
  },
  inputContainer: {
    width: scale(335),
    height: verticalScale(48),
    borderRadius: moderateScale(40),
    backgroundColor: "#F7F7F7",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: scale(10),
    justifyContent: "space-between",
    borderWidth: 2,
    zIndex: 1, // Ensure it's above the menu
  },
  dropdownText: {
    marginLeft: scale(28),
    fontSize: moderateScale(14),
    fontWeight: "400",
    color: "#1D1E25",
  },
  electricityImage: {
    marginRight: scale(20),
  },
  menuContainer : {
    
  },
  anchorView: {
    width: scale(335), 
    height: 0.5, 
    
  },
  menuContent: {
    width: scale(335),
    alignSelf: "center",
    marginBottom : 300
  },
});
