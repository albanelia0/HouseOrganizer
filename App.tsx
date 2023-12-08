import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Home } from './src/Home';
import { Fragment, useEffect } from 'react';

export default function App() {
  useEffect(() => {
    (async () => {
      const { status } = await Notifications.requestPermissionAsync();
      if (status !== 'granted') {
        alert('You need to enable notifications in your phone settings.');
      }
    })
  },[]);
  return (
    <Fragment>
      <SafeAreaView style={{marginBottom: -50,  backgroundColor: '#CBC6D3' }} />
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
