import React from 'react'

export default function Header() {
    return (
        <header data-test="headerComponent">
            <div className="header" id="header">
                <center>
                    <h1 data-test="titleText" id="titleText">Time Logger App</h1>
                </center>
            </div>  
        </header>      
    )
}

// data-test: attribute is used to specify its test attribute.