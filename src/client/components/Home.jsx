import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Login from './Login'
import Logs from './Logs'
import AddTag from './AddTag'
import Profile from './Profile'
import AddLog from './AddLog'
import Signup from './Signup'
import AddCategory from './AddCategory'
import { logout } from '../actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Home extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props)
    }
    handleLogout = () => {
        this.props.logout()
    }
    render() {
        return (
            <nav id="menu-bar">
                <Router>
                    <ul>
                        <li key="login"><Link to="/login"><button>Login</button></Link></li>
                        <li key="add-log"><Link to="/add-log"><button>Add Log</button></Link></li>
                        <li key="logs"><Link to="/logs"><button>Logs</button></Link></li>
                        <li key="profile"><Link to="/profile"><button>Profile</button></Link></li>
                        <li key="signup"><Link to="/signup"><button>Signup</button></Link></li>
                        <li><button onClick={this.handleLogout}>Logout</button></li>
                    </ul>
                    {
                        <Switch>
                            <Route path="/login"><Login /></Route>
                            <Route path="/add-log"><AddLog /></Route>
                            <Route path="/logs"><Logs /></Route>
                            <Route path="/add-tag"><AddTag /></Route>
                            <Route path="/add-category"><AddCategory /></Route>
                            <Route path="/profile"><Profile /></Route>
                            <Route path="/signup"><Signup /></Route>
                        </Switch>
                    }
                </Router>
            </nav>
        )
    }
}

Home.propTypes = {
    logout: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(Home)