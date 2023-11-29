import { View, StyleSheet, ScrollView } from "react-native";
import { Card } from "../../shared/Card"
import { Props } from "./types";

export const CardList = ({ data }:Props ) => {
  console.log("data", data?.length);

  if(!data?.length) return null;

  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <View style={styles.list}>
          {data?.map(({desc, title, passedDays, frequency}) =>
            <Card key={title} desc={desc} title={title} passedDays={passedDays === -0 ? 0 : passedDays} frequency={frequency || 0} />
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