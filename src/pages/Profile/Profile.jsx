import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Loading from "../../components/Loading";
import UserArticles from "../../components/UserArticles";
import useFetch from "../../hooks/useFetch";

import style from './Profile.module.css'

const Profile = ({ match, location }) => {
   const slug = match.params.slug
   const isFavorites = location.pathname.includes('favorites')
   const apiUrl = `/profiles/${slug}`
   const [{ response }, doFetch] = useFetch(apiUrl)

   useEffect(() => {
      doFetch()
   }, [doFetch])

   if (!response) return <div className={style.container}><Loading /></div>

   return (
      <div className='container'>
         <div className={style.content}>
            <div className={style.about}>
               <img className={style.image} src={response.profile.image ? response.profile.image : 'https://realworld-temp-api.herokuapp.com/images/smiley-cyrus.jpeg'} alt="" />
               <h1 className={style.title}>{response.profile.username}</h1>
               <p className={style.bio}>{response.profile.bio}</p>
            </div>
            <ul className={style.list}>
               <NavLink exact to={`/profile/${response.profile.username}`} activeClassName={style.active} className={style.link}>
                  <li className={style.item}>
                     Опубликованные посты
                  </li>
               </NavLink>
               <NavLink to={`/profile/${response.profile.username}/favorites`} activeClassName={style.active} className={style.link} >
                  <li className={style.item}>
                     Избранное
                  </li>
               </NavLink>

            </ul>
            <UserArticles username={response.profile.username} location={location} isFavorites={isFavorites} url={match.url} />
         </div>
      </div>

   )
}
export default Profile