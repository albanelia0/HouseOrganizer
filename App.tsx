import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Home } from './src/Home';
import { Fragment } from 'react';

export default function App() {
  return (
    <Fragment>
      <SafeAreaView style={{ marginBottom: -50,  backgroundColor: '#CBC6D3' }} />
      <View style={styles.container}>
        <Home />
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
});
