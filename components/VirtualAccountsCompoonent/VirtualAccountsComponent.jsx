import { View, Text , StyleSheet , Dimensions, FlatList ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { virtualAccountsObject } from '../../utils/VirtualAccountObject/VirtualAccountObject'
import { moderateScale , scale , verticalScale} from 'react-native-size-matters'


export default function VirtualAccountsComponent({onPress}) {

    const {height : responsiveHeight , width : responsiveWidth} = Dimensions.get("window")

  return (
    <View style={[{width : (337/375)*responsiveWidth , height:(495/812)*responsiveHeight , ...style.container}]}>
        <FlatList 
          data={virtualAccountsObject}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}                     
          renderItem={({item}) => (
            <TouchableOpacity onPress={onPress}>
              <View style={[{width : (337/375)*responsiveWidth, height : (80/812)*responsiveHeight, ...style.FlatListMainView}]}>

                <View style={[{width:(36/375)*responsiveWidth, height:(36/812)*responsiveHeight }]}>
                  <Image 
                    source={{uri : item.logo}}
                    style={[{width:(36/375)*responsiveWidth, height:(36/812)*responsiveHeight , backgroundColor:"#D9D9D9"}]}
                  />
                </View>

                <View style={[{width:(200/375)*responsiveWidth,height:(41/812)*responsiveHeight,...style.detailsContainer}]}>
                  <Text style={style.text1}>{item.name}</Text>
                  <Text style={style.text2}>{item.service}</Text>
                </View>

                <View style={[{width:(24/375)*responsiveWidth,height:(24/812)*responsiveHeight , ...style.nextContainer}]}>
                  <Image 
                    source={require("../../assets/images/next.png")}
                    style={[{width:(6/375)*responsiveWidth,height:(12/812)*responsiveHeight}]}
                  />
                </View>
              </View>
            </TouchableOpacity>
          )}
        />

    </View>
  )
}

const style = StyleSheet.create({
    container : {
      flrx : 1
    },
    FlatListMainView : {
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"flex-start",
      borderBottomWidth:moderateScale(1),
      borderBottomColor:"#E9ECF2"
    },
    detailsContainer : {
      marginLeft : scale(22),

    },
    nextContainer : {
      marginLeft : scale(54)
    },
    text1 : {
      fontStyle : "Urbanist",
      fontWeight : "700",
      fontSize : moderateScale(14),
      lineHeight : verticalScale(18),
      color : "#1D1E25"
    },
    text2 : {
      fontStyle : "Urbanist",
      fontWeight : "400",
      fontSize : moderateScale(12),
      lineHeight : verticalScale(16),
      color : "#0048A6"
    }

})