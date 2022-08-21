import React from 'react'
import Banner from '../components/Banner'
import CartHorizontal from '../components/CartHorizontal'
import css from '../styles/styles.css'
import water from '../media/activity_watch_hw__f42hdrx2vnqm_large.jpg'
function Home() {
    return (
        <div className='Home-container'>
            <Banner/>
            <h1 className='Home-container__title'>Te ayuda a hacer más. <br/>Por menos de lo que crees.</h1>
            <p className='Home-container__subtitle'>Poderosas funcionalidades para ayudarte a llevar una vida activa, saludable y mantenerte a salvo y en contacto con todo lo que te importa. Sensores avanzados para registrar todos tus movimientos y medir tus entrenamientos favoritos. Y gracias a la conexión celular, puedes salir sin tu teléfono.1 Apple Watch SE es mucho más que un reloj y está más a tu alcance.</p>
            <CartHorizontal img={water}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere a consequatur aliquam id, porro, placeat corporis similique vero voluptatibus obcaecati odio autem mollitia sed non? Qui veniam facere praesentium laboriosam.</p>
        </div>
    )
}

export default Home