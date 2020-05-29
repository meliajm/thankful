import React from 'react'
import { Link } from 'react-router-dom'

const Entry = (props) => {
    return (
        <p>
        
            <li>
                {props.entry.entry}
            </li>
            <Link to={`${props.entry.id}/edit`}>Edit this entry</Link>
            <br />
        </p>
    )
}

export default (Entry)