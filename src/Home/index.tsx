import { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Header } from "../Header";
import { CardList } from "./CardList";
import { useSavedDate } from "../hooks/useSavedData";
import { CardType } from "./CardList/types";
import { useDifferenceInDays } from "../hooks/useDifferenceInDays";
import { styles } from "./styles";
import { Search } from "./types";
import { NotContent } from "../shared/NotContent";
import { getPriority } from "../shared/utils/priority";
import { useIsVisible } from "../hooks/useIsVisible";

export const Home = (): JSX.Element => {
  const [allSavedData, setAllSavedData] = useState<CardType[]>([]);
  const [isSorted, setIsSorted] = useState(Boolean);
  const [searchInput, setSearchInput] = useState<Search>({
    value: "",
    list: [],
    error: false,
  });
  const { saveData, readData } = useSavedDate();
  const { visible } = useIsVisible()


  const getData = async () => {
    const data = await readData();

    if (!data) return;

    const finalResult = useDifferenceInDays(data);
    finalResult && setAllSavedData(finalResult);
  }

  useEffect(() => {
    if(visible === "active") {
      getData()
    }
  }, [visible]);

  const handleSearchChange = (value: string) => {
    const res = allSavedData.filter(({ title }) => {
      return title.toLowerCase().includes(value.toLowerCase());
    });
    if (res.length && value) {
      setSearchInput({ value: value, list: res, error: false });
      return;
    }

    setSearchInput((prev) => ({ ...prev, value, error: true, list: [] }));
  };

  const handleSaveButton = (target: CardType, isEdit?: boolean) => {
    const savedTask = allSavedData.find((x) => x.id === target.id);

    if(savedTask?.title === target.title && savedTask?.desc === target.desc) return

    setAllSavedData((prev) => {
      if (savedTask && isEdit) {
        const next = prev.map((x) => {
          if (x.id === target.id) {
            return {...savedTask, title: target.title, desc: target.desc};
          }
          return x;
        });

        saveData(next);
        return next;
      }
      if (savedTask) return prev;

      const next = [target, ...prev];
      saveData(next);
      return next;
    });
  };

  const handleDelete = (item: CardType) => {
    const res = allSavedData.filter((v) => v.id !== item.id);
    setAllSavedData(res);
    saveData(res);
  };

  const handleToUpdate = (target: CardType) => {
    setAllSavedData((prev) => {
      const currentCardItem = prev.find((x) => x.id === target.id);
      if (currentCardItem) {
        const next = prev.map((x) => {
          if (x.id === target.id) {
            return {
              ...target,
              date: `${new Date().getTime()}`,
              passedDays: 0,
            };
          }
          return x;
        });

        saveData(next);
        return next;
      }

      const next = prev;
      saveData(next);
      return next;
    });
  };

  const renderList= () => {

    if (isSorted) {
        const res = [...allSavedData].sort(
          (a, b) => {
            const numberedPrio = {
              high: 2,
              medium: 1,
              low: 0,
            }
            const aPrio = numberedPrio[getPriority(a)]
            const bPrio = numberedPrio[getPriority(b)]
            return bPrio >= aPrio ? 1 : -1
          }
        );
        return res
    }
    return allSavedData
  };

  const handleSort = () => {
    setIsSorted(p => !p)
  };

  return (
    <View style={styles.wrapper}>
        <Header
          isSorted={isSorted}
          search={searchInput}
          onSaveButton={handleSaveButton}
          onSearchChange={handleSearchChange}
          onSort={handleSort}
        />
      <ScrollView automaticallyAdjustKeyboardInsets={true}>
        {allSavedData.length ? (
          <CardList
            onUpdate={handleToUpdate}
            onDelete={handleDelete}
            onEdit={handleSaveButton}
            data={searchInput.list.length ? searchInput.list : renderList()}
          />
        ) : (
          <NotContent />
        )}
      </ScrollView>
    </View>
  );
};
