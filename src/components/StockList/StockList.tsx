import {STYLES} from '~src/theme';
import {IStock} from '~src/types';

import List from '../List';
import StockItem from '../StockItem';
import {ITEM_HEIGHT} from '../StockItem/StockItem';

type StockListProps = {
  data: IStock[];
};

const StockList = ({data}: StockListProps) => {
  const renderStockItem = ({item}: {item: IStock}) => {
    return <StockItem stock={item} />;
  };

  return (
    <List<IStock>
      data={data}
      renderComponent={renderStockItem}
      keyExtractor={item => item.id.toString()}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[STYLES.mt20, STYLES.mb20]}
      // TODO: Add empty state layout
      getItemLayout={(data, index) => ({
        length: ITEM_HEIGHT,
        offset: ITEM_HEIGHT * index,
        index,
      })}
    />
  );
};

export default StockList;
