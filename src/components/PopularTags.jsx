import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";

import style from './../extract/css/PopularTags.module.css'
import Loading from "./Loading";

const PopularTags = () => {
   const [{ response, isLoading, error }, doFetch] = useFetch('/tags')

   useEffect(() => {
      doFetch()
   }, [doFetch])

   if (isLoading || !response) return <Loading />
   if (error) return <div>Some errors</div>

   return (
      <aside className={style.content}>
         <h4 className={style.title}>Популярные теги</h4>
         <ul className={style.list}>
            {response.tags.length === 0 && <div>Not popular tags</div>}
            {response.tags.map((tag, index) => {
               return (
                  <li className={style.item} key={index}>
                     <Link className={style.link} to={`/tags/${tag}`}>
                        {tag}
                     </Link>
                  </li>
               )
            })}
         </ul>
      </aside>

   )
}

export default PopularTags