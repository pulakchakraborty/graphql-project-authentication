import React, { Component } from 'react';
import AuthForm from './AuthForm';
import { graphql } from 'react-apollo';

import mutation from '../mutations/Login';
import query from '../queries/CurrentUser';

class LoginForm extends Component {
    onLogin = ({ email, password }) => {
        this.props.mutate({
            variables: {
                email: email,
                password: password
            },
            refetchQueries: [{ query }]
        });
    }

    render() {
        return(
            <div>
                <h4>Login</h4>
                <AuthForm onLogin={this.onLogin} />
            </div>
        );
    }
};

export default graphql(mutation) (LoginForm);
