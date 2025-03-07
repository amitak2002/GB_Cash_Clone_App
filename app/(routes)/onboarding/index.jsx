import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';

const { width } = Dimensions.get('window'); // Get device width dynamically

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const scrollViewRef = useRef(null); // Reference for ScrollView
  const router = useRouter();

  const steps = [
    {
      image: require('../../../assets/images/react-logo.png'), 
      title: "Verify KYC",
      description: "Step 1: Submit your KYC & it will be verified instantly",
    },
    {
      image: require('../../../assets/images/react-logo.png'),
      title: "Verify Card",
      description: "Step 2: Submit your Credit Card for verification & Our team will verify it within 1-4 hours",
    },
    {
      image: require('../../../assets/images/react-logo.png'),
      title: "Start Transactions",
      description: "Step 3: Start your first transaction. We provide instant settlement and low fees for every transaction 24X7",
    },
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      const newStep = step + 1;
      setStep(newStep);
      scrollViewRef.current.scrollTo({ x: width * newStep, animated: true }); // Scroll to next step
    } else {
      router.push('/signup');
    }
  };

  const handleSkip = () => {
    router.push('/signup');
  };

  return (
    <View style={styles.container}>
      {/* Skip Button */}
      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      {/* Scroll View for Onboarding Screens */}
      <ScrollView
        ref={scrollViewRef} // Attach ref
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false} 
        contentContainerStyle={{ width: width * steps.length }}
      >
        {steps.map((stepData, index) => (
          <View key={index} style={[styles.page, { width }]}>
            <Image source={stepData.image} style={styles.image} />
            <Text style={styles.title}>{stepData.title}</Text>
            <Text style={styles.description}>{stepData.description}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Dots Indicator + Next Button */}
      <View style={styles.footer}>
        <View style={styles.dotsContainer}>
          {steps.map((_, index) => (
            <View key={index} style={[styles.dot, step === index && styles.activeDot]} />
          ))}
        </View>

        {/* Next Button */}
        <TouchableOpacity 
          onPress={handleNext} 
          style={[styles.nextButton, { backgroundColor: step < steps.length - 1 ? '#f5eeee' : '#4568f6' }]}
        >
          <Text style={[styles.buttonText, { color: step < steps.length - 1 ? '#3295f7' : '#ffffff' }]}>
            {step < steps.length - 1 ? 'Next' : 'Get Started'}
          </Text>
          <Ionicons 
            name="arrow-forward" 
            size={moderateScale(20)} 
            color={step < steps.length - 1 ? "#3295f7" : "#ffffff"} 
            style={{ marginLeft: moderateScale(5) }} 
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  skipButton: {
    position: 'absolute',
    top: verticalScale(50),
    right: scale(20),
    zIndex: 10, 
  },
  skipText: {
    color: 'black',
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: scale(20),
  },
  image: {
    width: scale(200),
    height: verticalScale(200),
    resizeMode: 'cover',
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    marginTop: verticalScale(20),
  },
  description: {
    paddingVertical: verticalScale(10),
    fontSize: moderateScale(16),
    textAlign: 'center',
    color: '#888',
    marginTop: verticalScale(10),
    paddingHorizontal: scale(30),
    lineHeight: verticalScale(30),
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(20),
    marginBottom: verticalScale(30),
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: scale(5),
    height: scale(5),
    borderRadius: scale(5),
    backgroundColor: '#c8c1c1',
    marginHorizontal: scale(5),
  },
  activeDot: {
    borderWidth: scale(2),
    borderColor: '#529bef',
    width: scale(10),
    height: scale(10),
  },
  nextButton: {
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(20),
    borderRadius: scale(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fffbfb',
    shadowColor: '#d3d3d3',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
  },
});

export default Onboarding;
