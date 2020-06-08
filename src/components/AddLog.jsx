import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import * as actions from '../actions'
import PropTypes from 'prop-types'
/*
Have to work on log duration
*/

class AddLog extends Component {
    static propTypes = {
        username: PropTypes.string.isRequired,
        addLog: PropTypes.func.isRequired,
        failedToFetchData: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
        this.state = {
            tag: "--",
            date: "",
            time: "",
            duration: 0,
            log_details: "",
            tags: []
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        let curDate = new Date().toISOString().split('T')[0].toString();
        e.preventDefault()
        const {tag, duration, log_details } = this.state 
        //Adding new log
        axios.post('http://localhost:5000/rest/logs', {
            username: this.props.username,
            tag: tag,
            date: curDate,
            duration: duration,
            completed: false,
            log_details: log_details
        },{
            headers: {"Content-type": "application/json"}
        }).then(res => {
            this.props.addLog()
            if(res.data != null) {
                this.setState(this.initialState)
                alert("Log Saved Successfully")
            }
            this.props.history.push('/logs')
        }).catch(err => {
            this.props.failedToFetchData(`${err}`);
        })
        
    }

    componentDidMount() {
        //Getting all tags
        axios.get('http://localhost:5000/rest/tags')
        .then(res => {
            if(res.data != null) {
                let tagArray = []
                // eslint-disable-next-line
                res.data.map((tagCatObj, index) => {
                    for(let key in tagCatObj) {
                        if(key==="tag"){
                            tagArray.push(tagCatObj[key])
                        }
                    } 
                })
                this.setState({tags: [...tagArray]})
            }
        }).catch(err => {
            this.props.failedToFetchData(`${err}`);
        })


        if(this.props.editLogId) {
            this.handleEditButton(this.props.editLogId)
        }
    }

    createTag = () => {
        this.props.history.push("/add-tag")
    }

    render() {
        return (
            <>
                <center>
                    <h2>Add Log Component</h2>
                    <div id="form-css">
                        <form method="POST" onSubmit={this.onSubmit} >
                            <select
                                id="add-log-dropdown"
                                name="tag"
                                value={this.state.tag}
                                onChange={this.onChange}
                                required
                            >
                                <option key="choose" value="--">Choose tag</option>
                                {
                                    Object.entries(this.state.tags).map((tag, index) => {
                                        return <option key={tag[1]} value={tag[1]}>{tag[1]}</option>
                                    })
                                }
                            </select><br />
                            <textarea
                                name="log_details"
                                id="add-log-details"
                                placeholder="Input details of log(optional)"
                                value={this.state.log_details}
                                onChange={this.onChange}
                                required
                            /><br />
                            <button type="submit" id="add-log-submit">Add Log</button>
                            <br />
                            {/* eslint-disable-next-line */}
                            <a href="#" onClick={this.createTag}>Create a new tag</a>
                        </form>
                    </div>
                </center>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.user.username
    }
}

const mapDispatchToProps = dispatch => {
    return {
        failedToFetchData: (error) => dispatch(actions.failedToFetchData(error)),
        addLog: () => dispatch(actions.addLog())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddLog))