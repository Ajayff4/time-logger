import React, { Component } from 'react';
import axios from 'axios';
import sha256 from 'sha256';
import { withRouter } from 'react-router-dom';

class Login extends Component {

    state = {
        username: "",
        password: ""
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
            console.log("response: ", res.data);
            this.props.history.push('/logs');
        }).catch(err => {
            console.error("post: ", err);
            //this.props.handleErrors(err);
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

export default withRouter(Login);