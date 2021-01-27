import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { handleLogin } from "../api/login";

export default function Login() {

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState()
  const userRedux = useSelector(state => state.authorized)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>olá {`${userRedux}`}</h1>
      <form onSubmit={e => {
        e.preventDefault()
        setUser(handleLogin(login, password, dispatch))
      }}>
        <p>Login</p>
        <input type='text' onChange={e => setLogin(e.target.value)}></input>
        <p>Senha</p>
        <input type='password' onChange={e => setPassword(e.target.value)}></input>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}