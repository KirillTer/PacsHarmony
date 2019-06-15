import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "./configFireBase";

import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./store/configureStore";
import "typeface-roboto";

import App from "./App";

//Groups  Worklists  Folders  LauncherFilters  IntegrationActions  ConfigurationSettings  Audit  ExportImportTools
//InterpretingPhysicians  Exams  Locations  ExamCodes  Subspecialties

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
