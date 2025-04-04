import { View, Text , StyleSheet , TouchableOpacity , Image , Dimensions, FlatList} from 'react-native'
import React from 'react'
import {useRouter} from "expo-router"
import {scale , verticalScale , moderateScale} from "react-native-size-matters"
import { FontAwesome } from '@expo/vector-icons'


const {height : responsiveHeight , width : responsiveWidth } = Dimensions.get("window")



export default function aboutus() {

  const renderPages = [
    { title: "Terms & Conditions", description: "Legal Terms & conditions", path: "terms&conditions", icon: "file-text-o" },
    { title: "Privacy & Policies", description: "Legal privacy & policy", path: "privacypolicy", icon: "shield" }
  ];

  const router = useRouter()

  return (
    <View style={style.container}>
      <View style={[{width:(375/375)*responsiveWidth, height:(75/812)*responsiveHeight ,  ...style.headerContainer}]}>
        <View style={[{width:(35/375)*responsiveWidth, height:(30/812)*responsiveHeight , marginLeft : scale(12)}]}>
          <TouchableOpacity onPress={() => router.back()}> 
            <Image 
              source={require('../../assets/images/leftArrowWhite.png')}
              style={[{width:(24/375)*responsiveWidth, height:(24/812)*responsiveHeight }]}
            />
          </TouchableOpacity>
        </View>

        <View style={[{width:(180/375)*responsiveWidth, height:(42/812)*responsiveHeight , ...style.textProfileContainer}]}>
          <Text style={style.headerText}>About us</Text>
        </View>
      </View>

      <View style={[{width:(375/375)*responsiveWidth, height:(70/812)*responsiveHeight , ...style.ImageContainer}]}>
        <Image 
          source={require("../../assets/PAYPULSE.png")}
          style={[{width:(65/375)*responsiveWidth, height:(65/812)*responsiveHeight , borderRadius : moderateScale(30)}]}

        />
      </View>

      <View style={[{width:(375/375)*responsiveWidth, height:(70/812)*responsiveHeight , ...style.GBCashContainer}]}>
        <View>
            <Text style={style.textGBCAsh1}>PayPulse</Text>
            <Text style={style.textGBCAsh2}>Version 1.3.1</Text>
        </View>
      </View>

      <View style={[{width:(375/375)*responsiveWidth , ...style.bottomContainer}]}>
          <FlatList 
            data={renderPages}
            keyExtractor={(item , index) => index.toString()}
            renderItem={({item , index}) => (
              <TouchableOpacity onPress={() => router.push(`../profile-pages/${item.path}`)}>
                <View style={[{width : (350/375)*responsiveWidth , height : (75/812)*responsiveHeight , ...style.flatListContainer}]}> 
                  <View style={[{width : (250/375)*responsiveWidth , height : (55/812)*responsiveHeight , ...style.flatListLeftContainer}]}>
                    <View style={[{width:(50/375)*responsiveWidth , height:(50/812)*responsiveHeight , ...style.fontAwesomeContainer}]}>
                      <FontAwesome 
                        name={`${item.icon}`}
                        color={'blue'}
                        size={25}
                      />
                    </View>

                    <View style={[{width:(170/375)*responsiveWidth , height:(55/812)*responsiveHeight , ...style.textContainer}]}>
                      <Text style={style.textFlatList1}>{item.title}</Text>
                      <Text style={style.textFlatList2}>{item.description}</Text>
                    </View>
                  </View>

                  {/**next icon png image use */}
                  <View style={[{width : (50/375)*responsiveWidth , height : (55/812)*responsiveHeight , ...style.flatListRightContainer}]}>
                    <Image 
                      source={require("../../assets/images/next.png")}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container : {
    flex : 1
  },
  headerContainer : {
    backgroundColor:"#242424" ,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"flex-start"
  },
  headerProfile : {
    justifyContent:"center"
  },
  textProfileContainer : {
    justifyContent:"center",
    alignItems:"center",
    marginLeft : scale(8)
  },
  headerText : {
    color : "#ffffff",
    fontWeight: "700",
    fontSize: moderateScale(18),

    lineHeight: verticalScale(20),
    fontStyle: "Urbanist",
  },
  ImageContainer : {
    alignItems:"center",
    justifyContent:"center",
    marginTop : verticalScale(80)
  },
  GBCashContainer : {
    marginTop : verticalScale(20),
    alignItems:"center",
    justifyContent:"center"
  },
  textGBCAsh1 : {
    color : "#000000",
    fontWeight: "700",
    fontSize: moderateScale(24),

    lineHeight: verticalScale(24),
    fontStyle: "Urbanist",
  },
  textGBCAsh2 : {
    color : "#0048A6",
    fontWeight: "400",
    fontSize: moderateScale(16),

    lineHeight: verticalScale(18),
    fontStyle: "Urbanist",
    marginTop : verticalScale(6)
  },
  bottomContainer : {
    alignItems:"center",
    justifyContent:"center",
    marginTop : verticalScale(25)
  },
  flatListContainer:{
    marginBottom : verticalScale(8),
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    borderBottomWidth : moderateScale(2),
    borderBottomColor : "#E9ECF2",

  },
  flatListLeftContainer : {
    
    flexDirection : "row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  flatListRightContainer : {

    alignItems:"center",
    justifyContent:"center"
  },
  textContainer : {
    marginLeft : scale(8),
    alignItems:"flex-start",
    justifyContent:"center"

  },
  fontAwesomeContainer : {
    marginLeft : scale(8),
    borderRadius : moderateScale(50),
    backgroundColor:"#F7F7F7",
    alignItems:"center",
    justifyContent:"center"
  },
  textFlatList1 : {
    color : "#000000",
    fontWeight: "600",
    fontSize: moderateScale(18),

    lineHeight: verticalScale(24),
    fontStyle: "Urbanist",
  },
  textFlatList2 : {
    color : "#0048A6",
    fontWeight: "400",
    fontSize: moderateScale(14),

    lineHeight: verticalScale(20),
    fontStyle: "Urbanist",

  },
})