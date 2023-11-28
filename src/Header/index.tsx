import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Logo } from './Logo';
import { Props } from './types';

export const Header = ({onChange, value}: Props) => {

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
        onChangeText={onChange}
        value={value}
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
    backgroundColor: '#F3F3F3',
    padding: 20
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