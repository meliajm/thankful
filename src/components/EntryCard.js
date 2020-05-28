import React from 'react'
import { Link } from 'react-router-dom'

const EntryCard = ({ entry }) => {
    return (
        <p>
         <Link to={`entries/${entry.id}`}>{entry.entry}<br/></Link>
        </p>
    )
}

export default EntryCard