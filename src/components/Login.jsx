import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'
import PropTypes from 'prop-types'
import axios from 'axios'

class Login extends Component {
    static propTypes = {
        setUserData: PropTypes.func.isRequired,
        failedToFetchData: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const {username, password} = this.state;
        axios.post("http://localhost:5000/rest/users/login", {
            username: username,
            password: password
        }).then(res => {
            this.setState({ user: res.data })
            this.props.setUserData(res.data.username, res.data.fullname, res.data.email)
            this.props.history.push('/logs')
        }).catch(err => {
            console.log("login", err)
            this.props.failedToFetchData("Error in logging in")
        })
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

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.loggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        failedToFetchData: (error) => dispatch(actions.failedToFetchData(error)),
        setUserData: (username, password) => dispatch(actions.setUserData(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login))