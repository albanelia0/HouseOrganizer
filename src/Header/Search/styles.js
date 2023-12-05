import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    width: "100%"
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    gap: 20,
    alignItems: "center"
  },
  input: {
    borderRadius: 7,
    backgroundColor: "#FFF",
    padding: 10,
    flexGrow: 1
  },
  error: {
    color: "#f69d9d",
    fontSize: 14,
    textAlign: "center",
    marginTop: 10
  },
  sortedButton: {
    borderRadius: 5,
    padding: 5
  },
  isSorted: {
    backgroundColor: "#FFF",
  }
});