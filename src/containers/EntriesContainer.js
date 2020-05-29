import React, { Component } from 'react'
import Entries from '../components/Entries'
import EntryInput from '../components/EntryInput'

export class EntriesContainer extends Component {
    
    
    render() {
        const user1 = this.props.entries.filter( entry => entry.user.id === 1)
        const user2 = this.props.entries.filter( entry => entry.user.id === 2)
        console.log('entries container', this.props)
        return (
            <div className="row">
                <div className="center">
                        <EntryInput user={this.props.user} />
                        {/* <br/> */}
                </div>
                <div className="column">
                        {/* <Entries entries={this.props.entries} user={this.props.user}/> */}
                        <Entries entries={user1} user={this.props.user}/>

                </div>
                <div className="column">
                        <Entries entries={user2} user={this.props.user}/>
                </div>

            
            </div>
        )
    }
}

export default (EntriesContainer)