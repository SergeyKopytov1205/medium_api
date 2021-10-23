import { stringify } from "query-string";
import React, { Fragment } from "react";
import { useEffect } from "react/cjs/react.development";
import useFetch from "../hooks/useFetch";

import { getPaginator, limit } from "../utils/utils";
import Feed from './../components/Feed'
import Pagination from './../components/Pagination'
import Loading from "./Loading";

const getApiUrl = ({ username, offset, isFavorites }) => {
   const params = isFavorites ? { limit, offset, favorited: username } : { limit, offset, author: username }
   return `/articles/?${stringify(params)}`
}

const UserArticles = ({ username, isFavorites, location, url }) => {
   const { offset, currentPage } = getPaginator(location.search)
   const apiUrl = getApiUrl({ username, offset, isFavorites })
   const [{ response, error, isLoading }, doFetch] = useFetch(apiUrl)

   useEffect(() => {
      doFetch()
   }, [doFetch, isFavorites, currentPage])
   return (
      <div>
         {isLoading && <Loading />}
         {error && <div>Some error</div>}
         {!isLoading && response && (
            <Fragment>
               <Feed articles={response.articles} />
               <Pagination currentPage={currentPage} limit={limit} total={response.articlesCount} url={url} />
            </Fragment>
         )}
      </div>
   )
}

export default UserArticles