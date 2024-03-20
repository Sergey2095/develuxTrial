import React, {ReactElement} from 'react';
import {TextProps} from 'react-native';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';

import icons from '~assets/icons/icons.json';
import icoMoonConfig from '~assets/icons/selection.json';
import {COLORS} from '~theme/index';

const IcoMoonIcon = createIconSetFromIcoMoon(icoMoonConfig);

export type IconNameType = keyof typeof icons;

export interface IconProps extends TextProps {
  size?: number;
  name: IconNameType;
  color?: string;
}
const CustomIcon = ({
  color = COLORS.white,
  ...props
}: IconProps): ReactElement => <IcoMoonIcon color={color} {...props} />;

export default CustomIcon;
