import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TextInputProps,
  TextStyle,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';

import {P} from '~components/Typography';
import {COLORS, FONTS, STYLES} from '~theme/index';

import CustomIcon from '../CustomIcon';

export type InputProps = {
  name?: string;
  isError?: boolean;
  errorText?: string;
  inputStyles?: TextStyle;
  isSearchable?: true;
  onChangeText?: (text: string, name?: string) => void;
} & TextInputProps;

const Input = ({
  value = '',
  placeholder,
  name,
  keyboardType = 'default',
  style,
  inputStyles,
  errorText,
  isSearchable,
  onChangeText,
  onFocus,
  onBlur,
  ...rest
}: InputProps) => {
  const [focus, setFocus] = useState<boolean>(!!value);

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    onFocus && onFocus(e);
    setFocus(true);
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    onBlur && onBlur(e);
    setFocus(false);
  };

  const handleChange = (text: string) => {
    onChangeText && onChangeText(text, name);
  };

  return (
    <>
      <View style={[styles.sectionStyle, style]}>
        {isSearchable && (
          <CustomIcon name="search" style={styles.searchIcon} size={18} />
        )}
        <View>
          <TextInput
            style={[
              styles.inputStyle,
              inputStyles,
              isSearchable && styles.inputSearch,
            ]}
            value={value}
            underlineColorAndroid="transparent"
            onChangeText={handleChange}
            placeholder={focus ? '' : placeholder}
            placeholderTextColor={COLORS.gray}
            keyboardType={keyboardType}
            blurOnSubmit={false}
            onBlur={handleBlur}
            onFocus={handleFocus}
            {...rest}
          />
        </View>
        {errorText ? (
          <P style={STYLES.errorText}>{errorText || 'Error ...'}</P>
        ) : null}
      </View>
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  sectionStyle: {
    minHeight: 40,
    marginTop: 10,
  },
  inputStyle: {
    color: COLORS.white,
    paddingLeft: 12,
    paddingRight: 18,
    fontSize: 16,
    fontFamily: FONTS.SFProDisplay,
    borderWidth: 0,
    height: 40,
    backgroundColor: COLORS.black100,
  },
  inputSearch: {
    paddingLeft: 40,
  },
  searchIcon: {
    position: 'absolute',
    width: 24,
    height: 24,
    top: 12,
    left: 12,
    zIndex: 1,
  },
});
