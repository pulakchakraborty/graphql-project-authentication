import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import query from '../queries/CurrentUser';

class Header extends Component {
    renderButtons = () => {
        const { loading, user } = this.props.data;
        // While data is still being fetched from the endpoint
        if (loading) {
            return <div />;
        }

        // Condition to check if user is logged in or not
        if (user) {
            return(
                <div>Logout</div>
            );
        } else {
            return(
                <div>User not logged in</div>
            );
        }

    }

    render() {
        console.log(this.props);
        return(
            <nav>
                <div className="nav-wrapper">{this.renderButtons()}</div>
            </nav>
        );
    }
}

export default graphql(query) (Header);
