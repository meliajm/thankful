import React from 'react'
import EntryCard from './EntryCard'

export default function Entries(props) {
    console.log('entries', props)
    return (
        <div>
            
            {props.entries.map( entry => <EntryCard entry={entry}
            key={entry.id}
            />)} 
        </div>
    )
}