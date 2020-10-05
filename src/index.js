import React from 'react';
import ReactDOM from 'react-dom';
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'; we will re-introduce later
// import { createStore, applyMiddleware } from 'redux'; we will re-introduce later

import Routes from './pages/Routes';

// const client = new ApolloClient({
//   uri: 'http://localhost:3000/graphql', we will re-introduce later
//   cache: new InMemoryCache()
// });

const App = () => (
  // <ApolloProvider client={client} store={store}> we will re-introduce later
    <React.Fragment>
      <Routes />
    </React.Fragment>
  //</ApolloProvider> we will re-introduce later
);

ReactDOM.render(<App />, document.getElementById('root'));
