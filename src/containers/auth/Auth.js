import * as React from "react";
import { Route, Switch } from "react-router-dom";

import Login from './Login'
import SingUp from './SingUp'

const Auth = ({match, children }) => {
  return (
    <>
    <Switch>
      <Route path={match.path + "/login"} component={Login} />
      <Route path={match.path + "/singup"} component={SingUp} />
    </Switch>
    </>
  );
};

export default Auth;
