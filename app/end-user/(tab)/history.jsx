import { View, Text,StyleSheet , Dimensions, TouchableOpacity , Modal , TouchableWithoutFeedback} from 'react-native'
import React , {useState , useEffect } from 'react'
import HeaderComponent from '../../../components/HeaderComponent/HeaderComponent'
import  LoaderScreen from "../../../components/Loader"
import { moderateScale , scale , verticalScale} from 'react-native-size-matters'
import { FontAwesome } from '@expo/vector-icons'


const {height : responsiveHeight , width : responsiveWidth} = Dimensions .get("window")

export default function history() {

  

  

  const [activePage , setActivepage] = useState("Transaction")

  const [option , setOption] = useState(false)
  const handleShowOptions = () => {
    setOption((prev) => !prev)
  }


  return (
    <View style={style.container}>
      <View style={[{width : (375/375)*responsiveWidth , height : (75/812)*responsiveHeight}]}>
        <HeaderComponent onPress={handleShowOptions}/>
      </View>

      <View style={[{width : (375/375)*responsiveWidth , height : (50/812)*responsiveHeight , ...style.transactionWalletContainer}]}>
        {
          ["Transaction" , "Wallet History"].map((item , index) => (
            <TouchableOpacity key={index} onPress={() => setActivepage(item)}>
              <View style={[{width : (150/375)*responsiveWidth , height : (50/812)*responsiveHeight , ...style.transactionLeft , 
                borderBottomWidth : (activePage === item) ? moderateScale(2) : 0,
                borderBottomColor: (activePage === item) ? "black" : ""

              }]} key={index}>
                <Text style={style.Text}>{item}</Text>
              </View>
            </TouchableOpacity>
          ))
        }
      </View>

      <View>
          {
              /** yaha pr condition lagae ki jo active page hai whi component show kare */
          }
      </View>
      
      {/**modal for option select */}
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
  transactionWalletContainer : {
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    marginTop : verticalScale(10)
  },
  transactionLeft : {
    alignItems:"center",
    justifyContent:"center"
  },
  Text : {
    fontWeight: "400",
    fontSize: moderateScale(16),
    color: "#0048A6",
    lineHeight: verticalScale(18),
    fontStyle: "Urbanist",
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