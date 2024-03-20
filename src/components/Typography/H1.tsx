import React from 'react';
import {StyleSheet} from 'react-native';

import {PProps} from '~src/components/Typography/types';
import {useStyle} from '~src/hooks/useStyle';
import {FONTS, COLORS} from '~src/theme';

import {P} from './';

type H1 = PProps;

const H1: React.FC<H1> = ({children, style = {}, ...props}) => {
  const txtStyle = useStyle(() => [styles.textStyles, style], [style]);
  return (
    <P style={txtStyle} {...props}>
      {children}
    </P>
  );
};

export default H1;

const styles = StyleSheet.create({
  textStyles: {
    fontFamily: FONTS.SFProDisplay,
    fontSize: 22,
    color: COLORS.black,
  },
});
