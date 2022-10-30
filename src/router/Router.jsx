import { Route, Switch } from "react-router-dom";
import { Home } from "../Home";
import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";
import { Page2 } from "../Page2";
import { page1Routes } from "./Page1Routes";

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
      <Route path="/page2">
        <Page2 />
      </Route>
    </Switch>
  );
};
