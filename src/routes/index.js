import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Notfound from "../pages/notFound";

const Approutes = () => {
  return (
    <Switch>
        <Route exact path="/hello-world" component={Dashboard} />
        <Route path="/not-found" component={Notfound} />
        <Redirect path='*' to='/not-found' />
    </Switch>
  );
};

export default Approutes;
