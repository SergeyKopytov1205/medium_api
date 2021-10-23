import React, { useEffect, useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";

import style from './Authentication.module.css'

import useFetch from "../../hooks/useFetch";
import useLocalStorage from "../../hooks/useLocalStorage";
import { CurrentUserContext } from '../../context/currentUser'
import {Input, Button} from "../../components/FormControl";

const Authentication = (props) => {
   const isLogin = props.location.pathname === '/login'
   const pageTitle = isLogin ? 'Вход' : 'Регистрация'
   const pageLink = isLogin ? '/register' : '/login'
   const linkDescription = isLogin ? 'Зарегистрировать аккаунт?' : 'Уже зарегистрирован?'
   const apiUrl = isLogin ? '/users/login' : '/users'

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [username, setUsername] = useState('')
   const [isSuccesfullSubmit, setIsSuccesfullSubmit] = useState(false)
   const [, setToken] = useLocalStorage('token')
   const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl)
   const [, dispatch] = useContext(CurrentUserContext)

   useEffect(() => {
      if (!response) return
      setToken(response.user.token)
      setIsSuccesfullSubmit(true)
      dispatch({ type: 'SET_AUTHORIZED', payload: response.user })
   }, [response, setToken, dispatch])

   const handleSubmit = (event) => {
      event.preventDefault()
      const user = isLogin ? { email, password } : { email, password, username }
      doFetch({
         method: 'post',
         data: {
            user
         }
      })
   }

   if (isSuccesfullSubmit) {
      return <Redirect to='/' />
   }

   return (
      <div className={style.container}>
         <h1 className={style.title} >{pageTitle}</h1>
         <form className={style.form} onSubmit={handleSubmit}>
            <Link className={style.link} to={pageLink}>{linkDescription}</Link>
            {!isLogin && (
               <Input error={error} type='text' name='Имя пользователя' value={username} setState={setUsername} />
            )}
            <Input error={error} type='text' name='E-mail' value={email} setState={setEmail} />
            <Input error={error} type='password' name='Пароль' value={password} setState={setPassword} autoComplete="off" />
            <Button isDisabled={isLoading} text='Войти' />
         </form>
      </div>
   )
}

export default Authentication