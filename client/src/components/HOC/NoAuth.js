import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router"
import { getLogin } from '../../api/login'

const noAuth = Component => props =>{

  const dispatch = useDispatch()
  getLogin(dispatch)
  const auth = useSelector(state => state.authorized)
  const history = useHistory()
  
  useEffect(() => {
    if (auth)
      history.push("/")
  }, [auth, history])

  return (
    <>
      <Component />
    </>
  );
}

export default noAuth