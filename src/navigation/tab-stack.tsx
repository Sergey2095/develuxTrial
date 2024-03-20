import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useCallback} from 'react';
import {P} from '~components/Typography';
import StockScreen from '~screens/StockScreen';
import SearchScreen from '~screens/SearchScreen';

const Tab = createBottomTabNavigator();

function TabStack() {
  const tabBarIcon = useCallback((focused: boolean, iconName: any) => {
    return <P style={{color: focused ? 'red' : 'black'}}>{iconName}</P>;
  }, []);

  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => tabBarIcon(focused, 'stock'),
        }}
        name="StockScreen"
        component={StockScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => tabBarIcon(focused, 'search'),
        }}
        name="SearchScreen"
        component={SearchScreen}
      />
    </Tab.Navigator>
  );
}

export default TabStack;
