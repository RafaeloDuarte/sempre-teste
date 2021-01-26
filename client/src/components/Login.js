import React, { useState } from "react";
import { handleLogin } from "../api/login";

export default function Login() {

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="App">
      <form onSubmit={e => {
        e.preventDefault()
        handleLogin(login, password);
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