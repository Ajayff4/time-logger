import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import * as actions from '../actions'
import PropTypes from 'prop-types'

class AddTag extends Component {
    static propTypes = {
        addTag: PropTypes.func.isRequired,
        failedToFetchData: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
        this.state = {
            tag: "",
            category: "",
            categories: []
        }
    }

    goToAddLogs = () => {
        this.props.history.push("/add-log")
    }

    componentDidMount() {
        if (this.state.categories !== {}) {
            axios.get('http://localhost:5000/rest/category')
            .then(res => {
                this.setState({ categories: [...res.data] })

            }).catch(err => {
                console.log("Error in fetching logs")
            })
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const { tag, category } = this.state
        axios.post('http://localhost:5000/rest/tags', {
            tag: tag,
            category: category
        })
            .then(res => {
                this.props.addTag()
                this.props.history.push('/add-log')
            }).catch(err => {
                this.props.failedToFetchData("Error in adding tag")
            })
    }

    createCategory = () => {
        this.props.history.push("/add-category")
    }

    render() {
        return (
            <>
                <h2>Add Tag Component</h2>
                <center>
                    <div id="form-css">
                        <form method="POST" onSubmit={this.onSubmit}>
                            <input
                                type="text"
                                name="tag"
                                id="tag"
                                placeholder="Input tag name"
                                value={this.state.tag}
                                onChange={this.onChange}
                                required
                            /><br />
                            <select
                                name="category"
                                value={this.state.category}
                                onChange={this.onChange}
                                required
                            >
                                <option key="choose" value="--">Choose category</option>
                                {
                                    Object.entries(this.state.categories).map((category) => {
                                        category = category[1]["category"]
                                        return <option key={category} value={category}>{category}</option>
                                    })
                                }
                            </select>
                            <br />
                            <button type="submit" value="submit">Add Tag</button>
                            <br />
                            {/* eslint-disable-next-line */}
                            <a href="#" onClick={this.createCategory}>Create a new category</a>
                            <br />
                            {/* eslint-disable-next-line */}
                            <a href="#" onClick={this.goToAddLogs}>back to add log</a>
                        </form>
                    </div>
                </center>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        failedToFetchData: (error) => dispatch(actions.failedToFetchData(error)),
        getAllCategory: () => dispatch(actions.getAllCategory()),
        addTag: () => dispatch(actions.addTag())
    }
}

export default connect(null, mapDispatchToProps)(withRouter(AddTag))