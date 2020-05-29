import React, { Component } from 'react'
import { fetchEntries } from './actions/entries'
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { connect } from 'react-redux'
import Login from './components/Login'
import EntriesContainer from './containers/EntriesContainer'
import { getCurrentUser } from './actions/userAuth'
import Entry from './components/Entry'
import EntryEdit from './components/EntryEdit'
import Home from './components/Home';


export class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
    this.props.fetchEntries()
  }

    render() {
        return (
          <>
          
          { this.props.loggedIn ?
            <>
              <NavBar />
                <Route 
                exact path="/entries" 
                render={routerProps => <EntriesContainer entries={this.props.entries} user={this.props.user}/>} 
                />
                
            <Route exact path="/entries/:id" 
                render={(routerProps) => {
                    const entry = this.props.entries.find(entry => entry.id === parseInt(routerProps.match.params.id))
                    return ( entry &&
                    <Entry {...routerProps} entry={entry}/>)
                }}/>
            <Route exact path="/entries/:id/edit"
                render={(routerProps) => {
                    const entry = this.props.entries.find(entry => entry.id === parseInt(routerProps.match.params.id))
                    return ( entry &&
                       <EntryEdit {...routerProps} entry={entry} />)
                }} />
            <Route 
                exact path="/" 
                render={routerProps => <Home />} 
                />
                
            </>
           :
           <>
           <NavBar />
            <Route
              exact path="/login"
              render={ routerProps => <Login routerProps={routerProps}/>} /> 
              <p>Please log in.</p>
      </>
           }
          
          </>
        )
    }
}

const mapStateToProps = state => {
  return {
    loggedIn: (Object.keys(state.currentUser).length === 0) ? false : true,
    entries: state.entriesReducer.entries,
    user: state.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCurrentUser: () => dispatch(getCurrentUser()),
    fetchEntries: () => dispatch(fetchEntries()),
  }
}

export default (connect(mapStateToProps, mapDispatchToProps)(App))