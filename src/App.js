import React, { Component } from 'react'
import Questions from '../components/Questions'
import QuestionInput from '../components/QuestionInput'


export class EntriesContainer extends Component {

    render() {
        return (
            <>
                <h4>Entries</h4>
                    <p>
                        <EntryInput />
                    </p>
                    <Entries entries={this.props.entries} />
            </>
        )
    }
}

export default (EntriesContainer)