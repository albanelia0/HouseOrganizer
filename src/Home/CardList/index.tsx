import { View, StyleSheet, ScrollView } from "react-native";
import { Card } from "../../shared/Card"

const fakeData = [
  {desc:"para mantener...", title:"Fregar el suelo", passedDays:18, frequency:9},
  {desc:"para mantener...", title:"Lavar lavadora", passedDays:50, frequency:60},
  {desc:"para mantener...", title:"Lavar cortinas", passedDays:2, frequency:60},
  {desc:"para mantener...", title:"Limpiar baño", passedDays:2, frequency:7},
  {desc:"para mantener...", title:"Campana cocina", passedDays:20, frequency:30},
  {desc:"para mantener...", title:"Filtro lavavajillas", passedDays:9, frequency:9},
  {desc:"para mantener...", title:"Filtro lavadoras", passedDays:28, frequency:20},
]

export const CardList = () => {
  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <View style={styles.list}>
          {fakeData.map(({desc, title, passedDays, frequency}) =>
            <Card desc={desc} title={title} passedDays={passedDays} frequency={frequency}/>
          )}
        </View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#FFFFFF",
    height: "100%",
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
  }
});