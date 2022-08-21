import React, { useEffect, useState } from 'react'
import img from '../media/activity_watch_hw__f42hdrx2vnqm_large.jpg'
import vid from '../media/medium_2x.mp4'
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
    <div className="CartHorizontal-container">

    <div className="CartHorizontal-container__box">

      <div className='box'>
        <h3 className="title">Tu compañero de <br /> <span>entrenamiento</span> <br /> perfecto.</h3>

        <div className="artMainJS main-article2">
          <div>
          <video src={vid} autoPlay></video>
          </div>
        </div>

      </div>

      <div className="box2">
        <div onClick={()=>setActiveInfo(!activeInfo)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-plus" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="12" r="9" />
            <line x1="9" y1="12" x2="15" y2="12" />
            <line x1="12" y1="9" x2="12" y2="15" />
          </svg>
        </div >
      </div>
      {
        open == true
        ? <div className='box3'>
            <h3>Tu compañero de entrenamiento perfecto.</h3>
            <p>Los círculos de Actividad te muestran todos tus movimientos del día con tres simples mediciones: Moverse, Ejercicio y Pararse. Además, la app Entrenamiento te permite registrar tus ejercicios de Pilates, Bicicleta, Baile o el que más te guste.</p>
          </div>
        : null
      }

    </div>
    
  </div>     
  )
}

export default CartHorizontal