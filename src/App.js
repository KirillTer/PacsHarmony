import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React from 'react'
import { Route, Switch } from "react-router-dom";

import Layout from "./containers/main-page/Layout";
import Auth from "./containers/auth/Auth";
import Users from "./containers/Users";
import Dashboard from "./containers/Dashboard";
import ProtectedRouter from "./components/ProtectedRoute";

const App = () => {
    return (
        <Layout>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/auth" component={Auth} />
          <ProtectedRouter path="/users" component={Users} />
        </Switch>
      </Layout>
    )
}

export default App