import { JokesDashboard } from '../../../../modules/jokes-dashboard/ui/containers/jokes-dashboard/JokesDashboard';
import { SavedJokes } from '../../../../modules/saved-jokes/ui/containers/saved-jokes/SavedJokes';
import { routePaths } from '../enums/route-paths';
import { Route } from '../interfaces/route.interface';
import Login from '../../../../modules/auth/ui/pages/Login';

export const routes: Route[] = [
  {
    path: routePaths.SAVED_JOKES,
    component: SavedJokes,
    guards: []
  },
  {
    path: routePaths.LOGIN,
    component: Login,
    guards: []
  },

  // keep the order for route redirect detection
  {
    path: routePaths.JOKES_DASHBOARD,
    component: JokesDashboard,
    guards: []
  }
];
