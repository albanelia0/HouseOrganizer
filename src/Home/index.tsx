import { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Header } from "../Header"
import { CardList } from './CardList';
import { useSavedDate } from '../hooks/useSavedData';
import { CardType } from './CardList/types';
import { useDifferenceInDays } from '../hooks/useDifferenceInDays';
import { styles } from './styles';
import { Search } from './types';
import { NotContent } from '../shared/NotContent';

export const Home = (): JSX.Element => {
  const [allSavedData, setAllSavedData] = useState<CardType[]>([])
  const [searchInput, setSearchInput] = useState<Search>({value: "", list: [], error: false})
  const {saveData, readData} = useSavedDate()

  useEffect(() => {
    (async () => {
      const data = await readData()

      if(!data) return

      const finalResult = useDifferenceInDays(data)
      console.log("res", finalResult)
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

  const handleSaveButton = (target: CardType, isEdit?: boolean) => {
      setAllSavedData(prev => {
        const alreadyExists = prev.some(x => x.id  === target.id)
        if(alreadyExists && isEdit) {
          const next = prev.map(x => {
            if(x.id  === target.id) {
              return target
            }
            return x
          })

          saveData(next)
          return next
        }
        if (alreadyExists) return prev

        const next = [ target,...prev]
        saveData(next)
        return next
    });
  }

  const handleDelete = (item: CardType) => {
    const res = allSavedData.filter(v => v.id !== item.id)
    setAllSavedData(res)
    saveData(res)
  }

  const handleToUpdate = (target: CardType) => {
    setAllSavedData(prev => {
      const currentCardItem = prev.find(x => x.id  === target.id)
      if(currentCardItem) {
        const next = prev.map(x => {
          if(x.id  === target.id) {
            return {...target, date: `${new Date().getTime()}`, passedDays: 0}
          }
          return x
        })

        saveData(next)
        return next
      }

      const next = prev
      saveData(next)
      return next
  });
  }

  return (
    <View style={styles.wrapper}>
      <ScrollView automaticallyAdjustKeyboardInsets={true}>

        <Header
          search={searchInput}
          onSaveButton={handleSaveButton}
          onSearchChange={handleSearchChange}
        />
        {allSavedData.length ? (
          <CardList
            onUpdate={handleToUpdate}
            onDelete={handleDelete}
            onEdit={handleSaveButton}
            data={searchInput.list.length ? searchInput.list : allSavedData}
            />
          ): <NotContent />
        }
      </ScrollView>
    </View>
  )
}
