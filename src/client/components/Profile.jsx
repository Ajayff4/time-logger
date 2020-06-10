import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { profileLoad } from '../actions'
import PropTypes from 'prop-types'

const Profile = (props) => {
    useEffect(() => {
        props.profileLoad()
    })
    return (
        <div>
            <h2>Profile Component</h2>
            <h3>Username: {props.username}</h3>
            <h3>Entries made: {props.logs ? props.logs.length : 0}</h3>
        </div>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    logsCount: PropTypes.number.isRequired,
    profileLoad: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        username: state.user.username,
        logs: state.log.logs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        profileLoad: () => dispatch(profileLoad())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)