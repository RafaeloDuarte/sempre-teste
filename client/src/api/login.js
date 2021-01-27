import axios from 'axios'
import { saveToken, deleteToken, getToken } from "../util/localStorage";

const api = 'http://localhost:3000/users/login'

export async function handleLogin(login, password) {

    let authorization
    
    await axios.post(api, {
        login, password
        , headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Authorization",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
            "Content-Type": "application/json;charset=UTF-8"
        },
    }).then(data => {
        saveToken(data.data.token)
        authorization = data
    })
    return authorization

}

export function handleLogout() {
    deleteToken()
}

export function getLogin() {

    axios.get(api, {
        headers: {
            Authorization: getToken()
        }
    }).then(data => {

        if(data)
        saveToken(data.data.token)

    })

}