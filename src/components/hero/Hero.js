import React from 'react'
import arrow_btn from "../../assests/arrow_btn.png"
import play_btn from "../../assests/play_icon.png"
import pause_btn from "../../assests/pause_icon.png"

import './Hero.css'
const Hero = ({heroData,heroCount,setHeroCount,playStatus,setPlayStatus}) => {
  return (
    <div className='hero'>
      <div className='hero-text'>
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore More Features</p>
        <img src={arrow_btn} alt="" />
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li onClick={()=>setHeroCount(0)} className={heroCount===0?'hero-dot orange':"hero-dots"}></li>
          <li onClick={()=>setHeroCount(1)} className={heroCount===1?'hero-dot orange':"hero-dots"}></li>
          <li onClick={()=>setHeroCount(2)} className={heroCount===2?'hero-dot orange':"hero-dots"}></li>
        </ul>
        <div className='hero-play'>
          <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pause_btn:play_btn} alt="" />
          <p>Check out</p>
        </div>
      </div>
    </div>
  )
}

export default Hero