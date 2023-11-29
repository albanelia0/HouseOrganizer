import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Logo } from './Logo';
import { Props } from './types';
import { Search } from './Search';
import { useState } from 'react';
import { Create } from './Create';

export const Header = ({onSearchChange, onSaveButton, searchValue}: Props) => {
  const [isCreatedClicked, setIsCreatedClick] = useState(false)

  const handleCreateClick = () => setIsCreatedClick(p => !p)

  return (
    <View style={styles.header}>
      <View style={styles.topContainer}>
        <Logo />
        <TouchableOpacity
          onPress={() => setIsCreatedClick(p => !p)}
          accessibilityLabel="Learn more about this purple button"
        >
          <Text style={styles.plusButton}>﹢</Text>
        </TouchableOpacity>
      </View>
      {isCreatedClicked ? <Create onClick={handleCreateClick} onSaveButton={onSaveButton} />:
      <Search onChange={onSearchChange} value={searchValue} />}
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "column",
    alignItems: 'flex-start',
    marginBottom: 21,
    gap: 20,
    backgroundColor: '#F3F3F3',
    padding: 20
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  plusButton: {
    fontSize: 30,
    color: "#56487C"
  },
});