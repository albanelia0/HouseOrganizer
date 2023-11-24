import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEY } from './settings';

export const useSavedDate = () => {

  const saveData = async (value: string) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, value)
      alert('Data successfully saved')
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }

  const readData = async () => {
    try {
      const result = await AsyncStorage.getItem(STORAGE_KEY);
      console.log("result", result);
      if (result !== null) {
        return result;
      }
    } catch (e) {
      alert('Failed to fetch the input from storage');
    }
  };

  const deleteAllData = async () => {
    try {
      const result = await AsyncStorage.removeItem(STORAGE_KEY);
      console.log("result", result);
      if (result !== null) {
        return result;
      }
    } catch (e) {
      alert('Failed to fetch the input from storage');
    }
  };

  return ({saveData, readData, deleteAllData})
}