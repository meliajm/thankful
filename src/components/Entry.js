import React from 'react'
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Entry = (props) => {
    return (
        <p>
        
        {console.log('q?', props)}
            <li>
                {props.entry.content}
            </li>
            <Link to={`${props.entry.id}/edit`}>Edit this entry</Link>
            <br />
        </p>
    )
}

export default (Entry)