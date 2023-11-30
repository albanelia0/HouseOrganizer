import { View, ScrollView } from "react-native";
import { Card } from "../../shared/Card"
import { Props } from "./types";
import { styles } from "./styles";

export const CardList = ({ data }:Props ) => {

  if(!data?.length) return null;

  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <View style={styles.list}>
          {data?.map(({desc, title, passedDays, frequency}) =>
            <Card key={title} desc={desc} title={title} passedDays={passedDays === -0 ? 0 : passedDays} frequency={Number(frequency)} />
          )}
        </View>
        </View>
    </ScrollView>
  )
}
