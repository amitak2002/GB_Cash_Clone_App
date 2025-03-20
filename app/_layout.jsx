import React , {useState} from "react";
import { Stack , Redirect} from "expo-router";
import { PaperProvider } from 'react-native-paper';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';



export default function Layout() {

  // check authenticated
  const [authenticated , setIsAuthenticted] = useState(false)

  
  const toastConfig = {
    success: (props) => (
      <BaseToast
        {...props}
        style={{
          borderLeftColor: '#4CAF50',   // ✅ Green Border          
          height: 80,                   // ✅ Height Increase
          width: '90%',                 // ✅ Width Increase
          borderRadius: 12,             
          backgroundColor: '#DFF2BF',   // ✅ Light Green Background
        }}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        text1Style={{
          fontSize: 20,                 // ✅ Text Size Increase
          fontWeight: '700',
          color: '#2F5233',            // ✅ Dark Green Text
        }}
        
      />
    ),

    error: (props) => (
      <ErrorToast
        {...props}
        style={{
          borderLeftColor: '#F44336',   // ✅ Red Border
          height: 80,                   // ✅ Height Increase
          width: '90%',                 // ✅ Width Increase
          borderRadius: 12,
          backgroundColor: '#FFEBEE',   // ✅ Light Red Background
        }}
        text1Style={{
          fontSize: 20,                 // ✅ Text Size Increase
          fontWeight: '700',
          color: '#B71C1C',            // ✅ Dark Red Text
        }}
        
      />
    ),
  };

  return (
    <PaperProvider>
      <Stack screenOptions={{ headerShown: false }}>
        {authenticated ? <Redirect to="/end-user" /> : <Redirect to="/(routes)/onboarding"/>}
      </Stack>

      {/* ✅ Custom Toast Config Added */}
      <Toast config={toastConfig} />
    </PaperProvider>
  );
}
