const entriesReducer = (
    state = {
     entries: [], 
    }, 
     action
     ) => {

    switch(action.type) {
        case 'LOADING_ENTRIES':
            return {
                ...state,
                entries: [...state.entries]
            }
        case 'ADD_ENTRIES':
            return {
                ...state,
                entries: action.entries
            }
        case 'ADD_ENTRY':
            console.log("state in add entry", action.post)

            return {...state, entries: state.entries.concat(action.post)}
        case "UPDATE_ENTRY_SUCCESS":
            console.log("state in update  suc", state)
            console.log(action.entry.id)
            console.log(state.entries)
            console.log(action.entry.entry)

            return Object.assign({}, state, {
                entries: state.entries.map(entry => {
                  if (entry.id !== action.entry.id) {
                    return entry
                  }
        
                  return Object.assign({}, entry, {
                    entry: action.entry.entry
                  })
                })
              })
            case "DELETE_eN":    
                return {...state, entries: state.entries.filter(entry => entry.id!==action.entryId)}
        default:
            return state
    }
}

export default entriesReducer
