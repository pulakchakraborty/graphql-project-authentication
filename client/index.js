import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'http://localhost:4000/'
});

const client = new ApolloClient({
    cache,
    link
});

const Root = () => {
    return (
        <ApolloProvider client={client}>
            <div>
                React Frontend
            </div>
        </ApolloProvider>
    );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
