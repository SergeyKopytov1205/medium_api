import React from "react";
import { Link } from "react-router-dom";

import style from './../extract/css/Pagination.module.css'

import { range } from "../utils/utils";

const PaginationItem = ({ page, currentPage, url }) => {
   const itemActive = page === currentPage ? style.active : ''
   return (

      <Link className={style.link} to={`${url}?page=${page}`} >
         <li className={`${itemActive} ${style.item}`} >
            {page}
         </li>
      </Link>

   )
}

const Pagination = ({ total, currentPage, url, limit }) => {
   //1. узнать количество страниц и округлить в большую сторону
   const pagesCount = Math.ceil(total / limit)
   //2. создать объект со страницами
   let pages = range(1, pagesCount)

   if (pages.length <= 1) return null

   return (
      <ul className={style.list}>
         {pages.map(page => {
            return <PaginationItem
               key={page}
               page={page}
               currentPage={currentPage}
               url={url} />
         })}
      </ul>
   )
}

export default Pagination