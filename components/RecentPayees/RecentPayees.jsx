import { View, Text , StyleSheet , Dimensions, FlatList , Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { scale , verticalScale , moderateScale } from 'react-native-size-matters'
import {contactObject} from "../../utils/contactsObject/ContactObject.js"



export default function RecentPayees() {

    const {height : responsiveHeight , width : responsiveWidth} = Dimensions.get("window")

  return (
    <View style={style.container}>
        <View style={[{width : (375/375)*responsiveWidth , height : (239/812)*responsiveHeight}]}>
            <View style={[{width : (180/375)*responsiveWidth, height : (25/812)*responsiveHeight , ...style.recentTextContainer}]}>
                <Text style={style.recentText}>Recent Payees</Text>
            </View>

            <View style={[{width : (332/375)*responsiveWidth , height : (99/812)*responsiveHeight , ...style.recentContainer}]}>
                <FlatList 
                    data={contactObject}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({index , item}) => (
                        <View key={index}>
                            <View style={[{width : (65/375)*responsiveWidth , height : (100/812)*responsiveHeight , ...style.imageContainer}]}>
                                <Image source={require("../../assets/PAYPULSE.png")}
                                    style={[{width : (60/375)*responsiveWidth , height : (60/812)*responsiveHeight , ...style.image}]}
                                />
                                <View style={[{width : (60/375)*responsiveWidth , marginTop : verticalScale(5)}]}>
                                    <Text style={style.userName}>{item.name}</Text>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </View>

            <View style={[{width : (375/375)*responsiveWidth , height : (48/812)*responsiveHeight , ...style.seeAllContainer}]}>
                <TouchableOpacity>
                    <View style={[{width : (335/375)*responsiveWidth , height : (48/812)*responsiveHeight , ...style.seeAll}]}>
                        <Text style={style.text}>
                            See All
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    container : {
        flex : 1,
       
    },
    recentTextContainer : {
        marginLeft : scale(20),
    },
    recentText : {
        fontStyle:"Urbanist",
        fontSize : moderateScale(16),
        fontWeight : "700",
        lineHeight : verticalScale(20)
    },
    recentContainer : {
        marginTop : verticalScale(24),
        marginLeft : scale(22),
        marginRight : scale(21),
    },
    imageContainer: {
        marginRight : scale(20),
        alignItems:"center"
    },

    image : {
        borderRadius : moderateScale(50)
    },
    userName : {
        fontStyle : "Urbanist",
        fontSize:moderateScale(12),
        fontWeight : "600",
        color : "#1D1E25",
        lineHeight : verticalScale(16),
        
    },
    seeAllContainer : {
        marginTop : verticalScale(24),
        justifyContent : "center",
        alignItems:"center",
    },
    seeAll : {
        backgroundColor:"#F7F7F7",
        alignItems:"center",
        justifyContent:"center"
    },
    text : {
        textAlign : "center",
        fontStyle:"Urbanist",
        fontWeight:"700",
        fontSize:moderateScale(14),
        lineHeight:verticalScale(18)
    }

})
