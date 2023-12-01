import { Text, View } from "react-native"
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { styles } from "./styles";

export const NotContent = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>You haven't created any tasks yet!</Text>
      <FontAwesome5 name="wind" size={28} color="#56487C" />
    </View>
  )
}