import React, { Component } from 'react';
import AuthForm from './AuthForm';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';

import mutation from '../mutations/Login';
import query from '../queries/CurrentUser';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { errors: [] };
    }

    onLogin = ({ email, password }) => {
        this.props.mutate({
            variables: {
                email: email,
                password: password
            },
            refetchQueries: [{ query }]
        }).catch(res => {
            const errors = res.graphQLErrors.map(error => error.message);
            this.setState({ errors });
        });
    }

    componentWillUpdate(nextProps) {
        console.log('from login component: ', this.props, nextProps );
        /* Redirect the user to dashboard based on the this.props and nextProps
            Trigger condition: User is successfully authenticated
        */
        if (!this.props.data.user && nextProps.data.user) {
            // Forceful redirect to dashboard
            hashHistory.push('/dashboard');
        }
    }

    render() {
        return(
            <div>
                <h4>Login</h4>
                <AuthForm errors={this.state.errors} onFormSubmit={this.onLogin} />
            </div>
        );
    }
};

export default graphql(query) (
    graphql(mutation) (LoginForm)
);
