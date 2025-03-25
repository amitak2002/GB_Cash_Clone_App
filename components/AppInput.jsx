import React from "react";
import { TextInput } from 'react-native-paper';

const AppInput = ({
  placeholder,
  keyboardType = "default",
  secureTextEntry = false,
  autoCapitalize = "none",
  value,
  onChangeText,
  error,
  style = {style} // Ensure style is always an object
}) => {
  const textColor = style.color || "#0048A6"; // Fallback color

  return (
    <TextInput
      mode="flat"
      style={[
        Array.isArray(style) ? style : [style], // Ensure style is always an array
        { 
          backgroundColor: "transparent", 
          color: textColor, // Ensure text color is applied
        }
      ]}
      placeholder={placeholder}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      autoCapitalize={autoCapitalize}
      autoCorrect={false}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor={textColor} // Apply correct placeholder color
      cursorColor={textColor} // Cursor color
      theme={{
        colors: {
          primary: textColor, 
          background: "transparent",
          text: textColor,
          placeholder: textColor,
          onSurface: textColor, 
        }
      }}
      activeUnderlineColor="transparent" 
      underlineColor="transparent" 
    />
  );
};

export default AppInput;
