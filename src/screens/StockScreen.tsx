import React from 'react';
import {Text, View} from 'react-native';
import Header from '~components/Header';
import {STYLES} from '~src/theme';

const StockScreen = () => {
  return (
    <View style={STYLES.flex}>
      <Header title="Stock" />
      <Text>Stock Screen</Text>
    </View>
  );
};

export default StockScreen;
