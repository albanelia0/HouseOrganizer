import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from "../Header"
import { CardList } from './CardList';

export const Home = () => {
  const [inputValue, setInputValue] = useState('')

  return (
    <View>
      <Header value={inputValue} onChange={setInputValue}/>
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
