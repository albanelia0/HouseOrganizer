import { TextInput, Text, View } from "react-native"
import { Props } from "./types";
import { styles } from "./styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const Search = ({onChange, value, isError, onSort}: Props) => {

  const handleSort = () => {
    onSort(p => !p)
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChange}
          value={value}
          placeholder="Search..."
          keyboardType="default"
        />
        <MaterialCommunityIcons onPress={handleSort} name="sort" size={22} color="#9C568A"  />
      </View>
        {isError && value && <Text style={isError && styles.error}>Not found</Text>}
    </View>
  )
}
