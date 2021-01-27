export function toggleAuth(auth, user) {
    return {
        type: 'TOGGLE_AUTH',
        auth,
        user
    }
}

export function logoutAuth() {
    return {
        type: 'LOGOUT_AUTH'
    }
}