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
  style
}) => {
  return (
    <TextInput
      mode='flat'
      style={[
        style,
        {
          backgroundColor: 'transparent', 
          color: '#ffffff',     
        }
      ]}
      placeholder={placeholder}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      autoCapitalize={autoCapitalize}
      autoCorrect={false}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor="#ffffff"   
      cursorColor="#ffffff"           
      theme={{
        colors: {
          primary: '#ffffff',          
          background: 'transparent', 
          text: '#ffffff',            
          placeholder: '#ffffff',      
          onSurface: '#ffffff',        
        }
      }}
      activeUnderlineColor="transparent" 
    />
  );
};

export default AppInput;
