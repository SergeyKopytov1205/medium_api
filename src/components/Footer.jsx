import React from "react";

import style from './../extract/css/Footer.module.css'

const Footer = () => {
   return (
      <div className={style.footer}>
         <p className={style.desc}  >&copy; Настоящий сайт выполнен исключительно в целях обучения и отработки навыков front-end разработки. <br /> Копытов Сергей, г. Екатеринбург, 2021 год. </p>
      </div>
   )
}

export default Footer