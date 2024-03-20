import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useCallback} from 'react';
import {View} from 'react-native';

import CustomIcon from '~components/CustomIcon';
import {P} from '~components/Typography';
import SearchScreen from '~screens/SearchScreen';
import StockScreen from '~screens/StockScreen';
import {IconNameType} from '~src/components/CustomIcon/CustomIcon';
import {COLORS, STYLES} from '~theme/index';

const Tab = createBottomTabNavigator();

function TabStack() {
  const tabBarIcon = useCallback(
    (focused: boolean, iconName: IconNameType, label: string) => {
      const color = focused ? COLORS.blue : COLORS.gray;
      return (
        <View style={STYLES.alignCenter}>
          <CustomIcon size={24} color={color} name={iconName} />
          <P size={12} color={color}>
            {label}
          </P>
        </View>
      );
    },
    [],
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: COLORS.black100},
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            tabBarIcon(focused, 'stock-arrow', 'Stocks'),
        }}
        name="StockScreen"
        component={StockScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => tabBarIcon(focused, 'search', 'Search'),
        }}
        name="SearchScreen"
        component={SearchScreen}
      />
    </Tab.Navigator>
  );
}

export default TabStack;
