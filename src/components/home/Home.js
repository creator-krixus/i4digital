import React from 'react'
import i from '../../imagenes/i.png'
import four from '../../imagenes/4.png'
import d from '../../imagenes/d.png'
import './home.css'

function Home() {
    return (
      <div className="Home">
        <img src={i} alt="foto"/>
        <img src={four} alt="foto"/>
        <img src={d} alt="foto"/>
      </div>
    )
}

export default Home
