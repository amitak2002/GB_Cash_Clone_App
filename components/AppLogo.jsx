import React from "react";
import { Image, View, StyleSheet } from "react-native";

const AppLogo = ({ width = 200, height = 80 }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/localKonnectLogo.png")} style={[styles.logo, { width, height }]} />
    </View>
  );
};

export default AppLogo;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,  
  },
  logo: {
    resizeMode: "contain",  
  },
});
