import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';

import query from '../queries/CurrentUser';

export default (WrappedComponent) => {
    const requireAuth = (props) => {
        if (props.data.user) {
            return(
                <WrappedComponent {...this.props} />
            );
        }
        return (
            <div>
              Please log in to see this page.
            </div>
        );
    }

    return graphql(query) (requireAuth);
};
