import React from 'react'
import { Link } from 'react-router-dom'

const EntryCard = ({ entry }) => {
    return (
        <div>
         <Link to={`entries/${entry.id}`}>{entry.entry}<br/></Link>
         {/* {entry.} */}
        </div>
    )
}

export default EntryCard