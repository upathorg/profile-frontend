import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Routes from "./pages/Routes";
import "./styles/index.scss";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <React.Fragment>
      <Routes />
    </React.Fragment>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
