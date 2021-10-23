import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import style from './../extract/css/Feed.module.css'
import AddToFavorited from "./AddToFavorited";
import { someDate } from "../utils/utils";

const Feed = ({ articles }) => {

   return (
      <Fragment>
         {articles.map((article, index) => {
            return <section className={style.wrapper} key={index}>
               <div className={style.profile}>
                  <div className={style.image}>
                     <Link to={`/profile/${article.author.username}`}>
                        <img className={style.pic} src={article.author.image} alt="" />
                     </Link>
                  </div>
                  <div className={style.about}>
                     <Link className={style.author} to={`/profile/${article.author.username}`}>
                        {article.author.username}
                     </Link>
                     <div className={style.time}>
                        Опубликовано: <div>{someDate(article.createdAt)}</div>
                     </div>
                  </div>
                  <AddToFavorited isFavorited={article.favorited} articleSlug={article.slug} favoritesCount={article.favoritesCount} />
               </div>
               <div className={style.article}>
                  <h2 className={style.title}>
                     <Link className={style.title_link} to={`/article/${article.slug}`}>
                        {article.title}
                     </Link>
                  </h2>
                  <p className={style.content}>
                     {article.description}
                  </p>
                  <div className={style.info}>
                     <Link to={`/article/${article.slug}`} className={style.more}>Читать далее...</Link>
                     <ul className={style.tag_list}>
                        {article.tagList.map((tag, index) => {
                           if (tag.length > 0) {
                              return (
                                 <li className={style.tag_item} key={index}>
                                    {tag}
                                 </li>
                              )
                           }
                           return null
                        })}
                     </ul>
                  </div>
               </div>
            </section>
         })}
      </Fragment>
   )
}

export default Feed