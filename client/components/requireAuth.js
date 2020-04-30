import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';

import query from '../queries/CurrentUser';

export default (WrappedComponent) => {
    class requireAuth extends Component {
        componentWillUpdate(nextProps) {
            // If the query has finished loading and if user is logged in
            if (!nextProps.data.loading && !nextProps.data.user) {
                // redirect the user forcefully to login screen
                hashHistory.push('/login');
            }
        }

        render() {
            return(
                <WrappedComponent {...this.props} />
            );
        }
    }

    return graphql(query) (requireAuth);
};
