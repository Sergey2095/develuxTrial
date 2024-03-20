import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';

import {useStyle} from '~src/hooks/useStyle';
import {COLORS, STYLES} from '~src/theme';
import {IStock} from '~src/types';

import P from '../Typography/P';

export const ITEM_HEIGHT = 70;

type StockItemProps = {
  stock: IStock;
};

const StockItem = ({stock}: StockItemProps) => {
  const market = stock.market;
  const {type, name, price, lotSize} = stock.i;
  const {lastTradedPrevious} = price;
  const lotSizeInt = parseInt(lotSize, 10);

  const itemTitle = useMemo(() => {
    return `${name}(${type}) - ${market}`;
  }, [name, type, market]);

  const calculatedPrice = lastTradedPrevious * lotSizeInt;

  const formattedPrice = useMemo(() => {
    return Number((calculatedPrice / 100).toFixed(2));
  }, [calculatedPrice]);

  const priceColor = useMemo(() => {
    if (calculatedPrice < lastTradedPrevious) {
      return COLORS.red;
    }
    if (calculatedPrice === lastTradedPrevious) {
      return COLORS.gray;
    }
    if (calculatedPrice > lastTradedPrevious) {
      return COLORS.green;
    }
  }, [calculatedPrice, lastTradedPrevious]);

  const priceStyle = useStyle(() => {
    return {
      backgroundColor: priceColor,
    };
  }, [priceColor]);

  return (
    <View style={[STYLES.borderBottom, styles.wrapper]}>
      <P>{itemTitle}</P>
      <View style={[styles.priceWrapper, priceStyle]}>
        <P numberOfLines={1}>{formattedPrice}</P>
      </View>
    </View>
  );
};

export default StockItem;

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    backgroundColor: COLORS.black,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: ITEM_HEIGHT,
  },
  priceWrapper: {
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
  },
});
