import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '~components/Header';
import List from '~components/List';
import StockItem from '~components/StockItem/StockItem';
import {IStock} from '~src/types';
import {COLORS, STYLES} from '~theme/index';

const StockScreen = () => {
  const [data, setData] = useState<IStock[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://file.notion.so/f/f/ec235754-1e4e-42f0-a835-141a85a808fc/d31f6dc9-99ed-46af-a279-b24be26a98d0/data.json?id=581553d0-4ea3-4ca3-8021-aafaf7f65b7a&table=block&spaceId=ec235754-1e4e-42f0-a835-141a85a808fc&expirationTimestamp=1711015200000&signature=A5zD3rhbcbRGFg_bbyCLpHgb7OyIMxSdpsgwBq73s8c&downloadName=data.json',
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderStockItem = ({item}: {item: IStock}) => {
    return <StockItem stock={item} />;
  };

  console.log('DATA', data);
  return (
    <View style={styles.wrapper}>
      <Header title="Stock" />
      <List<IStock>
        data={data}
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
