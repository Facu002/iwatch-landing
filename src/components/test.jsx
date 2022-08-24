import React, { useEffect, useState } from 'react'
import vid from '../media/medium_2x.mp4'
import {CSSTransition} from "react-transition-group";

function Test(props) {
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
    <div className="CartHorizontal-container">
    
        <div className="CartHorizontal-container__box">
    
            <div className='box1-container'>
                <h3 className="box1-container__title"  >{props.text}</h3>
        
                <div className="box1-container__video-container" style={{"background-image": `${props.backgroundImage}`}}>
                <div >
                    {
                        props.video !== undefined
                        ? <video className='box1-container__video' src={props.video} autoPlay></video>
                        : null
                    }
                    {/* <img src={props.backgroundImage} alt="bgImg" /> */}
                </div>
                </div>
        
            </div>
        
            <div className="box2-container">
                <div className='box2-container__btn' onClick={()=>setActiveInfo(!activeInfo)}>
                {
                    !open
                    ? <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-plus" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{transform:"rotate(0deg)", transition:"transform 0.5s"}}>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="12" cy="12" r="9" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                    <line x1="12" y1="9" x2="12" y2="15" />
                </svg>
                    :<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-plus" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke={props.overlayColor} fill="#ffff" strokeLinecap="round" strokeLinejoin="round" style={{transform:"rotate(-135deg)", transition:"all 0.5s"}}>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="12" cy="12" r="9" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                    <line x1="12" y1="9" x2="12" y2="15" />
                </svg>
                }
                
                
                </div >
            </div>
            
            <CSSTransition in={open} timeout={300} classNames="overlayAnimation" unmountOnExit>
        
            <div className='overlaybox-container' style={{"background-color":`${props.overlayColor}`}}>
                    <h3 className='overlaybox-container__title'>Tu compañero de entrenamiento perfecto.</h3>
                    <p className='overlaybox-container__text'>Los círculos de Actividad te muestran todos tus movimientos del día con tres simples mediciones: Moverse, Ejercicio y Pararse. Además, la app Entrenamiento te permite registrar tus ejercicios de Pilates, Bicicleta, Baile o el que más te guste.</p>
            </div>    
        
            </CSSTransition>
        
        </div>
            
    </div>     
    )
}

export default Test