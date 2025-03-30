import { View, Text , StyleSheet, Dimensions , FlatList, TouchableOpacity} from 'react-native'
import React , {useState} from 'react'
import { moderateScale, verticalScale , scale} from 'react-native-size-matters'


export default function TopUpAmountOptions({topUpMethods}) {

  const {width : responsiveWidth , height : responsiveHeight} = Dimensions.get("window")
  const [click , setClick] = useState(1)

  const paisa = [
    "INR 10.00" , "INR 50.00" , "INR 100.00" , "INR 150.00" , "INR 250.00" , "INR 350.00" , "INR 500.00"
  ]

  return (
    <View style={[{width : (332/375)*responsiveWidth , height : (42/812)*responsiveHeight , ...style.container}]}>
        <FlatList
          data={paisa}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item , index) => (index.toString())}
          renderItem={({item , index}) => (
            <TouchableOpacity 
              onPress={() => {
                setClick(index) ,
                topUpMethods.addAmountMathods(item),
                topUpMethods.setInputPaisaMethod(item)
              }}
            >
              <View style={[{width : (99/315)*responsiveWidth , height : (42/812)*responsiveHeight , ...style.PaisaContainer , backgroundColor : (click == index) ? `black` : `#F7F7F7`}]}>
                  <Text style={{...style.textPaisa , color : (click == index) ? `white` : `black`}}>{item}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
          
        
    </View>
  )
}

const style = StyleSheet.create({
    container : {
      flex : 1
    },
    PaisaContainer : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor:"#F7F7F8",
        marginRight : scale(12)
        
    },
    textPaisa : {
      fontStyle : "Urbanist",
      fontWeight : "700",
      fontSize : moderateScale(14),
      lineHeight : verticalScale(18),
    }
    
})