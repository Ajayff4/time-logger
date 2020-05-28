import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { profileLoad } from '../actions'

const Profile = (props) => {
    useEffect(() => {
        props.profileLoad()
    })
    return (
        <div>
            <h2>Profile Component</h2>
            <h3>Username: {props.username}</h3>
            <h3>Entries made: {props.logsCount}</h3>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        username: state.user.username,
        logsCount: state.log.logs.length
    }
}

const mapDispatchToProps = dispatch => {
    return {
        profileLoad: () => dispatch(profileLoad())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);