const baseURL = "http://localhost:3001/api/v1/"

export const fetchEntries = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_ENTRIES'})
        fetch(baseURL+'entries')
        .then(response => { return response.json()})
        .then( entries => {dispatch(addEntries(entries))})
    }
}

const addEntries = entries => ({
    type: 'ADD_ENTRIES',
    entries
})

export const addEntry = (entry, routerProps) => {
    console.log('b')
    return dispatch => {
        console.log('c')
        return fetch(baseURL+"entries", {
            credentials: "include",
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({entry: entry})
        })
        .then(response => response.json())
        .then( newEntry => {
            console.log('qaaaaAA', newEntry)
            console.log('d')
            if (newEntry.error) {
                console.log(newEntry.error)
            } else {
                dispatch(addQ(newEntry))
                // routerProps.history.push('/entries')
            }
            // return newEntry
        })
        console.log('e')
    }
    console.log('f')
}

export const addQ = entry => ({ type: "ADD_ENTRY", entry})

export const updateEntry = (entry, routerProps) => {
    return dispatch => {
        return fetch(baseURL+`entries/${entry.id}`, {
            credentials: "include",
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({entry: entry})
        })
            .then( response => response.json())
            .then( entry => {
                if (entry.error) {
                    console.log(entry.error)
                } else {
                    dispatch(updateEntrySuccess(entry))
                    // routerProps.push('/entries')
                }
                // return entry
            })
    }
}

export const updateEntrySuccess = entry => ({ type: "UPDATE_ENTRY_SUCCESS", entry })

export const deleteEntry = (entryId, routerProps) => {
    return dispatch => {
        return fetch(baseURL+`entries/${entryId}`, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .finally( resp => {
                    dispatch(deleteEntrySuccess(entryId))
                    routerProps.push('/entries')
                    // console.log(routerProps)
             })   
    }
}

export const deleteEntrySuccess = entryId => {
    return {
        type: "DELETE_ENTRY",
        entryId
    }
}

