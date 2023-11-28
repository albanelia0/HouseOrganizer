import { View, StyleSheet } from "react-native";
import { Card } from "../../shared/Card"

export const CardList = () => {
  return (
    <View style={styles.wrapper}>
      <Card desc="para mantener..." title="Fregar el suelo" passedDays={8} frequency={9}/>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#FFFFFF",
    height: "100%",
  },
});