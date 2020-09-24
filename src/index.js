import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Routes from './pages/Routes';
import rootReducer from './redux/reducer/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
});

const App = () => (
  <ApolloProvider client={client} store={store}>
    <Routes />
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
