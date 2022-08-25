import React, { useEffect, useState } from 'react'

import {CSSTransition} from "react-transition-group";
function CartHorizontal(props) {

  const [activeInfo, setActiveInfo] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (activeInfo !== false) {
      setOpen(!open)
      //console.log(open)
    }
    else{
      setOpen(false)
      //console.log(open)
    }
  }, [activeInfo])
  

  return (
    <div className={`CartHorizontal-container ${props.identityclass}`}>

    <div className="CartHorizontal-container__box">

      <div className='box1-container'>
        <h3 className="box1-container__title">{props.cartTitle}</h3>

        <div className="box1-container__media-container">
          <div>
            {
              props.video == undefined
              ? <img className='box1-container__img' src={props.media} alt="media-card-img"  />
              : <video className='box1-container__video' src={props.video} autoPlay></video>
            }
          </div>
      </div>

      </div>

      <div className="box2-container">
        <div className='box2-container__btn' onClick={()=>setActiveInfo(!activeInfo)}>
          {
            !open
            ? <svg xmlns="http://www.w3.org/2000/svg" className="icon-close icon-tabler icon-tabler-circle-plus" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke={props.bntStrokeColor} fill="none" strokeLinecap="round" strokeLinejoin="round" style={{transform:"rotate(0deg)", transition:"transform 0.5s"}}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="12" r="9" />
            <line x1="9" y1="12" x2="15" y2="12" />
            <line x1="12" y1="9" x2="12" y2="15" />
          </svg>
            :<svg xmlns="http://www.w3.org/2000/svg" className="icon-open icon-tabler icon-tabler-circle-plus" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke={props.secondaryColor} fill="#ffff" strokeLinecap="round" strokeLinejoin="round" style={{transform:"rotate(-135deg)", transition:"all 0.5s"}}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="12" r="9" />
            <line x1="9" y1="12" x2="15" y2="12" />
            <line x1="12" y1="9" x2="12" y2="15" />
          </svg>
          }
          
          
        </div >
      </div>
      
      <CSSTransition in={open} timeout={300} classNames="overlayAnimation" unmountOnExit>

      <div className='overlaybox-container'>
            <h3 className='overlaybox-container__title'>{props.overlayTitle}</h3>
            <p className='overlaybox-container__text'>{props.overlayText}</p>
      </div>

      </CSSTransition>

    </div>
    
  </div>     
  )
}

export default CartHorizontal