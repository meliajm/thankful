import React from 'react'
import EntryCard from './EntryCard'

export default function Entries(props) {
    console.log('entries', props)
    return (
        
            <>
                {props.entries.map( entry => 
                (entry) ?  <EntryCard entry={entry}
                    key={entry.id}
                    /> : null)} 
            </>

        
       
    )
}