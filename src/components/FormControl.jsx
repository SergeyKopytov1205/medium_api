import React, { useEffect, useState } from "react";

import style from './../extract/css/FormControl.module.css'

export const Input = ({ type, name, value, setState, autoComplete, error }) => {

   const [placeholder, setPlaceholder] = useState(name)
   const [isError, setIsError] = useState(false)

   useEffect(() => {
      setIsError(false)
      if (!error) return
      const errorsArray = error.errors
      Object.keys(errorsArray).forEach(element => {
         switch (element) {
            case name:
               setPlaceholder(errorsArray[element].join(', '))
               setIsError(true)
               setState('')
               break;
            case 'email or password':
               setPlaceholder(`${element} ${errorsArray[element].join(', ')}`)
               setIsError(true)
               setState('')
               break;
            default:
               break;
         }
      })
   }, [error, name, setState])

   return (
      <input className={isError ? `${style.input} ${style.error}` : `${style.input}`} autoComplete={autoComplete} type={type} placeholder={placeholder} value={value} onChange={e => setState(e.target.value)} />
   )
}

export const Textarea = ({ placeholder, value, setState }) => {
   return (
      <textarea className={style.textarea} placeholder={placeholder} cols="30" rows="3" value={value} onChange={e => setState(e.target.value)} ></textarea>
   )
}

export const Button = ({ isDisabled, text }) => {
   return (
      <button className={style.button} disabled={isDisabled}>
         {text}
      </button>
   )
}
