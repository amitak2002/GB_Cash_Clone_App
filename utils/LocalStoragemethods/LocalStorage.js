import AsyncStorage from "@react-native-async-storage/async-storage";

// Function to set data in AsyncStorage
export const setData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error saving data:", error);
  }
};

// Function to get data from AsyncStorage
export const getData = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    
    return data ? JSON.parse(data) : undefined;

  } catch (error) {
    console.error("Error retrieving data:", error);
    
  }
};

// Function to delete data from AsyncStorage
export const deleteData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error("Error deleting data:", error);
  }
};
