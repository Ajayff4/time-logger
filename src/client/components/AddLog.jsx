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
                        <div id="add-log-left">
                            <select>
                                {
                                    this.tags.map(tag => {
                                        return <option key={tag} value={tag}>{tag}</option>
                                    })
                                }
                            </select>
                            <br />
                            <button type="submit">Add</button>
                        </div >
                        <div id="add-log-right">
                            <textarea name="details" id="details" placeholder="Input details of log(optional)" />
                        </div>
                    </div>
                </center>
            </>
        )
    }
}

export default AddLog;