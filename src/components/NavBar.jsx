import React, { useContext, Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import style from './../extract/css/Navbar.module.css'

import { CurrentUserContext } from '../context/currentUser'

const NavBar = () => {
   const [CurrentUserState] = useContext(CurrentUserContext)
   const [isToggle, setIsToggle] = useState(false)

   const handleToggle = () => {
      setIsToggle(!isToggle)
   }

   return (
      <div className='container' >
         <header className={style.header}>
            <Link to='/' className={style.logo} >
               <div className={style.logoContent}>
                  <div className={style.logoNumber}>
                     #2
                  </div>
                  <div className={style.logoTitle}>
                     training project
                  </div>
               </div>
            </Link>
            <div onClick={handleToggle} className={`${style.menu} ${isToggle ? style.active : ''}`}></div>
            <nav className={`${style.list} ${isToggle ? style.active : ''}`}>
               <LinkItem handleToggle={handleToggle}  link={'/'} text={'Главная'} />
               {CurrentUserState.isLoggedIn === false && (
                  <Fragment>
                     <LinkItem handleToggle={handleToggle} link={'/login'} text={'Войти'} />
                     <LinkItem handleToggle={handleToggle}  link={'/register'} text={'Зарегистрироваться'} />
                  </Fragment>
               )}
               {CurrentUserState.isLoggedIn === true && (
                  <Fragment>
                     <LinkItem handleToggle={handleToggle}  link={'/editor'} text={'Новая статья'} />
                     <LinkItem handleToggle={handleToggle}  link={'/settings'} text={'Настройки'} />
                     <LinkItem handleToggle={handleToggle}  link={`/profile/${CurrentUserState.currentUser.username}`} text={CurrentUserState.currentUser.username} />
                  </Fragment>
               )}
            </nav>
         </header>
      </div>

   )
}

const LinkItem = ({ link, text, handleToggle }) => {
   return (
      <li onClick={handleToggle} className={style.item}>
         <NavLink exact className={style.link} activeClassName={style.active} to={link} >{text}</NavLink>
      </li>
   )
}

export default NavBar