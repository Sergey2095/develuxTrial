import React from 'react';

import {StatusBar, StyleSheet, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Navigation from './src/navigation/navigation-container';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Navigation />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
