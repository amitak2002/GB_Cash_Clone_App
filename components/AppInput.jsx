import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

const AppInput = ({
  
  placeholder,
  keyboardType = "default",
  secureTextEntry = false,
  autoCapitalize = "none",
  value,
  onChangeText,
  error,
  style
}) => {
  return (
    
      <TextInput
        style={[style]}
        placeholder={placeholder}
        placeholderTextColor="#999"
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
      />
      
  );
};

  


export default AppInput;
