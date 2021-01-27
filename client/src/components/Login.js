import React, { useState, useContext } from "react";
import { handleLogin } from "../api/login";
import { AuthContext } from "../App";

export default function Login() {

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState()

  return (
    <div className="App">
      <form onSubmit={e => {
        e.preventDefault()
        setUser(handleLogin(login, password))
      }}>
        <p>Login</p>
        <p>{user}</p>
        <input type='text' onChange={e => setLogin(e.target.value)}></input>
        <p>Senha</p>
        <input type='password' onChange={e => setPassword(e.target.value)}></input>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}