import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Header } from "../Header"
import { CardList } from './CardList';
import { useSavedDate } from '../hooks/useSavedData';
import { Card } from './CardList/types';

export const Home = () => {
  const [allSavedData, setAllSavedData] = useState<Card[]>([])
  const [searchInput, setSearchInput] = useState('')
  const {saveData, readData, deleteAllData} = useSavedDate()

  useEffect(() => {
    (async () => {
      const data = await readData()

      if(!data) return

      const newResult = data.map((data) => {
      if(!data) return

        const currentDate = new Date().getTime();

        const Difference_In_Time = Number(data.date) - currentDate;
        const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        return ({...data,passedDays: Math.round(Difference_In_Days)})
      })

      const finalResult = newResult.filter(v => v !== undefined)
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
    <View>
      <Header
        searchValue={searchInput}
        onSaveButton={handleSaveButton}
        onSearchChange={handleSearchChange}
      />
      <CardList data={allSavedData}/>

    </View>
  )
}
