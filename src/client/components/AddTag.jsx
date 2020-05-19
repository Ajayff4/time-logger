import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

class AddTag extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tag: "",
            category: "",
            categories: {}
        };
    }

    componentDidMount() {
        if (this.state.categories !== {}) {
            axios.post("/categories")
                .then(res => {
                    this.setState({ categories: { ...res.data } });
                }).catch(err => {
                    console.error("post cat: ", err);
                    //this.props.handleErrors(err);
                });
        }

    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { tag, category } = this.state;
        axios.post('/add-tag', {
            tag: tag,
            category: category
        }).then(res => {
            console.log(res.status);
            alert("ok");
            this.props.history.push('/add-log');
        }).catch(err => {
            console.error("post: ", err);
            this.props.handleErrors(err);
        });
    }

    createCategory = () => {
        this.props.history.push("/add-category");
    }

    render() {
        return (
            <>
                <h2>Add Tag Component</h2>
                <center>
                    <div id="add-tag-form">
                        <form method="POST" onSubmit={this.onSubmit}>
                            <input
                                type="text"
                                name="tag"
                                id="tag"
                                placeholder="Input tag name"
                                value={this.state.tag}
                                onChange={this.onChange}
                            /><br />
                            <select
                                name="category"
                                value={this.state.category}
                                onChange={this.onChange}
                            >
                                <option key="choose" value="--">Choose tag</option>
                                {
                                    Object.entries(this.state.categories).map((category) => {
                                        category = category[1]["category"];
                                        return <option key={category} value={category}>{category}</option>
                                    })
                                }
                            </select>
                            <br />
                            <button type="submit" value="submit">Add Tag</button>
                            <br />
                            {/* eslint-disable-next-line */}
                            <a href="#" onClick={this.createCategory}>Create a new category</a>
                        </form>
                    </div>
                </center>
            </>
        )
    }
}

export default withRouter(AddTag);