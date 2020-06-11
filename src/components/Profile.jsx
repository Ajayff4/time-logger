import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Profile extends Component {
    static propTypes = {
        username: PropTypes.string,
        fullname: PropTypes.string,
        email: PropTypes.string,
        logs: PropTypes.array
    }
    render() {
        let completed = 0
        let pending = 0
        let dayLogTime = 0
        let totalLogTime = 0
        if(this.props.logs!==undefined && this.props.logs.length>0){
            //eslint-disable-next-line
            this.props.logs.map(log => {
                //eslint-disable-next-line
                log.completed==1? completed++ : pending++;
                
                let today = new Date().toLocaleDateString().split("/")
                today = today[2] + "-" + today[1] + "-" + today[0];
                if(log.date===today.toString()) {
                    dayLogTime += log.duration
                }
                totalLogTime += log.duration
            })
        }
        //const tableComponent = ;
        return (
            <div id="profileComponent">
                <center>
                    <div className="container">
                        <table className="table table-dark table-striped">
                        <tbody>
                            <tr key="header">
                                <th>#</th><th>Info</th><th>Description</th>
                            </tr>
                            <tr key="username">
                                <td>1</td><td>Username</td><td>{this.props.username}</td>
                            </tr>
                            <tr key="fullname"> 
                                <td>2</td><td>Fullname</td><td>{this.props.fullname}</td>
                            </tr>
                            <tr key="email">
                                <td>3</td><td>Email</td><td>{this.props.email}</td>
                            </tr>
                            <tr key="completed">
                                <td>4</td><td>Completed</td><td>{completed>1 ? `${completed} logs`:`${completed} log`}</td>
                            </tr>
                            <tr key="pending">
                                <td>5</td><td>Pending</td><td>{pending>1 ? `${pending} logs`:`${pending} log`}</td>
                            </tr>
                            <tr key="today">
                                <td>6</td><td>Logtime today</td><td>{dayLogTime} minutes</td>
                            </tr>
                            <tr key="total">
                                <td>7</td><td>Total logtime</td><td>{totalLogTime} minutes</td>
                            </tr>
                            <tr key="performance">
                                <td>8</td><td>Percentage</td><td>{((dayLogTime/1440)*100).toFixed(2)} %</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </center>
            </div>        
        )
    }
}