import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Redirect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
 
export default function Index() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const token = await AsyncStorage.getItem('userNumber'); // take token from local storage 
        setIsAuthenticated(!!token);
      } catch (error) {
        console.error('Error accessing AsyncStorage:', error);
      } finally {
        setLoading(false);
      }        
    };

    checkAuthentication();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  //logic part is pending , and the logic part is that if user had all 3 verification stage passed then , it can move on endUser home screem else they were moved at required panel.
  // if (all three staged passed then isAsuthenticated == true else false)


  return (
    <>
      
      <Redirect href={isAuthenticated ? '/end-user' : '/(routes)/onboarding'} />
    </>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
