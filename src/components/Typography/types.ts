import {StyleProp, TextProps, TextStyle} from 'react-native';

export interface PProps extends TextProps {
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  weight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  size?: number;
  color?: string;
  lineHeight?: number;
  style?: StyleProp<TextStyle>;
}
