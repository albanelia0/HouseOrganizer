import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from "../Header"
import { CardList } from './CardList';
import { useSavedDate } from '../hooks/useSavedData';
import { Card } from './CardList/types';
import { useDifferenceInDays } from '../hooks/useDifferenceInDays';
import { styles } from './styles';

export const Home = () => {
  const [allSavedData, setAllSavedData] = useState<Card[]>([])
  const [searchInput, setSearchInput] = useState('')
  const {saveData, readData, deleteAllData} = useSavedDate()

  useEffect(() => {
    (async () => {
      const data = await readData()

      if(!data) return

      const finalResult = useDifferenceInDays(data)
      console.log("finalResult: ", finalResult)
      finalResult && setAllSavedData(finalResult)
    })()
  }, [])


  const handleSearchChange = (value: string) => {
    setSearchInput(value)
  }

  const handleSaveButton = (target: Card) => {
      setAllSavedData(prev => {
        const alreadyExists = prev.some(x => x.title  === target.title)
        if (alreadyExists) return prev

        const next = [...prev, target]
        saveData(next)
        return next
    });
  }

  return (
    <View style={styles.wrapper}>
      <Header
        searchValue={searchInput}
        onSaveButton={handleSaveButton}
        onSearchChange={handleSearchChange}
      />
      <CardList data={allSavedData}/>

    </View>
  )
}
