import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";

import { CurrentUserContext } from './../context/currentUser'
import style from './../extract/css/FeedToggler.module.css'

const FeedToggler = ({ tagName }) => {
   const [currentUserState] = useContext(CurrentUserContext)

   return (
      <ul className={style.list}>
         {currentUserState.isLoggedIn && <FeedTogglerItem url='/feed' text='Подписки' />}
         <FeedTogglerItem url='/' text='Все новости' />
         {tagName && <FeedTogglerItem url={`/tags/${tagName}`} text={tagName} tagName={tagName} />}
      </ul>
   )
}

const FeedTogglerItem = ({ url, text, tagName }) => {
   return (
      <li className={style.item}>
         <NavLink activeClassName={style.active} className={style.link} to={url} exact>
            {tagName && <span>&#x23;</span>}
            {text}
         </NavLink>
      </li>
   )
}

export default FeedToggler