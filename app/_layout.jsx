import React, { useState } from "react";
import { Stack, Redirect } from "expo-router";
import { PaperProvider } from "react-native-paper";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";

export default function Layout() {
    // check authenticated
    const [authenticated, setIsAuthenticted] = useState(false);

    const toastConfig = {
        success: (props) => (
            <BaseToast
                {...props}
                style={{
                    borderLeftColor: "#4CAF50",
                    height: 80,
                    width: "90%",
                    borderRadius: 12,
                    backgroundColor: "#DFF2BF",
                }}
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                text1Style={{
                    fontSize: 20,
                    fontWeight: "700",
                    color: "#2F5233",
                }}
            />
        ),

        error: (props) => (
            <ErrorToast
                {...props}
                style={{
                    borderLeftColor: "#F44336",
                    height: 80,
                    width: "90%",
                    borderRadius: 12,
                    backgroundColor: "#FFEBEE",
                }}
                text1Style={{
                    fontSize: 20,
                    fontWeight: "700",
                    color: "#B71C1C",
                }}
            />
        ),
    };

    return (
        <PaperProvider>
            <Stack screenOptions={{ headerShown: false }}>
                {authenticated ? (
                    <Redirect to="/end-user" />
                ) : (
                    <Redirect to="/(routes)/onboarding" />
                )}
            </Stack>

            {/* ✅ Custom Toast Config Added */}
            <Toast config={toastConfig} />
        </PaperProvider>
    );
}
