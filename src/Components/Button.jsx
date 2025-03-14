import React from 'react'
import'./Styles/styles.css'


export default function button({title, children =""}) {

  return (
    <div className= "tag"style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <button className='button'>{title}
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>{children}</div>
      </button> 
    </div>
  )
}
