import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React, { useState, useEffect } from 'react';
import LoaderScreen from '@/components/Loader';
import AppInput from '@/components/AppInput';
import AppButton from '@/components/AppButton';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { useRouter } from 'expo-router';
import axios from 'axios';
import { panVerify } from '../utils/AuthApi.js';

import { userPanSchema } from '../validationYUP/authValidation.js';
import { Formik } from 'formik';
import Toast from 'react-native-toast-message';

export default function PanVerify() {
  const router = useRouter();
  const [loader, setLoader] = useState(true);
  const [panNum, setPanNum] = useState("");

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoader(false);
    }, 3000);
    return () => clearTimeout(timeOut);
  }, []);

  const handlePanVerify = (panNumberVerify) => {
    if (panNumberVerify !== "ABCPV1234D") {
      Toast.show({
        type: 'error',
        text1: 'Invalid PAN Number',
        visibilityTime: 2000,
        position: 'top',
      });
      return;
    }

    router.push("/adharVerify");
    Toast.show({
      type: 'success',
      text1: 'PAN Verified Successfully',
      visibilityTime: 2000,
      position: 'top',
    });
  };

  if (loader) {
    return <LoaderScreen />;
  }

  return (
    <Formik
      initialValues={{ panNumber: "" }}
      validationSchema={userPanSchema}
      onSubmit={(values) => {
        console.log('submitted values is : ', values);
        setPanNum(values.panNumber);
        handlePanVerify(values.panNumber);
      }}
    >
      {({ values, errors, handleChange, handleSubmit, touched }) => (
        <View style={style.container}>
          <ImageBackground
            source={require("../assets/images/backGround.png")}
            style={style.ImageBackground}
          >
            <View style={style.header} />

            <View style={style.footer}>
              <View style={style.input}>
                <AppInput
                  placeholder="PAN VERIFICATION"
                  style={style.inputAdharNumber}
                  onChangeText={handleChange('panNumber')}
                  keyboardType="default"
                  value={values.panNumber}
                />
              </View>

              {errors.panNumber && touched.panNumber && (
                <Text
                  style={{
                    color: '#FFD700',
                    marginTop: verticalScale(5),
                    textAlign: 'center',
                  }}
                >
                  {errors.panNumber}
                </Text>
              )}

              <AppButton
                title="CONTINUE"
                style={style.generateOtp}
                onPress={handleSubmit}
              />
            </View>
          </ImageBackground>
        </View>
      )}
    </Formik>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  ImageBackground: {
    width: '100%',
    height: '100%',
  },
  header: {
    flex: 1,
  },
  footer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '90%',
    borderBottomWidth: moderateScale(1),
    borderBottomColor: '#ffffff',
  },
  inputAdharNumber: {
    width: '100%',
    paddingHorizontal: scale(2),
    paddingVertical: verticalScale(6),  // ✅ Fixed
    fontWeight: "400",                  // ✅ Fixed
    fontSize: moderateScale(18),
    textAlign: "left",
    fontStyle: 'Urbanist',
    lineHeight: verticalScale(22),      // ✅ Fixed
    color: '#F7F7F7',
  },
  generateOtp: {
    marginTop: verticalScale(18),
    width: '65%',
    color: '#1D1E25',
  },
});
