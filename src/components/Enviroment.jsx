import React from 'react'
import enviroment from '../media/environment_logo__e9jts37xk5qy_medium_2x.png'
function Enviroment() {
    return (
        <div className='enviroment-container'>
            <div>
                <img className='enviroment-container__img' src={enviroment} alt="enviroment-apple-logo" />
                <h2 className='enviroment-container__title'>Medio ambiente</h2>
                <p className='enviroment-container__text'>Trabajamos para que nuestros productos tengan el menor impacto ambiental posible durante todo su ciclo de vida. Nuestro compromiso es lograr que todos nuestros productos y empaques sean 100% producidos con materiales reciclados y renovables. El Apple Watch se ha diseñado con una serie de características para reducir el impacto ambiental.</p>
                <a className='enviroment-container__link' href="https://www.apple.com/la/environment/"> Más información sobre Apple y el medio ambiente {'>'} </a>
            </div>
        </div>
    )
}

export default Enviroment