import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    gap: 30
  },
  input: {
    borderRadius: 7,
    backgroundColor: "#FFF",
    padding: 10,
    width: "46%",
  },
  daysContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
  },
  dateContainer: {
    flexDirection: "column",
    width: "100%",
  },
  button: {
    padding: 10,
    backgroundColor: '#b9b1d1',
    borderRadius: 10,
    color: '#56487C',
    width: 100,
    alignItems: "center",
    alignSelf: "flex-end",
    margin: 10
  },
  disabledButton: {
    backgroundColor: '#dbd8d8',
  },
  disabledButtonText: {
    color: '#8F8989'
  }
});