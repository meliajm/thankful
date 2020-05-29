import React, { Component } from 'react'
import Entries from '../components/Entries'
import EntryInput from '../components/EntryInput'

export class EntriesContainer extends Component {
    
    render() {
        console.log('entries container', this.props)
        return (
            <div>
                {/* <h4>Entries</h4> */}
                    <p>
                        <EntryInput />
                    </p>
                    <Entries entries={this.props.entries} />
            </div>
        )
    }
}

export default (EntriesContainer)