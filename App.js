import React from 'react';
import {StyleSheet} from 'react-native';
import Home from './src/Screens/Home';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

// basic render screen cleaning up App File.
// nav, analytics, and other utilities go here.

function App() {
  return (
    <GestureHandlerRootView style={styles.gesture}>
      <Home />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  gesture: {
    flex: 1,
  },
});

export default App;
