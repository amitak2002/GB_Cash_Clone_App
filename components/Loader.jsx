import { View, ActivityIndicator, Text } from "react-native";

const LoaderScreen = ({ message = "Loading...", size = "large", color = "#007bff" }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.1)", // Light overlay effect
  },
  message: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
};

export default LoaderScreen;
