import { View, Text, StyleSheet } from "react-native"
import { Props } from "./types";

export const Card = ({title, desc, frequency, passedDays}: Props): JSX.Element => {

  const renderColor = () => {
    if (frequency < passedDays)
      return "#EB9B9B"

    if (passedDays + 10 >= frequency)
      return "#ffc074"

    return "#81b4f8"
  }

  const renderBackgroundColor = () => {
    if (frequency < passedDays)
      return "#fcf0f0"

    if (passedDays + 10 >= frequency)
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

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    borderRadius: 10,
    padding: 15,
  },
  daysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  days: {
    fontSize: 10,
    color: '#8F8989'
  },
  title: {
    color: '#534E4E',
    paddingBottom: 10,
    textAlign: 'center',
    fontSize: 13
  },
  desc: {
    paddingTop: 10,
    fontSize: 13
  }
});
