import { View, Text , StyleSheet , Dimensions , Image , TouchableOpacity, Pressable} from 'react-native'
import React ,{useState , useEffect} from 'react'
import { scale , verticalScale , moderateScale } from 'react-native-size-matters'
import { getData } from '../../utils/LocalStoragemethods/LocalStorage'
import {useRouter} from "expo-router"
import { FontAwesome } from '@expo/vector-icons'



const {height : responsiveHeight , width : responsiveWidth} = Dimensions.get("window")

export default function profile() {
  const router = useRouter()

  const [userData , setUserData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData("user")
      console.log("data at profile page is : ",data)
      setUserData(data)
    }
    fetchData()

  },[])
  
  return (
    <View style={style.container}>

      <View style={[{width:(375/375)*responsiveWidth, height:(75/812)*responsiveHeight ,  ...style.headerContainer}]}>
        <View style={[{width:(35/375)*responsiveWidth, height:(30/812)*responsiveHeight , marginLeft : scale(12) , alignItems:"center" , justifyContent : "center"}]}>
          <TouchableOpacity onPress={() => router.back()}> 
            <Image 
              source={require('../../assets/images/leftArrowWhite.png')}
              style={[{width:(24/375)*responsiveWidth, height:(24/812)*responsiveHeight}]}
            />
          </TouchableOpacity>
        </View>

        <View style={[{width:(80/375)*responsiveWidth, height:(42/812)*responsiveHeight , ...style.textProfileContainer}]}>
          <Text style={style.headerText}>Profile</Text>
        </View>
      </View>

      <View style={[{width : (375/375)*responsiveWidth, height:(735/812)*responsiveHeight , ...style.bottomMainContainer}]}>
        <View style={[{...style.profilePicContainer , width:(100/375)*responsiveWidth , height:(100/812)*responsiveHeight}]}>
            <Image 
              source={require("../../assets/images/PaypulseIcon.png")}
              style={[{width:(80/375)*responsiveWidth , height:(80/812)*responsiveHeight , ...style.profilePic}]}
            />
        </View>

        <View style={[{width:(375/375)*responsiveWidth, height:(50/812)*responsiveHeight , ...style.nameContainer}]}>
          <Text style={style.name}>Full Name : {userData?.care_of?.substring(6)}</Text>
        </View>

        <View style={[{width:(375/375)*responsiveWidth, height:(50/812)*responsiveHeight , ...style.nameContainer}]}>
          <Text style={style.name}>DOB : {userData?.dob}</Text>
        </View>

        <View style={[{width:(375/375)*responsiveWidth, height:(50/812)*responsiveHeight , ...style.nameContainer}]}>
          <Text style={style.name}>Email : {userData?.email || "no email"}</Text>
        </View>

        <View style={[{width:(375/375)*responsiveWidth , ...style.nameContainer}]}>
          <Text style={style.nameAddress}>Address : {userData?.address || "no email"}</Text>
        </View>

        <View style={[{width:(375/375)*responsiveWidth, height:(70/812)*responsiveHeight , ...style.updatedContainer}]}>
          <TouchableOpacity>
            <View style={[{width:(100/375)*responsiveWidth, height:(50/812)*responsiveHeight , ...style.fontContainer}]}>
              <FontAwesome name='check' size={25} color={"blue"} 
                style={style.fontAwesome}
              />
              <Text style={style.fontAwesomeText}>Update</Text>
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
  bottomMainContainer :  {
    alignItems : "center",
    marginTop : verticalScale()
  },
  profilePicContainer : {
    alignItems:"center",
    justifyContent : "center",
    marginTop : verticalScale(25),
    backgroundColor:"#0048A6",
    borderRadius : moderateScale(100),
    marginBottom : verticalScale(20)
  },
  profilePic :{
    borderRadius : moderateScale(100)
  },
  nameContainer : {
    marginTop : verticalScale(8),
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
    borderBottomWidth : moderateScale(1),
    borderBottomColor:"#E9ECF2"
    
  },
  name : {
    fontWeight: "400",
    fontSize: moderateScale(16),
    color: "#0048A6",
    lineHeight: verticalScale(18),
    fontStyle: "Urbanist",
    backgroundColor:"#F7F7F7",
    width : "100%",
    paddingTop:verticalScale(10),
    paddingBottom:verticalScale(10),
    marginLeft : scale(15),
  },
  updatedContainer : {

    flexDirection:"row",
    alignItems:"center",
    justifyContent:"flex-start",
    marginTop : verticalScale(20),
  },
  fontContainer : {
    marginTop : verticalScale(8),
    backgroundColor:"#137df7",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    marginLeft : scale(18),
    borderRadius : moderateScale(15)
  },
  fontAwesome : {

    backgroundColor:"white",
    borderRadius : moderateScale(50)
  },
  fontAwesomeText : {
    marginLeft : scale(6),
    fontWeight: "700",
    fontSize: moderateScale(16),
    color: "#020202",
    lineHeight: verticalScale(18),
    fontStyle: "Urbanist",
  },
  nameAddress:{
    fontWeight: "400",
    fontSize: moderateScale(16),
    color: "#0048A6",
    lineHeight: verticalScale(18),
    fontStyle: "Urbanist",
    backgroundColor:"#F7F7F7",
    paddingTop:verticalScale(15),
    paddingBottom:verticalScale(15),
    width : "95%",
    marginLeft : scale(15),
  }

})
