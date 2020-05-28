import React, { Component } from 'react';
import axios from 'axios';
import sha256 from 'sha256';
import { signup } from '../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'

class Signup extends Component {
    state = {
        username: "",
        fullname: "",
        email: "",
        password: "",
        repassword: ""
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { username, fullname, email, password, repassword } = this.state;
        if (password === repassword) {
            axios.post('/signup', {
                fullname: fullname,
                username: username,
                email: email,
                password: sha256(password)
            }).then(res => {
                console.log(res.status);
                alert("ok");
                this.props.signup();
                this.props.history.push('/login');
            }).catch(err => {
                console.error("post: ", err);
            });
        }
    }

    render() {
        return (
            <center>
                <div>
                    <fieldset>
                        <legend>Signup</legend>
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
                                type="text"
                                name="fullname"
                                id="fullname"
                                placeholder="fullname"
                                value={this.state.fullname}
                                onChange={this.onChange}
                                required
                            /><br />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="email"
                                value={this.state.email}
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
                            <input
                                type="password"
                                name="repassword"
                                id="repassword"
                                placeholder="repeat password"
                                value={this.state.repassword}
                                onChange={this.onChange}
                                required
                            /><br />
                            <button type="submit">Sign Up</button>
                        </form>
                    </fieldset>
                </div>
            </center>
        )
    }
}

Signup.propTypes = {
    signup: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => {
    return {
        signup: () => dispatch(signup())
    }
}

export default connect(null, mapDispatchToProps)(withRouter(Signup));