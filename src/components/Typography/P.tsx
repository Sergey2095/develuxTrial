import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {FONTS, COLORS} from '~src/theme';

import {useStyle} from '~src/hooks/useStyle';
import {PProps} from '~src/components/Typography/types';

const P: React.FC<PProps> = ({
  children,
  style = {},
  color,
  size,
  weight,
  align,
  lineHeight,
  ...props
}) => {
  const txtStyle = useStyle(
    () => [
      styles.text,
      style,
      size ? {fontSize: size} : null,
      color ? {color} : null,
      align ? {textAlign: align} : null,
      lineHeight ? {lineHeight} : null,
    ],
    [style, color, size, weight, align],
  );

  return (
    <Text style={txtStyle} {...props}>
      {children}
    </Text>
  );
};

export default P;

const styles = StyleSheet.create({
  text: {
    fontFamily: FONTS.SFProDisplay,
    fontSize: 16,
    color: COLORS.black,
  },
});
