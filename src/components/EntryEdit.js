import React, { Component } from 'react'
import { updateEntry } from '../actions/entries'
import { connect } from 'react-redux'

export class EntryEdit extends Component {
    
    state = this.props.entry ? {
        entry: this.props.entry.entry,
        id: this.props.entry.id
    } : { entry: "", id: 0}

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        if (!this.state.entry) {
            console.log('hey you gotta enter your entry, no blanks')
        }
        this.props.updateEntry(this.state, this.props.routerProps)
            .then(response => {
                this.resetForm()
                this.props.history.push('/entries')
            })
    }

    resetForm = () => {
        this.setState({ entry: ""})
    }
    
    render() {
        return (
            
            
            <div className="div">
                <h4>Edit Entry</h4>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <textarea
                    type="text"
                    onChange={(event) => this.handleChange(event)}
                    name="entry"
                    value={this.state.entry}
                    />
                    <input type="submit"/>
                </form>  
            </div>
            )
    }
}

export default connect(null, { updateEntry })(EntryEdit)