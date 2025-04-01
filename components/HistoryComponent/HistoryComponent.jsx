import { View, Text, FlatList, StyleSheet , Image, TouchableOpacity ,Dimensions } from 'react-native';
import React from 'react';
import { scale , verticalScale , moderateScale } from 'react-native-size-matters';

export default function HistoryComponent({onPress}) {
  const history = [
    { transaction_id: "SN10-081212179828", amount: 120, time: "2:20 PM", date: "Jan 22, 2025" },
    { transaction_id: "SN10-081212179829", amount: 250, time: "3:15 PM", date: "Jan 23, 2025" },
    { transaction_id: "SN10-081212179830", amount: 75, time: "4:00 PM", date: "Jan 24, 2025" },
    { transaction_id: "SN10-081212179831", amount: 180, time: "5:45 PM", date: "Jan 25, 2025" },
    { transaction_id: "SN10-081212179832", amount: 99, time: "6:30 PM", date: "Jan 26, 2025" },
  ];

  const { height: responsiveHeight, width: responsiveWidth } = Dimensions.get("window");

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerRightText}>History</Text>
            <TouchableOpacity onPress={onPress}>
                <Image source={require("../../assets/images/seeall.png")}/>
            </TouchableOpacity>
        </View>
        <FlatList
            style={styles.flatList}
            data={history}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.transaction_id}
            renderItem={({ item }) => (
            <View style={[{width : (350/375)*responsiveWidth , height : (50/812)*responsiveHeight , ...styles.mainDiv}]}>
                <View style={[{width:(48/357)*responsiveWidth , height:(48/812)*responsiveHeight ,...styles.image}]}>
                    <Image source={require("../../assets/images/icon.png")} style={{width:(48/357)*responsiveWidth , height:(48/812)*responsiveHeight}}/>
                </View>
                <View style={[{...styles.middle , width : (160/375)*responsiveWidth , height:(42/812)*responsiveHeight}]}>
                    <Text style={styles.transaction_id}>{item.transaction_id}</Text>
                    <View style={styles.Time}>
                        <Text style={styles.time1}>{item.time}</Text>
                        <Text style={styles.time2}>{item.date}</Text>
                    </View>
                </View>

                <View style={styles.end}>
                    <Text style={styles.amount}>-INR{item.amount}.000</Text>
                </View>
            </View>
            
            )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width : '100%',
    height:'100%',
    padding: 20,
    backgroundColor: "#ffffff",
    marginTop : verticalScale(5),
    
  },
  header : {
    width : '100%',
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:'center'
  },
  flatList : {
    width : '100%',

  },
  headerRightText: {
    fontStyle : "Urbanist",
    fontWeight : "700",
    fontSize : moderateScale(20),
    lineHeight : verticalScale(28)
  },
  mainDiv: {
    flexDirection: 'row',
    justifyContent:'flex-start',
    marginTop: verticalScale(12),
    backgroundColor: "#fff",
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 1 }, 
    shadowOpacity: 0.1, 
    elevation: 2, 
    
    
  },
  image : {
    borderRadius : moderateScale(50),
    backgroundColor:"#F7F7F7"
  },
  middle : {
    justifyContent:'center',
    alignItems:'center',
    marginLeft : scale(10)
  },
  Time: {
    width : '100%',
    flexDirection : "row",
    alignItems:'center',
    justifyContent:'space-between',
    marginTop : verticalScale(2)

  },
  transaction_id : {
    fontStyle : "Urbanist",
    fontWeight : "700",
    fontSize : moderateScale(16),
    lineHeight : verticalScale(20)
  },
  time1 : {
    fontStyle : "Urbanist",
    fontWeight : "400",
    fontSize : moderateScale(12),
    lineHeight : verticalScale(16),
    color : "#0048A6"

  },
  time2 : {
    fontStyle : "Urbanist",
    fontWeight : "400",
    fontSize : moderateScale(12),
    lineHeight : verticalScale(16),
    color : "#0048A6"

  },
  end : {
    width : '35%',
    alignItems:"flex-end",
    justifyContent:'center'

  },
  amount : {
    fontSize : moderateScale(14),
    lineHeight:verticalScale(18),
    fontWeight:"700",
    fontStyle:'Urbanist'
  }
  
  
});
