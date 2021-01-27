export function saveToken(token) {

    const tokenSplited = token.split('.')
    localStorage.setItem('token0', tokenSplited[0])
    localStorage.setItem('token1', tokenSplited[1])
    localStorage.setItem('token2', tokenSplited[2])

}

export function getToken() {
    const authToken = localStorage.getItem('token0') +
        localStorage.getItem('token1') +
        localStorage.getItem('token2')

    return authToken
}

export function deleteToken() {
    localStorage.clear()
}