import React from 'react'
import video from '../media/small_2x.mp4'
import heroLogo from '../media/hero_logo__bvtwdsrn2mvm_medium.png'
function Banner() {
    return (
        <div className='Banner-container'>
            <video  playsinline autoplay  muted  defaultMuted autoPlay className='Banner-container__videoHero' src={video}></video>
            <img className='Banner-container__logoHero' src={heroLogo} alt="heroLogo" />
        </div>
    )
}

export default Banner