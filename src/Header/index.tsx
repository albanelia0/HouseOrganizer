import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Logo } from './Logo';
import { Props } from './types';
import { Search } from './Search';
import { useState } from 'react';
import { Create } from './Create';
import { styles } from './styles';

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
