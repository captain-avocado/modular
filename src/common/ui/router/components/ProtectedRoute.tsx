import React, { FC } from 'react';
import { Redirect, Route as ReactRoute } from 'react-router-dom';
import { Route } from '../interfaces/route.interface';

interface Props {
  route: Route;
}

const ResolveRouteComponent: FC<Props> = ({ route }: Props) => {
  if (route.guards) {
    for (const guard of route.guards) {
      if (!guard.canActivate()) {
        return <Redirect to={guard.redirectPath} />;
      }
    }
  }
  return <route.component />;
};

// eslint-disable-next-line
export const ProtectedRoute: any = (route: Route) => {
  if (route.guards && route.guards.length) {
    return (
      <ReactRoute
        path={route.path}
        render={() => <ResolveRouteComponent route={route} />}
      />
    );
  }
  return <ReactRoute path={route.path} render={() => <route.component />} />;
};
