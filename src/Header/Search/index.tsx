import { TextInput, StyleSheet } from "react-native"
import { Props } from "./types";
import { styles } from "./styles";

export const Search = ({onChange, value}: Props) => {
  return (
    <TextInput
        style={styles.input}
        onChangeText={onChange}
        value={value}
        placeholder="Search..."
        keyboardType="default"
      />
  )
}
