import React from 'react'
import { handleLogout } from '../api/login'
import { useDispatch } from "react-redux";

export default function Home() {

    const dispatch = useDispatch()

    return (
        <div>
            <h1>Home</h1>
            <button onClick={e => handleLogout(dispatch)}>Logout</button>
        </div>
    )
}
