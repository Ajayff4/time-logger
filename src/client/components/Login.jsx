import React, { Component } from 'react';
import axios from 'axios';
import sha256 from 'sha256';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { login } from '../actions'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            user: {}
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { username, password } = this.state;
        axios.post('/login', {
            username: username,
            password: sha256(password)
        }).then(res => {
            this.setState({ user: res.data })
            const { username, password, fullname, email } = this.state.user
            this.props.login(username, password, fullname, email);
            this.props.history.push('/logs');
        }).catch(err => {
            console.error("Error in fetching login data: ", err);
        });
    }

    render() {
        return (
            <center>
                <div>
                    <fieldset>
                        <legend>Login</legend>
                        <form method="POST" onSubmit={this.onSubmit}>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="username"
                                value={this.state.username}
                                onChange={this.onChange}
                                required
                            /><br />
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="password"
                                value={this.state.password}
                                onChange={this.onChange}
                                required
                            /><br />
                            <button type="submit">Login</button>
                        </form>
                    </fieldset>
                </div>
            </center>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password, fullname, email) => dispatch(login(username, password, fullname, email))
    }
}

export default connect(null, mapDispatchToProps)(withRouter(Login));