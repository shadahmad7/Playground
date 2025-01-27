import React from 'react';
import HomeRoute from '../../routes/HomeRoute';
import { MainStackParamList } from './types';

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
];
