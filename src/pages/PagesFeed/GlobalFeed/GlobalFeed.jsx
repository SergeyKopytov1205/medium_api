import { stringify } from "query-string";
import React, { Fragment, useEffect } from "react";
import Feed from "../../../components/Feed";
import FeedToggler from "../../../components/FeedToggler";
import Loading from "../../../components/Loading";
import Pagination from "../../../components/Pagination";
import PopularTags from "../../../components/PopularTags";
import { getPaginator, limit } from "../../../utils/utils";

import style from './../PageFeed.module.css'

import useFetch from '../../../hooks/useFetch'

const GlobalFeed = ({ location, match }) => {
   const { currentPage, offset } = getPaginator(location.search)
   const stringifiedParams = stringify({
      limit,
      offset
   })
   const apiUrl = `/articles?${stringifiedParams}`
   const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl)
   const url = match.url

   useEffect(() => {
      doFetch()
   }, [doFetch, currentPage])

   return (
      <div className='container'>
         <div className={style.content}>
            <div className={style.toggler}>
               <FeedToggler />
            </div>
            {isLoading && (
               <Loading />

            )}
            {error && (
               <div>Some error</div>
            )}
            {!isLoading && response && (
               <Fragment>
                  <div className={style.feed}>
                     <Feed articles={response.articles} />
                  </div>
                  <div className={style.pagination}>
                     <Pagination
                        total={response.articlesCount}
                        limit={limit}
                        url={url}
                        currentPage={currentPage} />
                  </div>
                  <div className={style.tags}>
                     <PopularTags />
                  </div>
               </Fragment>
            )}
         </div>

      </div>
   )
}

export default GlobalFeed