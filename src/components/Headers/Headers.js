import React from 'react'
import image from './covid.png'
import './Headers.module.css'
import style from './Headers.module.css'
import Tilt from 'react-tilt'
 

const Headers = () => {
  return (
      <div>
      <Tilt className="Tilt" options={{ max : 15 }} style={{ height: 50, width: 150 }} >
      <img className={style.image} src={image} alt='covid' />
      </Tilt>
      </div>
  )
}

export default Headers;