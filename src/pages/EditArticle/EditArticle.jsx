import React, { useState, useContext } from "react";
import { useEffect } from "react/cjs/react.development";

import ArticleForm from "../CreateArticle/ArticleForm/ArticleForm";
import useFetch from "../../hooks/useFetch";
import { CurrentUserContext } from "../../context/currentUser";
import { Redirect } from "react-router-dom";

const EditArticle = ({ match }) => {
   const slug = match.params.slug
   const apiUrl = `/articles/${slug}`
   const [{ response: fetchArticleResponse }, doFetchArticle] = useFetch(apiUrl)
   const [{ response: updateArticleResponse, error: updateArticleError }, doUpdateArticle] = useFetch(apiUrl)
   const [initialValue, setInitialValue] = useState(null)
   const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false)
   const [currentUserState] = useContext(CurrentUserContext)

   useEffect(() => {
      doFetchArticle()
   }, [doFetchArticle])

   useEffect(() => {
      if (!fetchArticleResponse) return
      setInitialValue({
         title: fetchArticleResponse.article.title,
         description: fetchArticleResponse.article.description,
         body: fetchArticleResponse.article.body,
         tagList: fetchArticleResponse.article.tagList
      })
   }, [fetchArticleResponse])

   const handleSubmit = (article) => {

      doUpdateArticle({
         method: 'PUT',
         data: {
            article
         }
      })
   }

   useEffect(() => {
      if (!updateArticleResponse) return
      setIsSuccessfullSubmit(true)
   }, [updateArticleResponse])

   if (currentUserState.isLoggedIn === false) {
      return <Redirect to={`/login`} />
   }

   if (isSuccessfullSubmit) { 
      return <Redirect to={`/article/${updateArticleResponse.article.slug}`} />
   }

   return (
      <div>
         <ArticleForm onSubmit={handleSubmit} initialValue={initialValue} errors={(updateArticleError && updateArticleError.errors) || {}} />
      </div>)

}

export default EditArticle
