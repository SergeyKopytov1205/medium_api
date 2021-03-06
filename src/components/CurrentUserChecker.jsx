import { useEffect, useContext } from 'react'

import useFetch from './../hooks/useFetch'
import useLocalStorage from './../hooks/useLocalStorage'
import { CurrentUserContext } from '../context/currentUser'

const CurrentUserChecker = ({ children }) => {
   const [{ response }, doFetch] = useFetch('/user')
   const [token] = useLocalStorage('token')
   const [, dispatch] = useContext(CurrentUserContext)

   useEffect(() => {
      if (!token) {
         dispatch({ type: 'SET_UNAUTHORIZED' })
         return
      }
      doFetch()
      dispatch({ type: 'LOADING' })
   }, [token, doFetch, dispatch])

   useEffect(() => {
      if (!response) return
      dispatch({ type: 'SET_AUTHORIZED', payload: response.user })
   }, [response, dispatch])

   return children
}

export default CurrentUserChecker