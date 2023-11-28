import { View, Text, StyleSheet } from "react-native"
import { Props } from "./types";

export const Card = ({title, desc, frequency, passedDays}: Props): JSX.Element => {
  return(
    <View style={{...styles.wrapper, backgroundColor: "#fcf0f0"}}>
      <Text style={styles.title}>
        {title}
      </Text>
      <View
        style={{
          borderBottomColor: '#EB9B9B',
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
    width: "45%",
    borderRadius: 10,
    padding: 15,
    marginRight: 20,
    marginLeft: 20
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
