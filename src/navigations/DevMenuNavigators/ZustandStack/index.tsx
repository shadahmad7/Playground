import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { routes } from './routes';
import { ZustandStackParamList } from './types';

const Stack = createStackNavigator<ZustandStackParamList>();

const ZustandStack: React.FC = () => {
  return (
      <Stack.Navigator>
        {routes.map(({ name, component, options }) => (
          <Stack.Screen
            key={name}
            name={name}
            component={component}
            options={options}
          />
        ))}
      </Stack.Navigator>
  );
};

export default ZustandStack;
