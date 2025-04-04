import { View, Text ,StyleSheet , Dimensions , Modal , TouchableWithoutFeedback , TouchableOpacity  ,Image} from 'react-native'
import React , {useState } from 'react'
import {useRouter} from "expo-router"
import { scale , verticalScale , moderateScale } from 'react-native-size-matters'
import { FontAwesome } from '@expo/vector-icons'


const {height : responsiveHeight , width : responsiveWidth} = Dimensions .get("window")

export default function Card() {

    const router = useRouter()

  const [option , setOption] = useState(false)
  const handleOptionContainer = () => {
    setOption((prev) => !prev)
  }
    
  
  
  return (
    <View style={style.container}>
        <View style={[{width : (375/375)*responsiveWidth , height : (75/812)*responsiveHeight , ...style.headerContainer}]}>
            <TouchableOpacity onPress={() => router.back()}>
                <Image 
                    source={require('../../assets/images/leftArrowWhite.png')}
                    style={[{width:(24/375)*responsiveWidth, height:(24/812)*responsiveHeight , ...style.imageLeft}]}
                />
            </TouchableOpacity>
            <Text style={style.cardText}>Cards</Text>
        </View>

        <View style={[{width : (375/375)*responsiveWidth , height:(50/812)*responsiveHeight , ...style.textContainer}]}>
          <Text style={style.yourcardText}>Your Cards</Text>
        </View>

        <View style={[{width : (375/375)*responsiveWidth , height : (605/812)*responsiveHeight , ...style.CardShowContainer}]}>

          {/**agar added hai to dusra view show karenge nhi to dusra wala show karenge useState lga ke boolen value stored lga ke */}
          <View style={[{width:(375/375)*responsiveWidth , height : (450/812)*responsiveHeight , ...style.cardShow1}]}>
              <Text style={style.cardShow1Text}>No Card Added Currently</Text>
          </View>

          <View style={[{width:(375/375)*responsiveWidth , height : (140/812)*responsiveHeight , ...style.cardShow2}]}>
            <View style={[{width : (58/375)*responsiveWidth, height:(58/812)*responsiveHeight , ...style.imageContainer}]}>
              <TouchableOpacity>
                <Image 
                  source={require('../../assets/images/AddVaulet.png')}
                  style={[{width : (58/375)*responsiveWidth, height:(58/812)*responsiveHeight , ...style.image}]}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/**modal */}
        <Modal
          visible={option}
          transparent={true}
          animationType='fade'
          
        >
          <TouchableWithoutFeedback onPress={() => setOption(false)}>
            <View style={style.modalView}>
                <View style={style.modalViewFontContainer}>
                  <View>
                    <TouchableOpacity style={style.fontContainer}>
                      <FontAwesome name="user-plus" color="blue" size={20} /> 
                      <Text style={style.modalText}>Invite</Text>
                    </TouchableOpacity>
                  </View>  
              
                  <View>
                    <TouchableOpacity style={style.fontContainer}>
                      <FontAwesome name="question-circle" color="blue" size={20} /> 
                      <Text style={style.modalText}>Help</Text> 
                    </TouchableOpacity>
                  </View>

                  <View>
                    <TouchableOpacity style={style.fontContainer}>
                      <FontAwesome name="info-circle" color="blue" size={20} /> 
                      <Text style={style.modalText}>About</Text> 
                    </TouchableOpacity>
                  </View>

                  <View>
                    <TouchableOpacity style={style.fontContainer}>
                      <FontAwesome name="sign-out" color="red" size={20} />  
                      <Text style={style.modalText}>LogOut</Text>
                    </TouchableOpacity>
                  </View>
                </View>
            </View>
          </TouchableWithoutFeedback>
      </Modal>
    </View>
  )
}

const style = StyleSheet.create({
  container : {
    flex:1,
    alignItems : 'center',
    
  },
  headerContainer : {
    backgroundColor:"#020101",
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center"
  },
  imageLeft : {
    marginLeft : scale(10)
  },
  cardText : {
    fontWeight: "700",
    fontSize: moderateScale(24),
    color: "#ffffff",
    lineHeight: verticalScale(22),
    fontStyle: "Urbanist",
    marginLeft : scale(16)
  },

  textContainer : {
     justifyContent:"center",
    alignItems:"flex-start",
    marginTop : verticalScale(8)
    
  },
  yourcardText:{
    fontWeight: "700",
    fontSize: moderateScale(20),
    color: "#010101",
    lineHeight: verticalScale(22),
    fontStyle: "Urbanist",
    marginLeft : scale(8)
  },
  CardShowContainer : {
    flexDirection:"column",
    justifyContent:"space-between"

  },
  cardShow1 : {
    alignItems : "center",
    justifyContent:"center"
    
  },
  cardShow1Text : {
    fontWeight: "700",
    fontSize: moderateScale(24),
    color: "#0048A6",
    lineHeight: verticalScale(22),
    fontStyle: "Urbanist",
    
  },
  cardShow2 : {
     
     marginTop : verticalScale(5),
      alignItems:"flex-end",
      justifyContent:"flex-end",
      marginBottom :verticalScale(4)
    
  },
  imageContainer:{
    marginRight : scale(15),
    marginBottom : verticalScale(10)
  },





  modalView : {
    flex : 1,
    backgroundColor:"#5250506e",
    alignItems:"flex-end"
  },
  modalViewFontContainer : {
    backgroundColor:"#F7F7F7",
    width : "35%",
    marginTop:verticalScale(50),
    marginRight : scale(25),
    alignItems:"flex-start",
    borderRadius : moderateScale(5),
    
    
  },
  fontContainer : {
      flexDirection:"row",
      justifyContent:"flex-start",
      alignItems:"center",
      columnGap:scale(15),
      marginLeft : scale(8),
      paddingTop:verticalScale(8),
      paddingBottom:verticalScale(8),
    },
    modalText : {
      fontWeight: "400",
      fontSize: moderateScale(16),
      color: "#010101",
      lineHeight: verticalScale(18),
      fontStyle: "Urbanist",
    }
})