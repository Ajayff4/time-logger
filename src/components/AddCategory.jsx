import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import * as actions from '../actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class AddCategory extends Component {
    static propTypes = {
        addCategory: PropTypes.func.isRequired,
        failedToFetchData: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            category: ""
        }
    }

    goToAddTag = () => {
        this.props.history.push("/add-tag")
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/rest/category/add', {
            category: this.state.category
        },{
            headers: {"Content-type": "application/json"}
        })
        .then(res => {
            this.props.addCategory()
            this.props.history.push('/add-tag')
        }).catch(err => {
            this.props.failedToFetchData("Error in add category" + err);
        })
    }

    render() {
        return (
            <>
                <h2>Add Category Component</h2>
                <center>
                    <div id="form-css">
                        <form method="POST" onSubmit={this.onSubmit}>
                            <input
                                type="text"
                                name="category"
                                id="category"
                                placeholder="Input category"
                                value={this.state.category}
                                onChange={this.onChange}
                                required
                            />
                            <br />
                            <button type="submit" value="submit">Add Category</button>
                            <br />
                            {/* eslint-disable-next-line */}
                            <a href="#" onClick={this.goToAddTag}>back to add tag</a>
                        </form>
                    </div>
                </center>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addCategory: () => dispatch(actions.addCategory()),
        failedToFetchData: (err) => dispatch(actions.failedToFetchData(err))
    }
}

export default connect(null, mapDispatchToProps)(withRouter(AddCategory))