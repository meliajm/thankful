import React, { Component } from 'react'
import { addEntry } from '../actions/entries'
import { connect } from 'react-redux'

export class EntryInput extends Component {

    state = {
        entry: "",
        user_id: ""
    }

    handleOnChange = event => {
        this.setState({
            entry: event.target.value,
            user_id: this.props.user.id
        })
    }
    
    //add user to action
    handleOnSubmit = event => {
        console.log('submit', this.state)
        event.preventDefault()
        if (!this.state.entry) {
            console.log('hey you gotta enter your content, no blanks')
        }
        this.props.addEntry(this.state, this.props.routerProps)
            .then(response => {
                    this.resetForm()
            })
    }

    resetForm = () => {
        this.setState({
            entry: "",
            user_id: ""
        })
    }

    render() {
        // console.log('entry input', this.props.user)
        return (
            <>
            <h4>Input your entry</h4>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <textarea 
                    type="text"
                    onChange={(event) => this.handleOnChange(event)}
                    name="entry"
                    value={this.state.entry}
                    placeholder="What are you thankful for today?"
                    />
                    <br/>
                    <input 
                    type="hidden" 
                    onChange={(event) => this.handleOnChange(event)}
                    value={this.state.user_id} />
                    <input type="submit"/>
                </form>
                
            </>
        )
    }
}

export default (connect(null, { addEntry })(EntryInput))