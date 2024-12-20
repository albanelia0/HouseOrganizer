import { View, ScrollView } from "react-native";
import { Card } from "../../shared/Card"
import { Props } from "./types";
import { styles } from "./styles";

export const CardList = ({ data, onEdit, onDelete, onUpdate } :Props ) => {

  if(!data?.length) return null;

  return (
    <View style={styles.wrapper}>
      <View style={styles.list}>
        {data?.map((item) =>
          <Card onUpdate={onUpdate} onDelete={onDelete} onEdit={onEdit} item={item} key={item.id} desc={item.desc} title={item.title} passedDays={item.passedDays === -0 ? 0 : item.passedDays} frequency={Number(item.frequency)} />
        )}
      </View>
    </View>
  )
}
