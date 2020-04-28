import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import query from '../queries/CurrentUser';
import mutation from '../mutations/Logout';

class Header extends Component {
    onLogoutClick = () => {
        this.props.mutate({});
    }

    renderButtons = () => {
        const { loading, user } = this.props.data;
        // While data is still being fetched from the endpoint
        if (loading) {
            return <div />;
        }

        // Condition to check if user is logged in or not
        if (user) {
            return(
                <li>
                    <a onClick={() => this.onLogoutClick()}>Logout</a>
                </li>
            );
        } else {
            return(
                <div>
                    <li>
                        <Link to="/signup">Signup</Link>
                    </li>
                    <li>
                        <Link to="/login">login</Link>
                    </li>
                </div>
            );
        }

    }

    render() {
        console.log(this.props);
        return(
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="logo left">
                        Home
                    </Link>
                    <ul className="right">
                        {this.renderButtons()}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default graphql(mutation) (
graphql(query) (Header)
);
