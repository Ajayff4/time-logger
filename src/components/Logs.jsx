import React, { Component } from 'react'
import axios from 'axios'
import * as actions from '../actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Logs extends Component {
    static propTypes = {
        getAllLogs: PropTypes.func.isRequired,
        failedToFetchData: PropTypes.func.isRequired
    }    

    constructor(props) {
        super(props)
        this.state = {
            logs: []
        }
    }

    fetchAllLogs = () => {
        axios.get("http://localhost:5000/rest/logs")
        .then(res => {
            this.setState({logs: res.data})
            this.props.actions.getAllLogs(res.data)
        })
        .catch(err => {
            this.props.failedToFetchData(err);
        })
    }

    componentDidMount() {
        this.fetchAllLogs();
    }

    handleCompletedLog = (logId) => {
        let buttonArray = document.getElementById('operations').childElementCount;
        console.log("btn: ", buttonArray);
    }

    handleDeleteLog = (logId) => {
        console.log("delete: ", logId)
        axios.delete(`http://localhost:5000/rest/logs/${logId}`,
        {
            headers: {"Access-Control-Allow-Origin": "*"}
        })
        .then(res => {
            if(res.data != null) {
                alert(`logId ${logId} deleted!!!`)
                this.setState({
                    logs: this.state.logs.filter(log => log.id !== logId)
                })
            }
        }).catch(err => {
            this.props.failedToFetchData(err);
        })
    }

    render() {
        let tableData = []
        tableData.push(
            <tr key={"header"}>
                <td>Id</td>
                <td>Tag</td>
                <td>Date&Time</td>
                <td>Duration</td>
                <td>Log Details</td>
                <td>Opeartions</td>
            </tr>
        )

        // eslint-disable-next-line
        this.state.logs.map((log, i) => {
            let row = []
            let logId=undefined;
            let isCompleted = false;
            console.log(typeof log)
            for (let field in log) {
                //if(field==="username" && this.props.username!==log[field]){ continue; }
                if(field==="id"){ logId = log[field] }
                if(field==="completed" && log[field]===1){ isCompleted=true }
                row.push(<td key={field + log[field]}>{log[field]}</td>)
            }
            row.push(
                <td key={i} id={"operations"}> 
                    <button id="completedButton" disabled={!isCompleted} style={isCompleted? { color:'gray'}:{ color:'white' }} name="completed" onClick={() => {this.handleCompletedLog(logId)}}>
                        Completed
                    </button>
                    <button id="deleteButton" name="delete" onClick={() => this.handleDeleteLog(logId)}>
                        Delete
                    </button>
                </td>
            )
            isCompleted = false
            tableData.push(<tr key={logId}>{row}</tr >)
        })

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

const mapStateToProps = state => {
    return {
        username: state.user.username,
        logs: state.log.logs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        failedToFetchData: (err) => dispatch(actions.failedToFetchData(err)),
        getAllLogs: (logs) => dispatch(actions.getAllLogs(logs)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logs)