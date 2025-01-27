import React from 'react';
import { ZustandStackParamList } from './types';
import ZustandRoute from '../../../routes/DevMenusRoutes/ZustandRoute';

export const routes: {
  name: keyof ZustandStackParamList;
  component: React.ComponentType<any>;
  options?: object;
}[] = [
  {
    name: 'Zustand',
    component: ZustandRoute,
    options: { title: 'Zustand', headerShown: false },
  },
];
