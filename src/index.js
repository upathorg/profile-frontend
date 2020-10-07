import React from "react";
import ReactDOM from "react-dom";
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'; we will re-introduce later
// import { createStore, applyMiddleware } from 'redux'; we will re-introduce later

import Routes from "./pages/Routes";
import { Provider } from "react-redux";
import store from "./store";

// const client = new ApolloClient({
//   uri: 'http://localhost:3000/graphql', we will re-introduce later
//   cache: new InMemoryCache()
// });

const App = () => (
  <Provider store={store}>
    <React.Fragment>
      <Routes />
    </React.Fragment>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
