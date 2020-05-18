import React, { Component } from 'react'

class AddTag extends Component {
    categories = [
        "official",
        "un-official"
    ]
    render() {
        return (
            <>
                <h2>Tags Component</h2>
                <center>
                    <div id="add-tag-form">
                        <form>
                            <input type="text" name="tag" id="tag" placeholder="Input tag name" />
                            <br />
                            <select>
                                <option>Choose category</option>
                                {
                                    this.categories.map(category => {
                                        return <option key={category} value={this.onChange}>{category}</option>
                                    })
                                }
                            </select>
                            <br />
                            <button type="submit" value="submit">Add Tag</button>
                        </form>
                    </div>
                </center>
            </>
        )
    }
}

export default AddTag;