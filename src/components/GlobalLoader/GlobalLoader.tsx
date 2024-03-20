import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

import {useStyle} from '~hooks/useStyle';
import {COLORS} from '~theme/index';

interface IGlobalLoader {
  size?: 'small' | 'large';
  style?: ViewStyle;
  color?: string;
}

export const GlobalLoader = ({
  size = 'large',
  style = {},
  color = COLORS.blue,
  ...props
}: IGlobalLoader & ViewProps): JSX.Element => {
  const wrapperStyle = useStyle(() => [styles.container, style], [style]);
  return (
    <View style={wrapperStyle} {...props}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default GlobalLoader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
});
