import React from 'react'
import'./Styles/styles.css'

export default function post({title , body , children}) {
  return (
    <div className={"post"}>
        {children}
        <h3>{title}</h3>
        <p>{body}</p>
    </div>
  )
}
