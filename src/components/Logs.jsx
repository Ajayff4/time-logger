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
            this.setState({logs: res.data.filter((log) => { return this.props.username===log.username})})
            this.props.getAllLogs(this.state.logs)
        })
        .catch(err => {
            this.props.failedToFetchData(`${err}`);
        })
    }

    componentDidMount() {
        this.fetchAllLogs();
    }

    handleCompletedLog = (logId) => {
        axios.put(`http://localhost:5000/rest/logs/${logId}`)
        .then(res=> {
            alert("log completed" + logId)
            this.fetchAllLogs();
            this.props.completedLog();
        }).catch(err => {
            this.props.failedToFetchData(`${err}`);
        })
    }

    handleDeleteLog = (logId) => {
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
                this.props.deletedLog()
            }
        }).catch(err => {
            this.props.failedToFetchData(`${err}`);
        })
    }

    render() {
        let tableData = []
        tableData.push(
            <tr key={"header"}>
                <td>Id</td>
                <td>User</td>
                <td>Tag</td>
                <td>Date</td>
                <td>Time</td>
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
            for (let field in log) {
                if(field==="id"){ logId = log[field] }
                if(field==="completed"){ isCompleted = log[field] }
                if(field!=="completed"){ row.push(<td key={field + log[field]}>{log[field]}</td>) }
            }
            row.push(
                <td key={i} id={"operations"}> 
                    <button id={isCompleted?"completedButtonOk":"completedButton"} disabled={isCompleted} name="completed" onClick={() => {this.handleCompletedLog(logId)}}>
                        {isCompleted?"Completed":"Click Me"}
                    </button>
                    <button id="deleteButton" name="delete" onClick={() => this.handleDeleteLog(logId)}>
                        Delete
                    </button>
                </td>
            )
            tableData.push(<tr key={logId}>{row}</tr >)
        })

        return (
            <>
            <div id="container">
                <h2>Logs Component</h2>
                <center>
                    {this.state.logs!==undefined && this.state.logs.length>0 ?
                    <div id="table-wrapper">
                        <div id="table-scroll">
                            <div className="container">
                                <table className="table table-dark table-striped">
                                    <tbody>
                                        {tableData}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    :
                    <h3>No Logs were found</h3>
                }
                    
                </center>
            </div>
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
        completedLog: () => dispatch(actions.completedLog()),
        deletedLog: () => dispatch(actions.deletedLog()),
        getAllLogs: (logs) => dispatch(actions.getAllLogs(logs)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logs)