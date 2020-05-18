import React, { Component } from 'react'

class AddLog extends Component {
    tags = [
        "choose tag",
        "work",
        "reading",
        "excercise",
        "tutorials",
        "food",
        "fresh",
        "gaming",
        "cooking",
        "sleeping",
        "dish-washing",
        "cloth-washing",
        "bath"
    ]
    render() {
        return (
            <>
                <center>
                    <div id="add-log-form">
                        <select id="add-log-dropdown">
                            {
                                this.tags.map(tag => {
                                    return <option key={tag} value={tag}>{tag}</option>
                                })
                            }
                        </select>

                        <br />
                        <textarea name="details" id="add-log-details" placeholder="Input details of log(optional)" />
                        <br />
                        <button type="submit" id="add-log-submit">Add</button>
                    </div>
                </center>
            </>
        )
    }
}

export default AddLog;