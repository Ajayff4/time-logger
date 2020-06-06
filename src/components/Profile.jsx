import React from 'react'

export default function Profile(props) {
    let completed = 0
    let pending = 0
    let dayLogTime = 0
    let totalLogTime = 0
    //eslint-disable-next-line
    props.logs.map(log => {
        // eslint-disable-next-line
        if(log.completed==1) completed++
        else pending++
        
        // eslint-disable-next-line
        let today = new Date().toLocaleDateString().split("/")
        today = today[2] + "-" + today[1] + "-" + today[0];
        if(log.date===today.toString()) {
            dayLogTime += log.duration
        }
        totalLogTime += log.duration
    })
    return (
        <div>
            <center>
            <div className="container">
                <table className="table table-dark table-striped">
                <tbody>
                    <tr>
                        <th>#</th><th>Info</th><th>Description</th>
                    </tr>
                    <tr>
                        <td>1</td><td>Username</td><td>{props.username}</td>
                    </tr>
                    <tr>
                        <td>2</td><td>Fullname</td><td>{props.fullname}</td>
                    </tr>
                    <tr>
                        <td>3</td><td>Email</td><td>{props.email}</td>
                    </tr>
                    <tr>
                        <td>4</td><td>Completed</td><td>{completed>1 ? `${completed} logs`:`${completed} log`}</td>
                    </tr>
                    <tr>
                        <td>5</td><td>Pending</td><td>{pending>1 ? `${pending} logs`:`${pending} log`}</td>
                    </tr>
                    <tr>
                        <td>6</td><td>Logtime today</td><td>{dayLogTime} minutes</td>
                    </tr>
                    <tr>
                        <td>7</td><td>Total logtime</td><td>{totalLogTime} minutes</td>
                    </tr>
                    <tr>
                        <td>8</td><td>Percentage</td><td>{((dayLogTime/1440)*100).toFixed(2)} %</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            </center>
        </div>        
    )
}