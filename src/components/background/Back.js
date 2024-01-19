import React from 'react'
import './Background.css'
import video1 from '../../assests/video1.mp4'
import image1 from '../../assests/image1.png'
import image2 from '../../assests/image2.png'
import image3 from '../../assests/image3.png'
const Back = ({playStatus,heroCount}) => {
 if(playStatus){
    return(
        <video className='background fade-in' autoPlay loop muted  src={video1} typeof='video/mp4'></video>
    )
 }else if(heroCount===0){
    return(
        <img src={image1} className='background' alt="" />
    )
 }else if(heroCount===1){
    return(
        <img src={image2} className='background' alt="" />
    )
 }else if(heroCount===2){
    return(
        <img src={image3} className='background' alt="" />
    )
 }
}

export default Back
