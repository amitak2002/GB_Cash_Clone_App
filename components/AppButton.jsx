import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

const AppButton = ({ title, onPress, style, textStyle }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button , style]}>
            <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: 48,
        borderRadius: 20,
        padding: 10,
        backgroundColor: "#1D1E25",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: moderateScale(16),
        fontWeight: "700",
    },
});

export default AppButton;
