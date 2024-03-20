import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '~components/Header';
import Input from '~src/components/Input';
import P from '~src/components/Typography/P';
import {COLORS, STYLES} from '~src/theme';
import {useDebounceCallback} from 'usehooks-ts';
import {IStock} from '~src/types';
import StockItem from '~src/components/StockItem/StockItem';
import List from '~src/components/List';
import {useStockStore} from '~src/store';

const SearchScreen = () => {
  const {stocks} = useStockStore();

  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState<IStock[]>(stocks);

  const [cachedSearchData, setCachedSearchData] = useState<{
    [key: string]: IStock[];
  }>({});

  const findStocks = async (text: string) => {
    if (text.length < 2) {
      return stocks;
    }

    const lowerCaseSearchTerm = text.toLowerCase();

    if (cachedSearchData[lowerCaseSearchTerm]) {
      return cachedSearchData[lowerCaseSearchTerm];
    }

    const filteredData = stocks.filter(
      item =>
        item.i.type.toLowerCase().includes(lowerCaseSearchTerm) ||
        item.i.name.toLowerCase().includes(lowerCaseSearchTerm),
    );

    const sortedData = filteredData.sort((a, b) => {
      if (a.market < b.market) {
        return -1;
      }
      if (a.market > b.market) {
        return 1;
      }

      return b.i.price.lastTradedPrevious - a.i.price.lastTradedPrevious;
    });

    setCachedSearchData({
      ...cachedSearchData,
      [lowerCaseSearchTerm]: sortedData,
    });

    return sortedData;
  };

  const onChangeDebounce = useDebounceCallback(async (text: string) => {
    const filtered = await findStocks(text);
    setSearchResult(filtered);
  }, 500);

  const onChange = (text: string) => {
    setSearchText(text);
    onChangeDebounce(text);
  };

  const renderStockItem = ({item}: {item: IStock}) => {
    return <StockItem stock={item} />;
  };

  return (
    <View style={STYLES.flex}>
      <Header title="Search" />
      <View style={styles.wrapper}>
        <P style={[STYLES.fs12, STYLES.textCenter, STYLES.mt10]}>
          Type a company name or stock symbol:
        </P>
        <Input
          isSearchable
          placeholder="Search"
          value={searchText}
          onChangeText={onChange}
        />
        <List<IStock>
          data={searchResult}
          renderComponent={renderStockItem}
          keyExtractor={item => item.id.toString()}
          onEndReachedThreshold={0.25}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[STYLES.mt20, STYLES.mb20]}
        />
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
});
