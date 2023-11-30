import { View, Text } from "react-native"
import { Props } from "./types";
import { styles } from "./styles";

export const Card = ({title, desc, frequency, passedDays}: Props): JSX.Element => {

  const renderColor = () => {
    if (frequency <= passedDays)
      return "#EB9B9B"

    if (passedDays !== 0 && passedDays + 3 >= frequency)
      return "#ffc074"

    return "#81b4f8"
  }

  const renderBackgroundColor = () => {
    if (frequency < passedDays)
      return "#fcf0f0"

    if (passedDays !== 0 && passedDays + 3 >= frequency)
      return "#f8f2eb"

    return "#e6f0ff"
  }

  return(
    <View style={{...styles.wrapper, backgroundColor: renderBackgroundColor()}}>
      <Text style={styles.title}>
        {title}
      </Text>
      <View
        style={{
          borderBottomColor: renderColor(),
          borderBottomWidth: 1.5,
        }}
      />
      <Text style={styles.desc}>
        {desc}
      </Text>
      <View style={styles.daysContainer}>
        <Text style={styles.days}>{passedDays} days ago</Text>
        <Text style={styles.days}>Every {frequency}</Text>
      </View>
    </View>
  )
}

