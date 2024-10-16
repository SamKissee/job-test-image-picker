import React from 'react';
import {SafeAreaView} from 'react-native';
import Home from './src/Screens/Home';

// basic render screen cleaning up App File.
// nav, analytics, and other utilities go here.

function App() {
  return (
    <SafeAreaView>
      <Home />
    </SafeAreaView>
  );
}

export default App;
