import React from 'react'
import { Link } from 'react-router-dom'

const Entry = (props) => {
    return (
        <div>
        
            <li>
                {props.entry.entry}
            </li>
            <Link to={`${props.entry.id}/edit`}>Edit this entry</Link>
            <br />
        </div>
    )
}

export default (Entry)