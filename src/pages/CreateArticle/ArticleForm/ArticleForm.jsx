import React from "react";
import { useEffect, useState } from "react";

import BackendErrorMessages from "../../../components/BackendErrorMessages";
import style from './ArticleForm.module.css'
import { Button, Input, Textarea } from "../../../components/FormControl";


const ArticleForm = ({ onSubmit, errors, initialValue }) => {
   const [title, setTitle] = useState('')
   const [description, setDescription] = useState('')
   const [body, setBody] = useState('')
   const [tagList, setTagList] = useState([])

   useEffect(() => {
      if (!initialValue) return
      setTitle(initialValue.title)
      setDescription(initialValue.description)
      setBody(initialValue.body)
      setTagList(initialValue.tagList.join(' '))
   }, [initialValue])

   const handleSubmit = (event) => {
      event.preventDefault()
      const article = {
         title,
         description,
         body,
         tagList: tagList.split(' ')
      }
      onSubmit(article)
   }
   return (
      <div className='container'>
         <div className={style.content}>
            {errors && <BackendErrorMessages backendErrors={errors} />}
            <form className={style.form} onSubmit={handleSubmit} >
               <Input type='text' name='Заголовок статьи' value={title} setState={setTitle} />
               <Input type='text' name='Описание статьи' value={description} setState={setDescription} />
               <Textarea placeholder='Напишите вашу статью' value={body} setState={setBody} />
               <Input type='text' name='Список тегов' value={tagList} setState={setTagList} />
               <Button text='Опубликовать' />
            </form>
         </div>
      </div>

   )

}

export default ArticleForm