import { View, Text , Dimensions , StyleSheet} from 'react-native'
import React from 'react'
import { TextInputMask } from 'react-native-masked-text'




export default function CardnumberInput({inputContainer , textContainer , value , onChangeText}) {

    

  return (
    <View style={inputContainer}>
      <TextInputMask 
        type={'custom'}
        options={{
          mask: '9999 **** **** 9999'
        }}
        
        value={value}
        onChangeText={onChangeText}
        style={textContainer}
        placeholder="1234 **** **** 5678"
        keyboardType="numeric"
      />
    </View>
  )
}


