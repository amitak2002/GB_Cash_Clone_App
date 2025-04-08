import { View, Text , Dimensions, FlatList, StyleSheet} from 'react-native'
import React from 'react'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const {height : responsiveHeight , width : responsiveWidth} = Dimensions.get("window")



export default function PrivacyPolicy() {

  const privacyPolicy = [
    {
      "title": "Data Collection & Usage",
      "description": "Our app collects personal information such as the user's name, phone number, email, government-issued ID (if required), and payment details to ensure secure transactions and comply with regulatory standards. The information is used strictly for authentication, payment processing, fraud prevention, and customer support. We do not collect unnecessary data or access a user’s device beyond what is required for the service. The data may also be used to enhance user experience, personalize services, and improve app functionality. Users have the right to know what data is collected and can request details regarding its usage."
    },
    {
      "title": "User Consent",
      "description": "By using our payment app, users provide explicit consent to the collection, processing, and storage of their data. This consent allows the app to function smoothly and comply with legal and security regulations. Users may withdraw their consent at any time, but this may result in limited access to certain features or complete deactivation of the account. The app provides clear options for users to update their preferences related to data collection, notifications, and marketing communications. A refusal to consent may lead to the inability to use the service."
    },
    {
      "title": "Data Security & Encryption",
      "description": "Our app follows industry-standard encryption protocols to protect sensitive data such as payment details and personal information. We use secure socket layer (SSL) encryption, two-factor authentication (2FA), and tokenization methods to enhance security. User passwords and payment credentials are not stored in plain text but are encrypted using cryptographic techniques. We continuously update our security infrastructure to prevent cyber threats, unauthorized access, and data breaches. Users are encouraged to use strong passwords and enable additional security features to protect their accounts."
    },
    {
      "title": "Third-Party Sharing",
      "description": "We do not sell or rent user data to third parties. However, in certain cases, we may share user information with authorized third-party service providers such as payment processors, banks, regulatory bodies, and fraud prevention services. Data sharing is strictly limited to services necessary for transaction completion, legal compliance, and security purposes. Any third party involved is required to follow strict data protection policies. Users will be notified if any new third-party integrations impact their data privacy."
    },
    {
      "title": "Cookies & Tracking Technologies",
      "description": "Our app uses cookies and similar tracking technologies to improve the user experience. These include session cookies, preference cookies, and analytics cookies. Session cookies help maintain user sessions, preference cookies store user settings, and analytics cookies help us understand user interactions within the app. Users can manage cookie preferences from the app settings. Disabling cookies may affect certain features, such as personalized recommendations and faster login options. We do not use tracking technologies to collect unnecessary or intrusive information."
    },
    {
      "title": "User Rights & Data Control",
      "description": "Users have complete control over their data. They can access, modify, or delete their personal information from the app settings. Requests for data deletion can be made through customer support, subject to legal and compliance regulations. Users also have the right to opt-out of marketing communications and can request a report on what personal data is stored and how it has been used. Any changes to data preferences take immediate effect unless legal obligations require data retention."
    },
    {
      "title": "Data Retention Policy",
      "description": "We retain user data only as long as necessary for transaction records, legal compliance, and security purposes. Certain financial transaction data must be retained for auditing and regulatory requirements. Upon account deactivation, personal data may be removed, but essential transaction records may be retained for legal verification. Users can request data deletion, but regulatory obligations may prevent the immediate removal of certain data."
    },
    {
      "title": "Fraud Detection & Prevention",
      "description": "Our app actively monitors transactions to detect and prevent fraudulent activities. If any suspicious activity is detected, we may temporarily suspend or terminate the account and notify the user. In cases of repeated fraudulent attempts, we may share information with legal authorities for further investigation. The system uses AI-driven fraud detection methods, blacklisting of known fraudsters, and manual verification processes. Users should report any suspicious transactions immediately to prevent unauthorized access to their accounts."
    },
    {
      "title": "Children’s Privacy",
      "description": "Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal data from minors. If it is discovered that a minor has provided personal information, we will take immediate steps to delete such data and restrict account access. Parents or guardians can contact us if they suspect their child’s information has been used on our platform."
    },
    {
      "title": "Policy Updates & Notifications",
      "description": "We periodically update our privacy policy to comply with new laws, improve security measures, and enhance user experience. Any major changes will be communicated to users through in-app notifications, emails, or official announcements. Users are advised to review the policy updates regularly. Continued use of the app after an update constitutes agreement with the revised policies. If users disagree with the updated policy, they may request account deletion or restrict their data usage preferences."
    }
  ]
  

  return (
    <View style={[{width : (357/357)*responsiveWidth , height:(730/812)*responsiveHeight }]}>
        <FlatList 
          data={privacyPolicy}
          keyExtractor={(item , index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item , index}) => (
            <View style={[{width : (357/357)*responsiveWidth , ...style.flatListContaiiner }]}>

                <View style={[{width : (300/357)*responsiveWidth , ...style.flatListView }]}>
                  <Text style={style.text1}>{`${index + 1}_*_`+item.title}</Text>
                  <Text style={style.text2}>{"**"+item.description}</Text>
                </View>
            </View>
          )}
        />
    </View>
  )
}

const style = StyleSheet.create({
  flatListContaiiner : {
    
    alignItems:"center",
    justifyContent:"center",
    marginBottom : verticalScale(15),
    
  },
  text1 : {
    color : "#020202",
      fontWeight: "700",
      fontSize: moderateScale(19),
  
      lineHeight: verticalScale(20),
      fontStyle: "Urbanist",
      marginTop : verticalScale(10)
  },
  text2 : {
      color : "#0048A6",
      fontWeight: "400",
      fontSize: moderateScale(13),
  
      lineHeight: verticalScale(20),
      fontStyle: "Urbanist",
      marginTop : verticalScale(4)
  }
})