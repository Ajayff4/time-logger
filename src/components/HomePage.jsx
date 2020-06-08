import React, { Component } from 'react'
import { Switch, Route, Link, withRouter } from "react-router-dom"
import Login from './Login'
import Logs from './Logs'
import AddTag from './AddTag'
import Profile from './Profile'
import AddLog from './AddLog'
import Signup from './Signup'
import AddCategory from './AddCategory'
import * as actions from '../actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import PageNotFound from './PageNotFound'
import Home from './Home'

class HomePage extends Component {
    static propTypes = {
        isUserLoggedIn: PropTypes.bool.isRequired,
        username: PropTypes.string,
        fullname: PropTypes.string,
        email: PropTypes.string,
        logs: PropTypes.array,
        logout: PropTypes.func.isRequired,
        unsetCookie: PropTypes.func.isRequired
    }

    handleLogout = () => {
        this.props.unsetCookie()
        this.props.logout()
        this.props.history.push('/home')
    }
    render() {
        let cookieVerify = document.cookie.length;
        return (
            <div className="homeComponent">
            <nav id="menu-bar">
                    <center>
                        <ul>
                            {cookieVerify? (
                                <div>
                                    <li key="add-log"><Link to="/add-log"><button>Add Log</button></Link></li>
                                    <li key="logs"><Link to="/logs"><button>Logs</button></Link></li>
                                    <li key="profile"><Link to="/profile"><button>Profile</button></Link></li>
                                    <li><button onClick={this.handleLogout}>Logout</button></li>
                                </div>
                            ) : (
                                <div>
                                    <li key="home"><Link to="/home"><button>Home</button></Link></li>
                                    <li key="login"><Link to="/login"><button>Login</button></Link></li>
                                    <li key="signup"><Link to="/signup"><button>Signup</button></Link></li>
                                </div>
                            )}
                        </ul>
                    </center>
                    <Switch>
                        <Route path="/" exact ><Home /></Route>
                        <Route path="/home" ><Home /></Route>
                        <Route path="/logs">{cookieVerify?<Logs />:<PageNotFound />}</Route>
                        <Route path="/add-log"><AddLog /></Route>
                        <Route path="/add-tag">{cookieVerify?<AddTag />:<PageNotFound />}</Route>
                        <Route path="/add-category">{cookieVerify?<AddCategory />:<PageNotFound />}</Route>
                        <Route path="/profile">{cookieVerify?
                            <Profile username={this.props.username} fullname={this.props.fullname} email={this.props.email} logs={this.props.logs} />:<PageNotFound />}
                        </Route>
                        <Route path="/login"><Login /></Route>
                        <Route path="/signup"><Signup /></Route>
                    </Switch>
            </nav>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.user.loggedIn,
        username: state.user.username,
        fullname: state.user.fullname,
        email: state.user.email,
        logs: state.log.logs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        unsetCookie: () => dispatch(actions.unsetCookie()),
        logout: () => dispatch(actions.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HomePage))