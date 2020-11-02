import { routePaths } from '../enums/route-paths';

export interface Guard {
  canActivate: () => boolean;
  redirectPath: routePaths;
}
