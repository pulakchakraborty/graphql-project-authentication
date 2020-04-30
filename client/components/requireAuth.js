import React from 'react';
import { graphql } from 'react-apollo';

import query from '../queries/CurrentUser';

export default (WrappedComponent) => {
    const requireAuth = (props) => {
        const { data: { loading, user } } = props;
        if (!loading && !user) {
            return(
                <div>You must login to view this page</div>
            );
        }
        return(
            <WrappedComponent {...props} />
        );
    }

    return graphql(query) (requireAuth);
};
