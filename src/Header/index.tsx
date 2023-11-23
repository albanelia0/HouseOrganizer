import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Logo } from './Logo';

export const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.topContainer}>
        <Logo />
        <TouchableOpacity
          // onPress={onPressLearnMore}
          accessibilityLabel="Learn more about this purple button"
        >
          <Text style={styles.plusButton}>﹢</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="Search..."
        keyboardType="default"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "column",
    alignItems: 'flex-start',
    marginBottom: 21,
    gap: 20,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  plusButton: {
    fontSize: 30,
    color: "#56487C"
  },
  input: {
    borderRadius: 7,
    backgroundColor: "#FFF",
    padding: 10,
    width: "100%"
  }
});