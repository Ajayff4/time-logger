import React, { Component } from 'react'
import axios from 'axios'
import * as actions from '../actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import Toast from './Toast'

class Signup extends Component {
    static propTypes = {
        signup: PropTypes.func.isRequired,
        failedToFetchData: PropTypes.func.isRequired
    }

    state = {
        username: "",
        fullname: "",
        email: "",
        password: "",
        repassword: "",
        toast: {
            status: false,
            title: "",
            type: "",
            message: ""
        }
    }

    renderToast = () => {
        setTimeout(() => this.setState({toast: false}),3000)
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const { username, fullname, email, password, repassword } = this.state
       
        if (password === repassword) {
            axios.post('http://localhost:5000/rest/users/signup',{
                username: username,
                fullname: fullname,
                email: email,
                password: password
            },{
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            })
            .then(res => {
                this.props.signup()
                this.setState({
                    ...this.state,
                    toast: {
                        ...this.state.toast,
                        status: true,
                        title: "Signup",
                        type: "toastSuccess",
                        message: "Signup Successful."
                    }
                })
                this.renderToast()
                this.props.history.push('/login')
            }).catch(err => {
                this.setState({
                    ...this.state.toast,
                    status:true,
                    title: "Signup",
                    type: "toastSuccess",
                    message: "Signup Successful."
                })
                this.renderToast()
                this.props.failedToFetchData(`${err}`);
            })
        }
    }

    render() {
        return (
            <center>
                <div>
                    {this.state.toast.status? 
                        <Toast
                            title={this.state.toast.title}
                            type={this.state.toast.type}
                            message={this.state.toast.message} 
                        />
                    :null}
                    <fieldset>
                        <legend>Signup</legend>
                        <form 
                            method="POST" 
                            onSubmit={this.onSubmit} 
                            autoComplete="off"
                        >
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
                                autoComplete="off"
                            /><br />
            
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="email"
                                value={this.state.email}
                                onChange={this.onChange}
                                required
                                autoComplete="off"
                            /><br />

                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="password"
                                value={this.state.password}
                                onChange={this.onChange}
                                required
                                style={{borderBlockColor: 'lime'}}
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

const mapDispatchToProps = dispatch => {
    return {
        failedToFetchData: (error) => dispatch(actions.failedToFetchData(error)),
        signup: () => dispatch(actions.signup())
    }
}

export default connect(null, mapDispatchToProps)(withRouter(Signup))