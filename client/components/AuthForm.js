import React, { Component } from 'react';

class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
    }

    onButtonClick = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        this.props.onLogin({ email, password });
    }

    render() {
        return(
            <div className="row">
                <form className="col s4">
                    <div className="input-field">
                        <input
                            placeholder="Email"
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                    </div>
                    <div className="input-field">
                        <input
                            placeholder="Password"
                            type="password"
                            value={this.state.password}
                            onChange={e => this.setState({ password: e.target.value })}
                        />
                    </div>
                    {/* Next div displays the login errors */}
                    <div className="errors">
                        {this.props.errors.map(error => <div key={error}>{error}</div>)}
                    </div>
                    <button onClick={this.onButtonClick} className="btn">Submit</button>
                </form>
            </div>
        );
    }
};

export default AuthForm;
