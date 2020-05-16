import React, { Component } from 'react';

export default class Login extends Component {
    render() {
        return (
            <>

                <center>
                    <div>
                        <fieldset>
                            <legend>Login</legend>
                            <form>
                                <input type="text" name="username" id="username" placeholder="username" /><br />
                                <input type="password" name="password" id="password" placeholder="password" /><br />
                                <input type="submit" name="submit" value="submit" />
                            </form>
                        </fieldset>
                    </div>
                </center>

            </>
        )
    }
}