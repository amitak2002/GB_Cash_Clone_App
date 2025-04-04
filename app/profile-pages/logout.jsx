import { View, Text ,  StyleSheet , Dimensions , TouchableOpacity , Image ,  } from 'react-native'
import React from 'react'
import { scale, verticalScale , moderateScale } from 'react-native-size-matters'
import { useRouter } from 'expo-router'

const {height : responsiveHeight , width : responsiveWidth } = Dimensions.get("window")

export default function logout() {

  const router = useRouter()

  return (
    
    <View style={style.container}>

      <View style={[{width:(375/375)*responsiveWidth, height:(75/812)*responsiveHeight ,  ...style.headerContainer}]}>
        <View style={[{width:(35/375)*responsiveWidth, height:(30/812)*responsiveHeight , marginLeft : scale(12) , alignItems:"center" , justifyContent : "center"}]}>
          <TouchableOpacity onPress={() => router.back()}> 
            <Image 
              source={require('../../assets/images/leftArrowWhite.png')}
              style={[{width:(24/375)*responsiveWidth, height:(24/812)*responsiveHeight }]}
            />
          </TouchableOpacity>
        </View>

        <View style={[{width:(180/375)*responsiveWidth, height:(30/812)*responsiveHeight , ...style.textProfileContainer}]}>
          <Text style={style.headerText}>LogOut</Text>
          </View>
        </View>
      
      <View style={[{...style.bottomInnerContainer , width : (375/375)*responsiveWidth , height : (730/812)*responsiveHeight}]}>
        <View style={[{width : (180/375)*responsiveWidth , height : (200/812)*responsiveHeight , ...style.logOutContainer}]}>
          <Text style={style.logoutText}>
            Are you sure ?
          </Text>

          <View style={[{width : (180/375)*responsiveWidth , height:(50/812)*responsiveHeight , ...style.buttonContainer}]}>
            <TouchableOpacity onPress={() => router.push("../end-user")}>
              <View style={[{width : (75/375)*responsiveWidth , height : (40/812)*responsiveHeight , ...style.button1}]}>
                <Text style={style.buttonText}>LogOut</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => router.back()}>
              <View style={[{width : (75/375)*responsiveWidth , height : (40/812)*responsiveHeight , ...style.button2}]}>
                <Text style={style.buttonText}> Cancel</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => router.back()}>
            <View style={[{width : (170/375)*responsiveWidth , height:(45/812)*responsiveHeight , ...style.backContainer}]}>
              <Text style={style.backTExt}>Back</Text>
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
  headerContainer : {
    backgroundColor : "#020000",
    flexDirection : "row",
    justifyContent : "flex-start",
    alignItems : "center"
  },
  textProfileContainer : {
    marginLeft : scale(18)
  },
  headerText : {
    color : "#ffffff",
    fontWeight: "700",
    fontSize: moderateScale(18),

    lineHeight: verticalScale(20),
    fontStyle: "Urbanist",
  },
  bottomInnerContainer : {
      justifyContent : "center",
      alignItems : "center"
  },
  logOutContainer : {
    backgroundColor: "#F7F7F7",
    marginBottom: verticalScale(20),
    borderRadius: moderateScale(20),
    shadowColor: "#00000070",
    shadowOffset: {
      width: moderateScale(1),
      height: moderateScale(1), 
    },
    shadowOpacity: 0.5,
    shadowRadius: moderateScale(5),
    elevation: moderateScale(4), 
    alignItems : "center",
    justifyContent : "flex-start"
  },
  logoutText : {
    color : "#c40f0f",
    fontWeight: "700",
    fontSize: moderateScale(20),

    lineHeight: verticalScale(20),
    fontStyle: "Urbanist",
    marginTop : verticalScale(20)
  },
  buttonContainer : {

    marginTop : verticalScale(15),
    flexDirection : "row",
    alignItems : "center",
    justifyContent:"space-around"
  },
  button1 : {
    backgroundColor : "#f52929",
    alignItems : "center",
    justifyContent : "center",
    borderRadius : moderateScale(8)
  },
  button2 : {
    backgroundColor : "#1467e4",
    alignItems : "center",
    justifyContent : "center",
    borderRadius : moderateScale(8)
  },
  buttonText : {
    color : "#ffffff",
    fontWeight: "700",
    fontSize: moderateScale(14),

    lineHeight: verticalScale(18),
    fontStyle: "Urbanist",
  },
  backContainer :{
    backgroundColor:"#327ff3",
    marginTop : verticalScale(15),
    borderRadius : moderateScale(8),
    shadowColor:"#00000060",
    shadowOffset : {
      height : moderateScale(2),
      width : moderateScale(2)
    },
    shadowOpacity : moderateScale(0.5),
    elevation : moderateScale(4),
    alignItems:"center",
    justifyContent : "center"
  },
  backTExt : {
    color : "#f8f8f8",
    fontWeight: "700",
    fontSize: moderateScale(20),

    lineHeight: verticalScale(20),
    fontStyle: "Urbanist",
  }

})

