import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from "../Header"
import { CardList } from './CardList';
import { useSavedDate } from '../hooks/useSavedData';
import { Card } from './CardList/types';
import { useDifferenceInDays } from '../hooks/useDifferenceInDays';
import { styles } from './styles';
import { Search } from './types';

export const Home = (): JSX.Element => {
  const [allSavedData, setAllSavedData] = useState<Card[]>([])
  const [searchInput, setSearchInput] = useState<Search>({value: "", list: [], error: false})
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
    const res = allSavedData.filter(({title}) => {
      return title.toLowerCase().includes(value.toLowerCase())
    })
    if(res.length) {
      setSearchInput({value: value, list: res, error: false})
      return
    }

    setSearchInput(prev => ({...prev, value, error: true}))
  }

  const handleSaveButton = (target: Card) => {
      setAllSavedData(prev => {
        const alreadyExists = prev.some(x => x.title  === target.title)
        if (alreadyExists) return prev

        const next = [ target,...prev,]
        saveData(next)
        return next
    });
  }

  return (
    <View style={styles.wrapper}>
      <Header
        search={searchInput}
        onSaveButton={handleSaveButton}
        onSearchChange={handleSearchChange}
      />
      <CardList data={searchInput.list.length ? searchInput.list : allSavedData}/>

    </View>
  )
}
