import { View, Text , Dimensions , StyleSheet , FlatList , TouchableOpacity , Image} from 'react-native'
import React from 'react'
import { scale , verticalScale , moderateScale } from 'react-native-size-matters';
import Animated, { FadeInUp } from "react-native-reanimated";


export default function AllContacts({filteredData  , methods}) {

    const {height : responsiveHeight , width : responsiveWidth} = Dimensions.get("window")
    

  return (
    <View style={[style.recentContactData , {width : (198/375)*responsiveWidth , height : (224/812)*responsiveHeight } , style]}>
        <FlatList 
            data={filteredData}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()} 
            renderItem={({ item, index }) => (  
                <TouchableOpacity
                    onPress={() => {
                    methods.setUserNameMethod(item.name)
                    methods.setSendMethod(item.name)
                    methods.setEmailMethod(item.email)
                    }}
                >
                    <Animated.View 
                        entering={FadeInUp.delay(index * 100).duration(500)} 
                        style={[style.flatListViewContainer , {width : (163/375)*responsiveWidth , height : (42/812)*responsiveHeight}]}
                        >
                        <View style={{width : (42/375)*responsiveWidth , height : (42/812)*responsiveHeight , borderRadius: "100%" ,backgroundColor:"#E9ECF2"}}>
                            <Image />
                        </View>

                        <View style={[style.flatListDataContainer , {height : (42/812)*responsiveHeight , width : (198/375)*responsiveWidth}]}>
                            <Text style={style.dataText1}>{item.name}</Text>
                            <Text style={style.dataText2}>{item.email}</Text>
                        </View>
                    </Animated.View>
                </TouchableOpacity>
        )}
        />
    </View>
        
  )
}

const style = StyleSheet.create({
    recentContactData : {
        marginTop : verticalScale(16),
    },
    flatListViewContainer : {
        marginBottom : verticalScale(16),
        flexDirection : "row",
        alignItems:"center",
        justifyContent : "flex-start"
    },
    flatListDataContainer : {
        marginLeft : scale(12),
        justifyContent : "center"
    },
    dataText1 : {
        fontStyle : "Urbanist",
        fontWeight:"700",
        fontSize:moderateScale(14),
        color : "#1D1E25",
        lineHeight : verticalScale(18)
    },
    dataText2 : {
        fontStyle : "Urbanist",
        fontWeight:"400",
        fontSize:moderateScale(12),
        color : "#1D1E25",
        lineHeight : verticalScale(16)
    },
})