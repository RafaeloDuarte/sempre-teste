import axios from 'axios'

const api = 'http://localhost:3000/users/login'

export function handleLogin(login, password) {

    axios.post(api, {
        login, password
        , headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Authorization",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
            "Content-Type": "application/json;charset=UTF-8"
        },
    }).then(user => {

        console.log(user)

    })

}

export function handleLogout() {



}

export function getLogin() {



}