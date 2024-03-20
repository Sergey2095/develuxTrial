import React from 'react';
import {StyleSheet, View} from 'react-native';

import Header from '~components/Header';
import StockList from '~src/components/StockList';
import {useStockStore} from '~src/store';
import {COLORS} from '~theme/index';

const StockScreen = () => {
  const {stocks} = useStockStore();

  return (
    <View style={styles.wrapper}>
      <Header title="Stock" />
      <StockList data={stocks} />
    </View>
  );
};

export default StockScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
});
