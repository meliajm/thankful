// const baseURL = "http://localhost:3001/api/v1/"
const baseURL = "https://cryptic-reaches-70547.herokuapp.com/api/v1/"

export const setCurrentUser = current_user => {
    return {
        type: 'SET_CURRENT_USER',
        current_user
    }
}

export const clearCurrentUser = () => {
    return {
        type: 'CLEAR_CURRENT_USER'
    }
}

export const login = (credentials, routerProps) => {
    console.log('login')
    return dispatch => {
        return fetch(baseURL+"login", {
            credentials: 'include',
            method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
        })
            .then(response => response.json())
            .then(response => {
                if (response.error) {
                    console.log(response.error)
                } else {
                    dispatch(setCurrentUser(response.current_user))
                    dispatch(resetLoginForm())
                    console.log(routerProps)
                    routerProps.history.push('/')
                }
            })
            .catch(console.log)
    }
}

export const signup = (credentials, routerProps) => {
    return dispatch => {
        return fetch(baseURL+"signup", {
            credentials: "include",
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: credentials})
        })
            .then(response => response.json())
            .then(response => {
                if (response.error) {
                    console.log(response.error)
                } else {
                    dispatch(setCurrentUser(response.current_user))
                    dispatch(resetSignupForm())
                    routerProps.history.push('/')
                }
            })
            .catch(console.log)
    }
}

export const logout = event => {
    return dispatch => {
        dispatch(clearCurrentUser())
        return fetch(baseURL+'logout', {
            credentials: "include",
            method: "POST"
        })
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        console.log('get current user')
        return fetch(baseURL+'get_current_user', {
            credentials: "include",
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response=>response.json())
            // .then(response=>console.log('resp', response.current_user))
            .then(response => {
                if (response.error) {
                    console.log(response.error)
                } else {
                    dispatch(setCurrentUser(response.current_user))
                }
                console.log('user auth', response.current_user)
            })
            .catch(console.log)
    }
}

const resetSignupForm = () => {
    return {
        type: "RESET_SIGNUP_FORM"
    }
}

const resetLoginForm = () => {
    return {
        type: "RESET_LOGIN_FORM"
    }
}