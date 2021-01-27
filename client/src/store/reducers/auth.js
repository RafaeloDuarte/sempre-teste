const INITIAL_STATE =
{
    authorized: false,
    user: {}
}

export default function auth(state = INITIAL_STATE, action) {
    if (action.type === 'TOGGLE_AUTH') {
        return {
            ...state,
            authorized: action.auth,
            user: action.user
        }
    }
    if (action.type === 'LOGOUT_AUTH') {
        return {
            ...state,
            authorized: false,
            user: null,
        }
    }

    return state
}