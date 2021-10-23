import React from "react";
import useFetch from './../hooks/useFetch'

import style from './../extract/css/AddToFavorited.module.css'


const AddToFavorited = ({ isFavorited, favoritesCount, articleSlug }) => {
   const apiUrl = `/articles/${articleSlug}/favorite`
   const [{ response, isLoading }, doFetch] = useFetch(apiUrl)
   const favoritesCountWithResponse = response ? response.article.favoritesCount : favoritesCount
   const isFavoritedWithResponse = response ? response.article.favorited : isFavorited

   const handleLike = (event) => {
      event.preventDefault()
      doFetch({
         method: isFavoritedWithResponse ? 'DELETE' : 'POST'
      })
   }

   return (
      <button className={`${style.like} ${isFavoritedWithResponse ?style.favor : ''}`} disabled={isLoading} onClick={handleLike}>
         <svg className={style.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M 23 3 C 22.448 3 22 3.448 22 4 L 22 11.75 L 18 22 L 18 43 C 18.413 44.164 19.696 45 21 45 L 40 45 C 42.206 45 44 43.206 44 41 C 44 40.177 43.7395 39.41825 43.3125 38.78125 C 44.8695 38.23425 46 36.742 46 35 C 46 34.021 45.6475 33.1325 45.0625 32.4375 C 46.2235 31.7365 47 30.452 47 29 C 47 28.021 46.6475 27.1325 46.0625 26.4375 C 47.2235 25.7365 48 24.453 48 23 C 48 20.794 46.206 19 44 19 L 29.375 19 C 29.984 17.07 31 13.616 31 12 C 31 8.236 28.24125 3 25.53125 3 L 23 3 z M 3 19 C 2.713 19 2.44 19.12875 2.25 19.34375 C 2.06 19.55875 1.965 19.84 2 20.125 L 5 44.125 C 5.063 44.625 5.496 45 6 45 L 15 45 C 15.552 45 16 44.553 16 44 L 16 20 C 16 19.448 15.552 19 15 19 L 3 19 z M 11.5 38 C 12.328 38 13 38.672 13 39.5 C 13 40.328 12.328 41 11.5 41 C 10.672 41 10 40.328 10 39.5 C 10 38.672 10.672 38 11.5 38 z" />
         </svg>
         {favoritesCountWithResponse}
      </button>
   )
}

export default AddToFavorited