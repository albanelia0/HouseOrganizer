import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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