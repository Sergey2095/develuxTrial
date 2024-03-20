import React from 'react';
import {useCallback, useState} from 'react';
import {
  FlatList,
  FlatListProps,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

// import Empty from 'components/Empty';
import GlobalLoader from '~components/GlobalLoader';
import {COLORS} from '~theme/index';

type ListProps<TItem> = {
  data?: TItem[];
  onPressListItem?: (item: TItem) => void;
  renderComponent: React.FC<{item: TItem}>;
  keyExtractor: (item: TItem) => string;
  canLoadMore?: boolean;
  onRefresh?: () => Promise<void>;
  onEndReached?: () => Promise<void>;
} & Omit<FlatListProps<TItem>, 'renderItem' | 'data'>;

const List = <TItem,>({
  data,
  onPressListItem,
  renderComponent: RenderComponent,
  keyExtractor,
  canLoadMore,
  onRefresh,
  onEndReached,
  ...props
}: ListProps<TItem>) => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [footer, setFooter] = useState<boolean>(false);

  const _onRefresh = useCallback(async () => {
    if (onRefresh) {
      try {
        setRefreshing(true);
        await onRefresh();
      } catch (error) {
        console.warn(error);
      } finally {
        setRefreshing(false);
      }
    }
  }, [onRefresh]);

  const _onEndReached = useCallback(async () => {
    if (onEndReached) {
      if (canLoadMore && !footer) {
        try {
          setFooter(true);
          await onEndReached();
        } catch (error) {
          console.warn(error);
        } finally {
          setFooter(false);
        }
      }
    }
  }, [footer, onEndReached, canLoadMore]);

  const _separatorComponent = () => {
    return <View style={styles.listSeparator} />;
  };

  const _renderFooter = useCallback(() => {
    if (footer) {
      return (
        <View style={styles.footer}>
          <GlobalLoader />
        </View>
      );
    }
    return null;
  }, [footer]);

  const _renderItem = ({item}: {item: TItem}) =>
    onPressListItem ? (
      <TouchableOpacity onPress={() => onPressListItem(item)}>
        <RenderComponent item={item} />
      </TouchableOpacity>
    ) : (
      <RenderComponent item={item} />
    );

  return (
    <FlatList
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={_separatorComponent}
      // ListEmptyComponent={<Empty title="No data found" />}
      {...props}
      data={data}
      renderItem={_renderItem}
      ListFooterComponent={_renderFooter}
      refreshControl={
        <RefreshControl
          tintColor="#555"
          onRefresh={_onRefresh}
          refreshing={refreshing}
        />
      }
      onEndReached={_onEndReached}
    />
  );
};

export default List;

const styles = StyleSheet.create({
  listSeparator: {
    padding: 5,
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
  },
});
