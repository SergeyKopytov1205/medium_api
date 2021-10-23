import { useState, useEffect, useCallback } from "react"
import axios from "axios";

import useLocalStorage from './useLocalStorage'


const useFetch = (url) => {
   const baseUrl = 'https://api.realworld.io/api'

   const [response, setResponse] = useState(null)
   const [isLoading, setIsLoading] = useState(false)
   const [error, setError] = useState(null)
   const [options, setOptions] = useState({})
   const [token] = useLocalStorage('token')

   const doFetch = useCallback((options) => {
      setIsLoading(true)
      setOptions(options)
   }, [])

   useEffect(() => {
      let skipGetResponseAfterDestroy = false
      const requestOptions = {
         ...options,
         ...{
            headers: {
               authorization: token ? `Token ${token}` : ''
            }
         }
      }
      if (!isLoading) return
      axios(baseUrl + url, requestOptions)
         .then(res => {
            if (!skipGetResponseAfterDestroy) {
               setResponse(res.data)
               setIsLoading(false)
            }
         })
         .catch(error => {
            if (!skipGetResponseAfterDestroy) {
               setError(error.response.data)
               setIsLoading(false)
            }
         })
      return () => {
         skipGetResponseAfterDestroy = true
      }
   }, [isLoading, options, url, token])

   return [{ response, isLoading, error }, doFetch]
}

export default useFetch