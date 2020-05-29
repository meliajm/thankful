import React, { Component } from 'react'
import Entries from '../components/Entries'
import EntryInput from '../components/EntryInput'

export class EntriesContainer extends Component {
    
    render() {
        console.log('entries container', this.props)
        return (
            <div>
                {/* <h4>Entries</h4> */}
                    <>
                        <EntryInput user={this.props.user} />
                    </>
                    <Entries entries={this.props.entries} user={this.props.user}/>
            </div>
        )
    }
}

export default (EntriesContainer)