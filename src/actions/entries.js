// const baseURL = "http://localhost:3001/api/v1/"
const baseURL = "https://cryptic-reaches-70547.herokuapp.com/api/v1/"
export const fetchEntries = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_ENTRIES'})
        fetch(baseURL+'posts')
        .then(response => { return response.json()})
        .then( entries => {dispatch(addEntries(entries))})
    }
}

const addEntries = entries => ({
    type: 'ADD_ENTRIES',
    entries
})

export const addEntry = (entry, routerProps) => {
    console.log('addEntry', entry)
    return dispatch => {
        const body = {
            post: entry
        }
        console.log(body)
        return fetch(baseURL+"posts", {
            credentials: "include",
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then( newPost => {
            console.log('addEntry', newPost)
            if (newPost.error) {
                console.log(newPost.error)
            } else {
                // console.log(addQ)
                dispatch(addPost(newPost))
            }
        })
    }
}

export const addPost = post => ({ type: "ADD_ENTRY", post})

export const updateEntry = (entry, routerProps) => {
    console.log(entry)
    return dispatch => {
        const body = {
            post: entry
        }
        console.log(body)
        return fetch(baseURL+`posts/${entry.id}`, {
            credentials: "include",
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then( response => response.json())
            .then( updatedPost => {
                console.log('up', updatedPost)
                if (updatedPost.error) {
                    console.log(updatedPost.error)
                } else {
                    dispatch(updateEntrySuccess(updatedPost))
                }
            })
    }
}

export const updateEntrySuccess = entry => ({ type: "UPDATE_ENTRY_SUCCESS", entry })

export const deleteEntry = (entryId, routerProps) => {
    return dispatch => {
        return fetch(baseURL+`posts/${entryId}`, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .finally( resp => {
                    dispatch(deleteEntrySuccess(entryId))
                    routerProps.push('/posts')
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

