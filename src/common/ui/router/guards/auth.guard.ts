import { Guard } from '../interfaces/guard.interface';
import { routePaths } from '../enums/route-paths';

const canActivateAuth = (): boolean => {
  // implement isAuth() logic
  return true;
};

export const authGuard: Guard = {
  canActivate: canActivateAuth,
  // implement login page redirect
  redirectPath: routePaths.JOKES_DASHBOARD
};
