import React from 'react';
import {StyleSheet, TextProps} from 'react-native';
import {FONTS, COLORS} from '~src/theme';
import {useStyle} from '~src/hooks/useStyle';
import {P} from './';

const H2: React.FC<TextProps> = ({children, style = {}, ...props}) => {
  const txtStyle = useStyle(() => [styles.textStyles, style], [style]);

  return (
    <P style={txtStyle} {...props}>
      {children}
    </P>
  );
};

export default H2;

const styles = StyleSheet.create({
  textStyles: {
    fontFamily: FONTS.SFProDisplay,
    fontSize: 18,
    color: COLORS.black,
  },
});
