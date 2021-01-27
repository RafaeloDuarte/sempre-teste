import axios from 'axios'
import { saveToken, deleteToken, getToken } from "../util/localStorage";
import { toggleAuth } from "../store/actions/auth";

const api = 'http://localhost:3000/users/login'

export async function handleLogin(login, password, dispatch) {

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
        const user = data.data.user
        dispatch(toggleAuth(true, user))
    })
    return authorization

}

export function handleLogout(dispatch) {
    deleteToken()
    dispatch(toggleAuth(false, {}))
}

export function getLogin(dispatch) {

    axios.get(api, {
        headers: {
            Authorization: getToken()
        }
    }).then(data => {

        const user = data.data.user
        saveToken(data.data.token)
        dispatch(toggleAuth(true, user))

    })
}