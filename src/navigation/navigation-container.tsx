import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import TabStack from '~navigation/tab-stack';

const Navigation = () => {
  return (
    <NavigationContainer>
      <TabStack />
    </NavigationContainer>
  );
};

export default Navigation;
