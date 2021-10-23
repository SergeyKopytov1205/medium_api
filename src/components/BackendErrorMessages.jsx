import React from "react";

const BackendErrorMessages = ({ backendErrors }) => {
   const errorMessages = Object.keys(backendErrors).map(name => {
      const messages = backendErrors[name].join(' ')
      return `${name} ${messages} `
   })

   return (
      <ul >
         {errorMessages.map((errorMessage, index) => {
            return <li key={index} >{errorMessage}</li>
         })}
      </ul>
   )
}

export default BackendErrorMessages