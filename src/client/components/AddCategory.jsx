import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class AddCategory extends Component {
    goToAddTag = () => {
        this.props.history.push("/add-tag");
    }

    render() {
        return (
            <>
                <h2>Add Category Component</h2>
                <center>
                    <div id="add-tag-form">
                        <form>
                            <input type="text" name="category" id="category" placeholder="Input category name" />
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