import React, { Component } from 'react'
import axios from 'axios';

class Logs extends Component {
    state = {
        logs: []
    }

    componentDidMount() {
        axios.get('/logs')
            .then(res => {
                this.setState({ logs: [...res.data] });
            }).catch(err => {
                console.log("Error in fetching logs", err);
            })
    }

    render() {
        console.log("logs: ", this.state.logs);

        let tableData = [];
        tableData.push(<tr key={"header"}><td>Id</td><td>Tag</td><td>Category</td><td>Date&Time</td><td>Duration</td><td>Log Details</td><td>Opeartions</td></tr>);

        // eslint-disable-next-line
        this.state.logs.map((log, i) => {
            let row = [];
            for (let field in log) {
                row.push(<td key={field + log[field]}>{log[field]}</td>)
            }
            row.push(<td><button id="editButton">Edit</button><button id="deleteButton">Delete</button></td>)
            tableData.push(<tr key={i + row}>{row}</tr >);
        });

        return (
            <>
                <h2>Logs Component</h2>
                <center>
                    <div className="container">
                        <table className="table table-dark table-striped">
                            <tbody>
                                {tableData}
                            </tbody>
                        </table>
                    </div>
                </center>
            </>
        )
    }
}

export default Logs;