import React from 'react';
import {Text, View} from 'react-native';
import Header from '~components/Header';
import {STYLES} from '~src/theme';

const SearchScreen = () => {
  return (
    <View style={STYLES.flex}>
      <Header title="Search" />
      <Text>Search Screen</Text>
    </View>
  );
};

export default SearchScreen;
