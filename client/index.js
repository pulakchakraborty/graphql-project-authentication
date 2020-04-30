import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/App';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';

const cache = new InMemoryCache();

const link = new HttpLink({
    uri: 'http://localhost:4000/graphql'
});

const client = new ApolloClient({
    cache,
    link
});

const Root = () => {
    return (
        <ApolloProvider client={client}>
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <Route path="login" component={LoginForm}></Route>
                    <Route path="signup" component={SignupForm}></Route>
                    <Route path="dashboard" component={Dashboard}></Route>
                </Route>
            </Router>
        </ApolloProvider>
    );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
