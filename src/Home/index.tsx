import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from "../Header"
import { CardList } from './CardList';
import { useSavedDate } from '../hooks/useSavedData';

export const Home = () => {
  const [inputValue, setInputValue] = useState('')
  const {saveData, readData} = useSavedDate()

  const handleChange = (value: string) => {
    setInputValue(value)
    saveData(value)
  }

  (async () => await readData().then(console.log))()

  


  return (
    <View>
      <Header value={inputValue} onChange={handleChange}/>
      <CardList />

    </View>
  )
}

// const styles = StyleSheet.create({
//   wrapper: {
//     backgroundColor: "#FFFFFF"
//     he
//   },
// });
