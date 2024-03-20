import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '~components/Header';
import List from '~components/List';
import StockItem from '~components/StockItem/StockItem';
import {useStockStore} from '~src/store';
import {IStock} from '~src/types';
import {COLORS, STYLES} from '~theme/index';

const StockScreen = () => {
  const {stocks} = useStockStore();

  const renderStockItem = ({item}: {item: IStock}) => {
    return <StockItem stock={item} />;
  };

  console.log('stocks', stocks);
  return (
    <View style={styles.wrapper}>
      <Header title="Stock" />
      <List<IStock>
        data={stocks}
        renderComponent={renderStockItem}
        keyExtractor={item => item.id.toString()}
        onEndReachedThreshold={0.25}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[STYLES.mt20, STYLES.mb20]}
      />
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
