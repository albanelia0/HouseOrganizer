import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
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
  button: {
    backgroundColor: "white",
  },
});