import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

import configureStore, { history } from './store/configureStore';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";
// or you can use `import gql from 'graphql-tag';` instead


const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
});

client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));

const store = configureStore();


ReactDOM.render(
    <
// @ts-ignore
    Provider store={store}  history={history}>
        <App />
    </Provider>    
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
