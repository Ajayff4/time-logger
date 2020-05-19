import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

/*
Have to work on log duration
*/

class AddLog extends Component {
    state = {
        tag: "",
        category: "--",
        date_time: "",
        duration: 0,
        log_details: "",
        tags: {}
    }

    componentDidMount() {
        if (this.state.tags !== {}) {
            axios.get("/tags")
                .then(res => {
                    console.log("tags fetched")
                    this.setState({ tags: { ...res.data } });
                }).catch(err => {
                    console.error("post cat: ", err);
                    //this.props.handleErrors(err);
                });
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log("updated")
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { tag, category, date_time, duration, log_details } = this.state;

        // axios.post('/get-category', {
        //     tag: tag
        // }).then(res => {
        //     console.log(res.data, "fetched");
        //     this.setState({ category: res.data });
        // }).catch(err => {
        //     console.log("error: ", err);
        // });

        this.setState({ date_time: new Date() });


        axios.post('/add-log', {
            tag: tag,
            category: category,
            date_time: date_time,
            duration: duration,
            log_details: log_details
        }).then(res => {
            console.log(res.status);
            alert("ok");
            this.props.history.push('/logs');
        }).catch(err => {
            console.error("post: ", err);
            this.props.handleErrors(err);
        });
    }

    createTag = () => {
        this.props.history.push("/add-tag");
    }

    render() {
        return (
            <>
                <center>
                    <div id="add-log-form">
                        <form method="POST" onSubmit={this.onSubmit} >
                            <select
                                id="add-log-dropdown"
                                name="tag"
                                value={this.state.tag}
                                onChange={this.onChange}
                            >
                                <option key="choose" value="--">Choose tag</option>
                                {
                                    Object.entries(this.state.tags).map((tag) => {
                                        tag = tag[1]["tag"];
                                        return <option key={tag} value={tag}>{tag}</option>
                                    })
                                }
                            </select><br />
                            <textarea
                                name="log_details"
                                id="add-log-details"
                                placeholder="Input details of log(optional)"
                                value={this.state.log_details}
                                onChange={this.onChange}
                            /><br />
                            <button type="submit" id="add-log-submit">Add Log</button>
                            <br />
                            {/* eslint-disable-next-line */}
                            <a href="#" onClick={this.createTag} style={{ cursor: 'pointer' }}>Create a new tag</a>
                        </form>
                    </div>
                </center>
            </>
        )
    }
}

export default withRouter(AddLog);