import { Route, Switch } from "react-router-dom";
import { Home } from "../Home";
import { Page2 } from "../Page2";
import { page1Routes } from "./Page1Routes";
import { page2Routes } from "./Page2Routes";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={(props) => {
          const { url } = props.match;
          return (
            <Switch>
              {page1Routes.map((page1Route) => {
                return (
                  <Route
                    key={page1Route.path}
                    path={`${url}${page1Route.path}`}
                    exact={page1Route.exact}
                    render={() => {
                      return page1Route.children;
                    }}
                  />
                );
              })}
            </Switch>
          );
        }}
      />
      <Route
        path="/page2"
        render={(props) => {
          const { url } = props.match;
          return (
            <Switch>
              {page2Routes.map((route) => {
                return (
                  <Route
                    key={route.path}
                    path={`${url}${route.path}`}
                    exact={route.exact}
                    render={() => {
                      return route.children;
                    }}
                  />
                );
              })}
            </Switch>
          );
        }}
      />
    </Switch>
  );
};
