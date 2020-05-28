export default (state={}, action) => {
    switch (action.type) {
        case "SET_CURRENT_USER":
            console.log('current user', action)
            return action.current_user 
        case "CLEAR_CURRENT_USER":
            return {}
        default:
            return state
    }
}