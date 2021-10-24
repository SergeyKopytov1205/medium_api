import React, { Fragment, useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { CurrentUserContext } from './../../context/currentUser'

import style from './Article.module.css'
import { someDate } from "../../utils/utils";
import Loading from "../../components/Loading";

const Article = ({ match }) => {
   const slug = match.params.slug
   const apiUrl = `/articles/${slug}`
   const [{ response: fetchArticleResponse, isLoading: fetchArticleIsLoading, error: fetchArticleError }, doFetch] = useFetch(apiUrl)
   const [, doDeleteArticle] = useFetch(apiUrl)
   const [currentUserState] = useContext(CurrentUserContext)
   const [isDelete, setIsDelete] = useState(false)

   useEffect(() => {
      doFetch()
   }, [doFetch])

   const deleteArticle = () => {
      setIsDelete(true)
      doDeleteArticle({
         method: 'DELETE'
      })
   }

   const isAuthor = () => {
      if (!fetchArticleResponse || !currentUserState.isLoggedIn) return false
      return currentUserState.currentUser.username === fetchArticleResponse.article.author.username
   }
   if (isDelete) {
      return <Redirect to='/' />
   }
   if (fetchArticleIsLoading || !fetchArticleResponse) return <div className={style.container}><Loading /></div>
   if (fetchArticleError || Object.keys(fetchArticleResponse.article).length === 0) return <div>Some error</div>

   return (
      <div className='container'>
         <div className={style.content}>
            <div className={style.info}>
               <div className={style.image}>
                  <Link to={`/profile/${fetchArticleResponse.article.author.username}`}>
                     <img className={style.pic} src={fetchArticleResponse.article.author.image} alt='' />
                  </Link>
               </div>
               <div >
                  <div>
                     <Link className={style.link} to={`/profile/${fetchArticleResponse.article.author.username}`}>
                        {fetchArticleResponse.article.author.username}
                     </Link>
                  </div>
                  <div className={style.created}>
                     Опубликовано: <div>{someDate(fetchArticleResponse.article.createdAt)}</div>
                  </div>
               </div>
               {isAuthor() && (
                  <Fragment>
                     <Link className={style.edit} to={`/article/${slug}/edit`}>Edit article</Link>
                     <button className={style.delete} onClick={deleteArticle}>Delete article</button>
                  </Fragment>
               )}
            </div>
            <article className={style.article}>
               <h1 className={style.title}>
                  {fetchArticleResponse.article.title}
               </h1>
               <div className={style.body}>
                  {fetchArticleResponse.article.body}
               </div>
            </article>
         </div>
      </div>

   )
}

export default Article