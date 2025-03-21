import React, { useEffect, useState } from "react";
import { View, StyleSheet, ImageBackground, StatusBar } from "react-native";
import { useRouter } from "expo-router";

import LoaderScreen from "@/components/Loader";
import Toast from "react-native-toast-message";

const Onboarding = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Toast.show({
            type: "success",
            text1: "Welcome to Paypulse App",
            visibilityTime: 2000,
            position: "top",
        });

        const loadingTimeout = setTimeout(() => setLoading(false), 2000);
        const nextTimeout = setTimeout(() => router.push("/signup"), 5000);

        return () => {
            clearTimeout(loadingTimeout);
            clearTimeout(nextTimeout);
        };
    }, []);

    if (loading) {
        return <LoaderScreen />;
    }

    return (
        <View style={styles.mainContainer}>
            <StatusBar backgroundColor="#000" barStyle="light-content" />
            <ImageBackground
                source={require("../../../assets/images/backGround.png")}
                style={styles.container}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    container: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Onboarding;
