import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from "../Header"

export const Home = () => {
  const [inputValue, setInputValue] = useState('')

  return (
    <View>
      <Header value={inputValue} onChange={setInputValue}/>
        <Text>Content</Text>
    </View>
  )
}