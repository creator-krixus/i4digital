import React from 'react'
import i from '../../imagenes/i.png'
import four from '../../imagenes/4.png'
import wilson from '../../imagenes/wilson.jpeg'
import './home.css'

function Home() {
    return (
      <div className="Home">
        <img src={i} alt="foto"/>
        <img src={wilson} alt="foto"/>
        <img src={four} alt="foto"/>
      </div>
    )
}

export default Home
