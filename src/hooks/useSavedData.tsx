import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEY } from './settings';
import { CardType } from '../Home/CardList/types';

export const useSavedDate = () => {

  const saveData = async (value: CardType[]) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(value))
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }

  const readData = async (): Promise<CardType[] | undefined> => {
    try {
      const result = await AsyncStorage.getItem(STORAGE_KEY);
      if (result !== null) {
        return JSON.parse(result);
      }
    } catch (e) {
      alert('Failed to fetch the input from storage');
    }
  };

  const deleteAllData = async () => {
    try {
      const result = await AsyncStorage.removeItem(STORAGE_KEY);
      if (result !== null) {
        return result;
      }
    } catch (e) {
      alert('Failed to fetch the input from storage');
    }
  };

  return ({saveData, readData, deleteAllData})
}