import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import AuthForm from './AuthForm';
import mutation from '../mutations/Signup';
import query from '../queries/CurrentUser';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = { errors: [] };
    }

    onSignup = ({ email, password }) => {
        this.props.mutate({
            variables: {
                email,
                password
            },
            refetchQueries: [{ query }]
        }).catch(res => {
            const errors = res.graphQLErrors.map(error => error.message);
            this.setState({ errors })
        });
    }

    render() {
        return(
            <div>
                <h4>Signup</h4>
                <AuthForm errors={this.state.errors} onFormSubmit={this.onSignup} />
            </div>
        );
    }
}

export default graphql(mutation) (SignupForm);
