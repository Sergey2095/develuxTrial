import React from 'react';
import {StyleSheet, View} from 'react-native';
import {H2} from '../Typography';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS} from '~theme/index';
import {useStyle} from '~hooks/useStyle';

type HeaderProps = {
  title: string;
};

const Header = ({title}: HeaderProps) => {
  const insets = useSafeAreaInsets();

  const headerStyle = useStyle(() => {
    return {
      ...styles.container,
      paddingTop: insets.top ? insets.top : 10,
    };
  }, [insets.top]);

  return (
    <View style={headerStyle}>
      <H2 style={styles.title}>{title}</H2>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: COLORS.black100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: COLORS.white,
  },
});
