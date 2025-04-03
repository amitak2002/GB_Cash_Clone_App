import { View, Text ,StyleSheet , Dimensions , Modal , TouchableWithoutFeedback , TouchableOpacity , FlatList , Image} from 'react-native'
import React , {useState , useEffect} from 'react'
import HeaderComponent from '../../../components/HeaderComponent/HeaderComponent'
import { scale , verticalScale , moderateScale } from 'react-native-size-matters'
import { FontAwesome } from '@expo/vector-icons'
import LoaderScreen from '../../../components/Loader'



const {height : responsiveHeight , width : responsiveWidth} = Dimensions .get("window")

export default function profile() {

  const pages = [{title : "Invite Friends" , name : "user-plus"} , 
                  {title : "Profile Details" , name : "users"},
                  {title : "My Cards" , name : "cards"},
                  {title : "Verification" , name : "verification"},
                  {title : "FAQ's" , name : "FAQ"},
                  {title : "Terms & Conditions" , name : "terms-conditions"},
                  {title : "Privacy & Policy" , name : "privacy"},
                  {title : "Help" , name : "help"},
                  {title : "About Us" , name : "aboutus"},
                  {title : "LogOut" , name : "logout"}
  ]



  const [option , setOption] = useState(false)
  const handleOptionContainer = () => {
    setOption((prev) => !prev)
  }


  return (
    <View style={style.container}>
        <View style={[{width : (375/375)*responsiveWidth , height : (75/812)*responsiveHeight}]}>
            <HeaderComponent onPress={handleOptionContainer}/>
        </View>

        {/**options at profile page */}
        <View style={[{width : (375/375)*responsiveWidth , height : (670/812)*responsiveHeight , ...style.optionContainer}]}>
            <FlatList 
              data={pages}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item , index) => index.toString()}
              renderItem={({item , index}) => (
                <TouchableOpacity>
                  <View style={[{width : (375/375)*responsiveWidth , height : (70/812)*responsiveHeight , ...style.FlatListContainer}]}>
                    <View style={[{width : (48/375)*responsiveWidth , height : (48/812)*responsiveHeight , ...style.fontDivFlatList}]}>
                      <FontAwesome />
                    </View>

                    <View style={[{width : (180/375)*responsiveWidth, height: (70/812)*responsiveHeight , ...style.flatListTextCOntainer}]}>
                      <Text style={style.flatListText1}>{item.title}</Text>
                      <Text style={style.flatListText2}>{item.name}</Text>
                    </View>

                    <View style={style.nextContainer}>
                      <Image 
                        source={require("../../../assets/images/next.png")}
                        
                      />
                    </View>
                </View>
                </TouchableOpacity>
              )}
            />
        </View>

        {/**modal for option or menu bar */}
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
  optionContainer : {
    marginTop : verticalScale(8)
  },
  FlatListContainer : {
    
    marginBottom : verticalScale(4),
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
    borderBottomWidth : moderateScale(1),
    borderBottomColor : "#E5E7EB"
  },
  fontDivFlatList : {
    backgroundColor:"#F7F7F7",
    borderRadius : moderateScale(50),
    marginLeft : scale(12)
  },
  flatListTextCOntainer:{
    
    alignItems:"flex-start",
    justifyContent:"center",
    marginLeft : scale(12)
  },
  flatListText1 : {
    fontWeight: "600",
    fontSize: moderateScale(16),
    color: "#010101",
    lineHeight: verticalScale(20),
    fontStyle: "Urbanist",
  },
  flatListText2 : {
    fontWeight: "400",
    fontSize: moderateScale(14),
    color: "#7E8CA0",
    lineHeight: verticalScale(20),
    fontStyle: "Urbanist",
  },
  nextContainer : {
    marginLeft : scale(80)
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