import React from "react";
import {  Stack } from "expo-router";



// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

export default function Layout() {
  

  return (
    
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(routes)/onboarding/index" /> 
  
      </Stack>
 
  );
}
