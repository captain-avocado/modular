import { JokesDashboard } from '../../../../modules/jokes-dashboard/ui/containers/jokes-dashboard/JokesDashboard';
import { SavedJokes } from '../../../../modules/saved-jokes/ui/containers/saved-jokes/SavedJokes';
import { routePaths } from '../enums/route-paths';
import { Route } from '../interfaces/route.interface';

export const routes: Route[] = [
  {
    path: routePaths.SAVED_JOKES,
    component: SavedJokes,
    guards: []
  },
  {
    path: routePaths.JOKES_DASHBOARD,
    component: JokesDashboard,
    guards: []
  }
];
