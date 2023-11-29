import { TextInput, StyleSheet } from "react-native"
import { Props } from "./types";

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
const styles = StyleSheet.create({
  input: {
    borderRadius: 7,
    backgroundColor: "#FFF",
    padding: 10,
    width: "100%"
  }
});