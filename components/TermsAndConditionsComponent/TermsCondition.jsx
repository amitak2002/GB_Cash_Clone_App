import { View, Text , StyleSheet , Dimensions} from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import {scale , moderateScale, verticalScale } from 'react-native-size-matters'

const {height : responsiveHeight , width : responsiveWidth} = Dimensions.get("window")

export default function TermsCondition() {

    const termsAndconditions = [
        {
          "title": "Transaction Recording & Accuracy",
          "description": "All transactions will be automatically recorded and stored in the user's transaction history. Users must review their records for any discrepancies and report errors within a specified timeframe."
        },
        {
          "title": "Tax Compliance & Reporting",
          "description": "Users are responsible for ensuring their transactions comply with applicable tax laws. The app does not provide tax consultation, and users should report their earnings to tax authorities as required."
        },
        {
          "title": "Refund & Chargeback Policy",
          "description": "Refunds are subject to the app’s policy and will only be processed for valid transactions. Chargeback requests will be reviewed and may require additional verification before processing."
        },
        {
          "title": "Account Statement & Reconciliation",
          "description": "Users can access and download their monthly account statements. Any discrepancies must be reported within a defined period to ensure accurate reconciliation of financial records."
        },
        {
          "title": "Liability & Financial Responsibility",
          "description": "Users are solely responsible for maintaining their financial records and ensuring compliance with regulations. The app is not liable for any financial mismanagement or regulatory non-compliance."
        }
      ]
      
  return (
    <View style={[{width : (375/375)*responsiveWidth, height : (736/812)*responsiveHeight}]}>
        
        {/**flatlist used to show all terms and conditions */}
        <FlatList 
            data={termsAndconditions}
            keyExtractor={(item , index) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({item , index}) => (
                <View style={[{width : (375/375)*responsiveWidth ,...style.flatListContainer}]}>
                    <View style={[{width : (350/375)*responsiveWidth ,...style.flatListTextContainer}]}>
                        <Text style={style.text1}>{item.title}</Text>
                        <Text style={style.text2}>{"*"+item.description}</Text>
                    </View>
                </View>
            )}  
        />
    </View>
  )
}

const style = StyleSheet.create({
    flatListContainer : {
        marginTop : verticalScale(15),
        marginBottom : verticalScale(8),
        paddingTop:verticalScale(10),
        paddingBottom:verticalScale(10),
        
    },
    flatListTextContainer : {
        marginLeft : scale(15),
        marginRight : scale(15),
        padding:10
    },
    text1 : {
        fontWeight: "600",
        fontSize: moderateScale(20),
        color: "#000000",
        lineHeight: verticalScale(20),
        fontStyle: "Urbanist",
        marginBottom : verticalScale(8)
    },
    text2 : {
        fontWeight: "400",
        fontSize: moderateScale(16),
        color: "#0048A6",
        lineHeight: verticalScale(18),
        fontStyle: "Urbanist",
       
    }


})