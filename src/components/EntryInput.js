import React, { Component } from 'react'
import { addEntry } from '../actions/entries'
import { connect } from 'react-redux'

export class EntryInput extends Component {

    state = {
        entry: "",
        user: ""
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
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
            entry: ""
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
                    <input type="hidden" id={this.props.id} value={this.props.user.id} />
                    <input type="submit"/>
                </form>
                
            </>
        )
    }
}

export default (connect(null, { addEntry })(EntryInput))