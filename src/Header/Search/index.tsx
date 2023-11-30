import { TextInput, Text, View } from "react-native"
import { Props } from "./types";
import { styles } from "./styles";

export const Search = ({onChange, value, isError}: Props) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
          style={styles.input}
          onChangeText={onChange}
          value={value}
          placeholder="Search..."
          keyboardType="default"
        />
         {isError && <Text style={isError && styles.error}>Not found</Text>}
    </View>
  )
}
