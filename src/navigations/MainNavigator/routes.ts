import React from 'react';
import HomeRoute from '../../routes/HomeRoute';
import { MainStackParamList } from './types';
import ZustandStack from '../DevMenuNavigators/ZustandStack';

export const routes: {
  name: keyof MainStackParamList;
  component: React.ComponentType<any>;
  options?: object;
}[] = [
  {
    name: 'Home',
    component: HomeRoute,
    options: { title: 'Home' },
  },
  {
    name: 'Zustand',
    component: ZustandStack,
    options: { title: 'ZustandStack', headerShown: false },
  },
];
