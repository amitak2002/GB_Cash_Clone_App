import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function OptionComponent({name , size , color , style1 , style2 , onPress , title}) {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={style1}>
        <Ionicons name={name} color={color} size={size} />
            <Text style={style2}>{title}</Text>
        </View>
    </TouchableOpacity>
  )
}