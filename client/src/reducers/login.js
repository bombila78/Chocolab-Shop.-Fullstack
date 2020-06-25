const login = (state, action) => {
    if (state.login === undefined) {
        return {
            loggedIn: false
        }
    }

    switch (action.type) {
        case 'LOGGED_IN':
            return {
                loggedIn: true
            }
        case 'LOGGED_OUT': {
            return {
                loggedIn: false
            }    
        }    
        default:
            return state.login
    }

  
}

export default login;