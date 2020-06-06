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
        logout: PropTypes.func.isRequired
    }

    handleLogout = () => {
        this.props.logout()
        this.props.history.push('/home')
    }
    render() {
        return (
            <div className="homeComponent">
            <nav id="menu-bar">
                    <center>
                        <ul>
                            {this.props.isUserLoggedIn ? (
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
                        <Route path="/home" exact ><Home /></Route>
                        <Route path="/logs">{this.props.isUserLoggedIn?<Logs />:<PageNotFound />}</Route>
                        <Route path="/add-log"><AddLog /></Route>
                        <Route path="/add-tag">{this.props.isUserLoggedIn?<AddTag />:<PageNotFound />}</Route>
                        <Route path="/add-category">{this.props.isUserLoggedIn?<AddCategory />:<PageNotFound />}</Route>
                        <Route path="/profile">{this.props.isUserLoggedIn?<Profile />:<PageNotFound />}</Route>
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
        isUserLoggedIn: state.user.loggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HomePage))