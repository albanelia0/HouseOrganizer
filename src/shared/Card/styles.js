import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    borderRadius: 10,
    padding: 15,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    width: "100%",
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
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  pencil: {
    fontSize: 19,
    color: '#8F8989'
  },
  trash: {
    color: '#8F8989',
    fontSize: 25,
    marginTop: -5
  },
  editInput: {
    backgroundColor: '#e2dfdf',
    borderRadius: 10,
    width: '80%',
    padding: 10,
    marginTop: 10,
  }
});