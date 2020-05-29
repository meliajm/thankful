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

// const user1 = props.entries.filter( entry => entry.user.id === 1)

//     const user2 = props.entries.filter( entry => entry.user.id === 2)


 // <div className="container">
        //     <div id="left">
        //         {user1.map( entry => 
        //         (entry) ?  <EntryCard entry={entry}
        //             key={entry.id}
        //             /> : null)} 
        //     </div>

        //     <div id="right">
        //         {user2.map( entry => 
        //         (entry) ?  <EntryCard entry={entry}
        //         key={entry.id}
        //         /> : null)} 
        //     </div>
        // </div>