import { Text, View, TouchableOpacity } from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';

import { Logo } from './Logo';
import { Props } from './types';
import { Search } from './Search';
import { useState } from 'react';
import { Create } from './Create';
import { styles } from './styles';

export const Header = ({onSearchChange, onSaveButton, search, onSort}: Props) => {
  const [isCreatedClicked, setIsCreatedClick] = useState(false)

  const handleCreateClick = () => setIsCreatedClick(p => !p)

  return (
    <View style={styles.header}>
      <View style={styles.topContainer}>
        <Logo />
        <TouchableOpacity
          onPress={() => setIsCreatedClick(p => !p)}
          accessibilityLabel="Button to create a new task"
        >
          <FeatherIcons name="plus" size={30} color="#56487C" />
        </TouchableOpacity>
      </View>
      {isCreatedClicked ? <Create onClick={handleCreateClick} onSaveButton={onSaveButton} />:
      <Search onSort={onSort} onChange={onSearchChange} value={search.value} isError={search.error} />}
    </View>
  )
}
