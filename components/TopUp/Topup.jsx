import { View, Text , StyleSheet, TouchableOpacity , Image} from 'react-native'
import React from 'react'
import { scale , moderateScale, verticalScale } from 'react-native-size-matters'

export default function Topup({onPress}) {

    const services = [
        {
            title : "Bank Transfer",
            description : "Top up balance via bank transfer"
        },
        {
            title : "Credit Card Payment",
            description : "Pay your credit card due’s"
        }
    ]

  return (
    <View style={style.container}>

        <TouchableOpacity style={style.stripe} onPress={onPress}>
            <View></View>
        </TouchableOpacity>

        <View style={style.topMethod}>
            <Text style={style.topMethodText}>Top Up Method</Text>
        </View>

        <View style={style.serviceContainer}>
            {
                services.map((service , index) => (
                    <View key={index} style={style.serviceItem}>

                        <View style={style.imageContainer}>
                            <Image source={require("../../assets/images/Bank.png")} 
                                style={style.imageBank}
                            />
                        </View>

                        <View style={style.midContainer}>
                            <Text style={style.midcontainerText1}>{service.title}</Text>
                            <Text style={style.midcontainerText2}>{service.description}</Text>
                        </View>

                        <View style={style.nextContainer}>
                            <TouchableOpacity>
                            <Image source={require("../../assets/images/next.png")}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))
            }
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#FFFFFF',
        alignItems : 'center'
    },
    stripe : {
        marginTop : verticalScale(12),
        borderRadius : moderateScale(100),
        width : scale(56),
        height : verticalScale(5),
        backgroundColor : '#E9ECF2'
    },
    topMethod : {
        paddingVertical : verticalScale(12),
        width : scale(335)

    },
    topMethodText : {
        fontSize : moderateScale(20),
        fontStyle : "Urbanist",
        fontWeight : "700",
        lineHeight : verticalScale(28),
        marginLeft : scale(4)
    
    },
    serviceContainer : {
        width : scale(335),
        height : verticalScale(80),
        paddingVertical : verticalScale(5)
    },
    serviceItem: {
        width: scale(335),
        height: verticalScale(80),
        marginVertical: verticalScale(5),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth:moderateScale(1),
        borderBottomColor : "#E9ECF2"
    },
    imageContainer : {
        width : scale(42),
        height : verticalScale(42),
        backgroundColor : "#F7F7F7",
        borderRadius : moderateScale(50),
        alignItems:'center',
        justifyContent : 'center'
    },
    imageBank : {
        width : scale(16),
        height : verticalScale(16)
    },
    midContainer : {
        width : scale(174),
        height : verticalScale(41),
        color : "#1D1E25",
        alignItems : "flex-start",
        marginRight : scale(50)
    },
    midcontainerText1 : {
        fontStyle : "Urbanist",
        fontWeight : "700",
        fontSize : moderateScale(14),
        lineHeight : verticalScale(18),
        color : "#1D1E25",
        marginBottom : verticalScale(2)
    },
    midcontainerText2 : {
        fontStyle : "Urbanist",
        fontWeight : "400",
        fontSize : moderateScale(12),
        lineHeight : verticalScale(16),
        color : "#0048A6",
        marginTop : verticalScale(2)
    },
    nextContainer : {
        width : scale(24),
        height : verticalScale(24),
        alignItems : "center",
        justifyContent : "center",
        marginRight : scale(5)
    }
})