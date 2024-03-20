import {StyleSheet} from 'react-native';

import COLORS from './colors';

export default StyleSheet.create({
  wrapperContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  grayContainer: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: COLORS.gray,
  },
  flexGrow: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  empty: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#eee',
  },
  bgSnow: {
    backgroundColor: '#ffffff',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  alignCenter: {
    alignItems: 'center',
  },
  pv: {
    paddingVertical: 20,
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  alignSelfStart: {
    alignSelf: 'flex-start',
  },
  justifyContentAround: {
    justifyContent: 'space-around',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifyContentStart: {
    justifyContent: 'flex-start',
  },
  justifyContentEnd: {
    justifyContent: 'flex-end',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  subTitle: {
    // fontFamily: FONTS.SFRegular,
    // color: COLORS.black,
    fontSize: 18,
    fontWeight: '700',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  container: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowOpacity: 0.15,
    shadowRadius: 15,
    shadowOffset: {height: -4, width: 0},
    shadowColor: '#000',
    alignItems: 'center',
  },
  shadow: {
    // backgroundColor: COLORS.snow,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {height: 4, width: 0},
    // elevation: 3,
  },
  tabBarUnderlineStyle: {
    // backgroundColor: COLORS.red100,
    height: 1,
  },
  tabBarTextStyle: {
    fontWeight: '300',
    // fontSize: 12,
    // fontFamily: FONTS.SFRegular,
  },
  textCenter: {
    textAlign: 'center',
  },
  textRight: {
    textAlign: 'right',
  },
  borderBottom: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  },
  borderTop: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#ddd',
  },
  textShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  overlayLoader: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: COLORS.white,
  },
  footer: {
    backgroundColor: COLORS.white,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: COLORS.red,
    marginTop: 5,
  },
  ph: {
    paddingHorizontal: 15,
  },
  ph30: {
    paddingHorizontal: 30,
  },
  mb5: {
    marginBottom: 5,
  },
  mb10: {
    marginBottom: 10,
  },
  mb15: {
    marginBottom: 15,
  },
  mb20: {
    marginBottom: 20,
  },
  mb30: {
    marginBottom: 30,
  },
  mb40: {
    marginBottom: 40,
  },
  mb50: {
    marginBottom: 50,
  },
  mt5: {
    marginTop: 5,
  },
  mt10: {
    marginTop: 10,
  },
  mt15: {
    marginTop: 15,
  },
  mt20: {
    marginTop: 20,
  },
  mt25: {
    marginTop: 25,
  },
  mt30: {
    marginTop: 30,
  },
  mv30: {
    marginVertical: 30,
  },
  mt40: {
    marginTop: 40,
  },
  mt50: {
    marginTop: 50,
  },
  mr5: {
    marginRight: 5,
  },
  mr8: {
    marginRight: 8,
  },
  mr10: {
    marginRight: 10,
  },
  mr15: {
    marginRight: 15,
  },
  mr20: {
    marginRight: 20,
  },
  mr30: {
    marginRight: 30,
  },
  mr50: {
    marginRight: 50,
  },
  ml5: {
    marginLeft: 5,
  },
  ml10: {
    marginLeft: 10,
  },
  ml8: {
    marginLeft: 8,
  },
  ml15: {
    marginLeft: 15,
  },
  ml20: {
    marginLeft: 20,
  },
  ml30: {
    marginLeft: 30,
  },
  ml50: {
    marginLeft: 50,
  },
  pl20: {
    paddingLeft: 20,
  },
  pl10: {
    paddingLeft: 10,
  },
  pr30: {
    paddingRight: 30,
  },
  pr20: {
    paddingRight: 20,
  },
  pr10: {
    paddingRight: 10,
  },
  pr15: {
    paddingRight: 15,
  },
  pt30: {
    paddingTop: 30,
  },
  pt70: {
    paddingTop: 70,
  },
  pt20: {
    paddingTop: 20,
  },
  pt10: {
    paddingTop: 10,
  },
  pt5: {
    paddingTop: 5,
  },
  pb20: {
    paddingBottom: 20,
  },
  pb30: {
    paddingBottom: 30,
  },
  pl40: {
    paddingLeft: 40,
  },
  p20: {
    padding: 20,
  },
  p10: {
    padding: 20,
  },
  pv10: {
    paddingVertical: 10,
  },
  pv20: {
    paddingVertical: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  fs12: {
    fontSize: 12,
  },
  fs13: {
    fontSize: 13,
  },
  fs14: {
    fontSize: 14,
  },
  fs15: {
    fontSize: 15,
  },
  fs16: {
    fontSize: 16,
  },
  fs17: {
    fontSize: 17,
  },
  fs18: {
    fontSize: 18,
  },
  fs19: {
    fontSize: 19,
  },
  fs20: {
    fontSize: 20,
  },
  fs21: {
    fontSize: 21,
  },
  fs22: {
    fontSize: 22,
  },
  fs32: {
    fontSize: 32,
  },
  fw200: {
    fontWeight: '200',
  },
  fw400: {
    fontWeight: '400',
  },
  fw500: {
    fontWeight: '500',
  },
  fw600: {
    fontWeight: '600',
  },
  fw700: {
    fontWeight: '700',
  },
});
