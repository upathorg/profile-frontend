import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Routes from "./pages/Routes";
import "./styles/index.scss";
import store from "./store";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql", // TODO: replace endpoint
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <React.Fragment>
        <Routes />
      </React.Fragment>
    </Provider>
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
