import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

class AddCategory extends Component {
    constructor() {
        super();
        this.state = {
            category: ""
        }
    }

    goToAddTag = () => {
        this.props.history.push("/add-tag");
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { category } = this.state;
        axios.post('/add-category', {
            category: category
        }).then(res => {
            console.log(res.data);
            alert("ok");
            this.props.history.push('/add-log');
        }).catch(err => {
            console.error("post: ", err);
        });
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
                                placeholder="Input category name"
                                value={this.state.category}
                                onChange={this.onChange}
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

export default withRouter(AddCategory);