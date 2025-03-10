import React, { useEffect , useState } from 'react';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import LoaderScreen from '@/components/Loader';
import { Ionicons } from '@expo/vector-icons';

const Onboarding = () => {
  const router = useRouter();

  const [loading , setLoadig] = useState(true)
  const [next , setNext] = useState(false)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setNext(true)
    },5000)
    return () => clearTimeout(timeOut)
  },[])

  if (next == true) {
    router.push("/signup")
    setNext(false)
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoadig(false)
    }, 2000);
    return () => clearTimeout(timeOut)
  } , [])

  if (loading == true) {
    return <LoaderScreen/>
  }

  return (
    <View style={styles.mainContainer}>
      
      <ImageBackground 
      source={require("../../../assets/images/backGround.png")} 
      style={styles.container}
      
    >

    </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex : moderateScale(1)
  },
  container: {
    width:'100%',
    height:'100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});

export default Onboarding;
