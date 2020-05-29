import React from 'react'
import { Link } from 'react-router-dom'

const Entry = (props) => {
    console.log(props)
    return (
        <>
        {
        (props.entry.user) 
        ? 
        <div>
        
            <li>
                
            <strong>{`${props.entry.user.username}`}</strong> {`says: ${props.entry.entry}`}
            </li>
            <Link to={`${props.entry.id}/edit`}>Edit this entry</Link>
            <br />
        </div>
        :
        <>
        {props.entry.entry}
        <br/>
        <Link to={`${props.entry.id}/edit`}>Edit this entry</Link>
        </>
        }
        </>
            
    )
}

export default (Entry)