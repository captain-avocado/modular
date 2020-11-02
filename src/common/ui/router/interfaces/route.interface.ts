import { FC } from 'react';
import { routePaths } from '../enums/route-paths';
import { Guard } from './guard.interface';

export interface Route {
  path: routePaths;
  component: FC;
  guards: Guard[];
}
