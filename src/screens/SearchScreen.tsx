import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '~components/Header';
import {COLORS, STYLES} from '~src/theme';

const SearchScreen = () => {
  return (
    <View style={STYLES.flex}>
      <Header title="Search" />
      <View style={styles.wrapper}>
        <Text>Search Screen</Text>
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
