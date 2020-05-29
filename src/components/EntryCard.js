import React from 'react'
import { Link } from 'react-router-dom'

const EntryCard = ({ entry }) => {

   
    return (
        <>
            {
                (entry.user) ? 
                <div>
                <Link to={`entries/${entry.id}`}>{entry.entry}<br/></Link>
                by <strong>{entry.user.username}</strong> at {entry.created_at.slice(0, 10)}
                </div> 
                :
                <Link to={`entries/${entry.id}`}>{entry.entry}<br/></Link>
            }
        </>
    )
}

export default EntryCard