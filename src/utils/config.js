import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});
export const LOGIN = `${process.env.REACT_APP_LOGIN_URL_ENDPOINT}`;
export const SIGN_UP = `${process.env.REACT_APP_SIGN_IN_URL_ENDPOINT}`;
