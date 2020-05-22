import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './Login';
import Logs from './Logs';
import AddTag from './AddTag';
import Profile from './Profile';
import AddLog from './AddLog';
import Signup from './Signup';
import AddCategory from './AddCategory';

class Home extends Component {
    // handleErrors = (err) => {
    //     if (err.response) {
    //         console.log("Problem with response: ", err.response);
    //     } else if (err.request) {
    //         console.log("Problem with request: ", err.request);
    //     } else {
    //         console.log("Error: ", err.message);
    //     }
    // }

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
                        <li><button>Logout</button></li>
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
};

export default Home;