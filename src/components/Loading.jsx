import React from "react";
import style from './../extract/css/Loading.module.css'

const Loading = () => {
   return (
      <div className={style.container}>
         <div className={style.spinner}></div>
      </div>
   )
}

export default Loading