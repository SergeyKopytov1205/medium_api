import React, { useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { Redirect } from "react-router-dom";

import useLocalStorage from "../../hooks/useLocalStorage";
import { CurrentUserContext } from './../../context/currentUser'
import useFetch from './../../hooks/useFetch'
import BackendErrorMessages from './../../components/BackendErrorMessages'
import { Button, Input, Textarea } from "../../components/FormControl";
import style from './Settings.module.css'

const Settngs = () => {
   const [currentUserState, dispatch] = useContext(CurrentUserContext)
   const apiUrl = '/user'
   const [{ response, error }, doFetch] = useFetch(apiUrl)
   const [, setToken] = useLocalStorage('token')

   const [image, setImage] = useState('')
   const [username, setUsername] = useState('')
   const [bio, setBio] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [isSuccessfullUpdate, setIsSuccessfullUpdate] = useState(false)
   const [isSuccessfullLogout, setIsSuccessfullLogout] = useState(false)

   const handleSubmit = (event) => {
      event.preventDefault()
      const user = {
         ...currentUserState.currentUser,
         image,
         username,
         bio,
         email,
         password
      }
      doFetch({
         method: 'PUT',
         data: {
            user
         }
      })
   }

   const logout = (event) => {
      event.preventDefault()
      setToken('')
      dispatch({ type: 'LOGOUT' })
      setIsSuccessfullLogout(true)
   }

   useEffect(() => {
      if (!currentUserState.currentUser) return
      setImage(currentUserState.currentUser.image)
      setUsername(currentUserState.currentUser.username)
      setBio(currentUserState.currentUser.bio === null ? '' : currentUserState.currentUser.bio)
      setEmail(currentUserState.currentUser.email)
   }, [currentUserState.currentUser])

   useEffect(() => {
      if (!response) return
      dispatch({ type: 'SET_AUTHORIZED', payload: response.user })
      setIsSuccessfullUpdate(true)
   }, [dispatch, response, setToken])

   if (isSuccessfullUpdate) {
      return <Redirect to={`/profile/${response.user.username}`} />
   }

   if (isSuccessfullLogout) {
      return <Redirect to='/' />
   }

   return (
      <div className='container'>
         <div className={style.content}>
            <BackendErrorMessages backendErrors={(error && error.errors) || {}} />
            <h1 className={style.title}>Настройки пользователя</h1>
            <form onSubmit={handleSubmit} className={style.form} >
               <Input type="text" name='Ссылка на фотографию' value={image} setState={setImage} />
               <Input type="text" name='Имя пользователя' value={username} setState={setUsername}
               />
               <Textarea placeholder='О себе' value={bio} setState={setBio} />
               <Input type="text" name='E-mail' value={email} setState={setEmail}
               />
               <Input type="text" name='Введите пароль для обновления' value={password} setState={setPassword}
               />
               <Button text='Обновить настройки' />
               <button className={style.logout} onClick={logout}>Выход</button>
            </form>
         </div>
      </div>

   )
}

export default Settngs