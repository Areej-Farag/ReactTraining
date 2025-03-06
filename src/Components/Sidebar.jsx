import React from 'react'
import Button from './Button'
import'./Styles/styles.css'
import img1 from '../photo1.png'

export default function sidebar() {
  return (
    <div className='sidebar'>
      <Button title= "****" />
      <Button>
        <p>Home</p>
        <img src={img1} alt="" />
      </Button>
      <Button title="Profile">
        <p>PPPPPPPP</p>
        <img src={img1} alt="" />
      </Button>
    </div>
  )
}

