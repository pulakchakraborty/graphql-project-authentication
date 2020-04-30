import React, { Component } from 'react';
import AuthForm from './AuthForm';
import { graphql } from 'react-apollo';

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

    render() {
        return(
            <div>
                <h4>Login</h4>
                <AuthForm errors={this.state.errors} onLogin={this.onLogin} />
            </div>
        );
    }
};

export default graphql(mutation) (LoginForm);
