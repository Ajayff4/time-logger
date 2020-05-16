import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './Login';
import Logs from './Logs';
import Tags from './Tags';
import Profile from './Profile';
import AddLog from './AddLog';

class Home extends Component {
    render() {
        return (
            <>
                <nav id="menu-bar">
                    <Router>
                        <ul>
                            <li key="login"><Link to="/login"><button>Login</button></Link></li>
                            <li key="add-log"><Link to="/add-log"><button>Add Log</button></Link></li>
                            <li key="logs"><Link to="/logs"><button>Logs</button></Link></li>
                            <li key="tags"><Link to="/tags"><button>Tags</button></Link></li>
                            <li key="profile"><Link to="/profile"><button>Profile</button></Link></li>
                            <li><button>Logout</button></li>
                        </ul>
                        {
                            <Switch>
                                <Route path="/login"><Login /></Route>
                                <Route path="/add-log"><AddLog /></Route>
                                <Route path="/logs"><Logs /></Route>
                                <Route path="/tags"><Tags /></Route>
                                <Route path="/profile"><Profile /></Route>
                            </Switch>
                        }
                    </Router>
                </nav>
            </>
        )
    }
};

export default Home;