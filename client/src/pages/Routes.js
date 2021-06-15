import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import loadable from "@loadable/component";

const Landing = loadable(() => import("./Landing"));
const Admin = loadable(() => import("./_Admin"));

const FourZeroFour = loadable(() => import("./404"));

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />

      <Route exact path="/login" component={Admin} />
      <Route component={FourZeroFour} />
    </Switch>
  );
};
