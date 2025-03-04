import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

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
    <View style={styles.container}>
      

      {/* Input Field */}
      <View >
        <TextInput
          style={[style.input , style]}
          placeholder={placeholder}
          placeholderTextColor="#999"
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize}
          autoCorrect={false}
          value={value}
          onChangeText={onChangeText}
        />
      </View>

      {/* Error Message */}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    width: "100%" ,

  },
  input : {
    width : '100%'
  }

  
});

export default AppInput;
