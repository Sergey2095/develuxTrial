import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

import {useStockStore} from '~src/store';

import Navigation from './src/navigation/navigation-container';

function App(): React.JSX.Element {
  const {stocks, setStocks} = useStockStore();

  // TODO: Create single entry point for data fetching
  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://file.notion.so/f/f/ec235754-1e4e-42f0-a835-141a85a808fc/d31f6dc9-99ed-46af-a279-b24be26a98d0/data.json?id=581553d0-4ea3-4ca3-8021-aafaf7f65b7a&table=block&spaceId=ec235754-1e4e-42f0-a835-141a85a808fc&expirationTimestamp=1711015200000&signature=A5zD3rhbcbRGFg_bbyCLpHgb7OyIMxSdpsgwBq73s8c&downloadName=data.json',
      );
      const json = await response.json();
      setStocks(json);
    } catch (error) {
      // TODO: add error handling
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    if (stocks.length === 0) {
      fetchData();
    }
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
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
