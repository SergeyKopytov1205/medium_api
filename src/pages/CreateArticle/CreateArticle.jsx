import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import ArticleForm from "./ArticleForm/ArticleForm";
import useFetch from './../../hooks/useFetch'
import { CurrentUserContext } from "../../context/currentUser";

const CreateArticle = () => {
   const apiUrl = '/articles'
   const [{ response, error }, doFetch] = useFetch(apiUrl)
   const initialValue = {
      title: '',
      description: '',
      body: '',
      tagList: []
   }
   const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false)
   const [currentUserState] = useContext(CurrentUserContext)

   useEffect(() => {
      if (!response) return
      setIsSuccessfullSubmit(true)
   }, [response])

   if (currentUserState.isLoggedIn === false) {
      return <Redirect to={`/login`} />
   }

   if (isSuccessfullSubmit) {
      return <Redirect to={`/article/${response.article.slug}`} />
   }

   const handleSubmit = (article) => {
      doFetch({
         method: 'POST',
         data: {
            article
         }
      })
   }


   return <ArticleForm errors={(error && error.errors) || {}} initialValue={initialValue} onSubmit={handleSubmit} />

}

export default CreateArticle